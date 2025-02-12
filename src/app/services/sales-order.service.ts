import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { SalesOrder } from '../models/sales-order.model';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalesOrderService {
  constructor(private supabase: SupabaseService) {}

  getSalesOrders(filters?: {
    customerName?: string;
    customerEmail?: string;
    customerMobile?: string;
    status?: string;
    orderDate?: Date;
  }): Observable<SalesOrder[]> {
    let query = this.supabase.client
      .from('sales_orders')
      .select(`
        *,
        sales_order_items (
          product_id,
          quantity,
          price
        )
      `)
      .order('created_at', { ascending: false });

    if (filters) {
      if (filters.customerName) {
        query = query.ilike('customer_name', `%${filters.customerName}%`);
      }
      if (filters.customerEmail) {
        query = query.ilike('customer_email', `%${filters.customerEmail}%`);
      }
      if (filters.customerMobile) {
        query = query.ilike('customer_mobile', `%${filters.customerMobile}%`);
      }
      if (filters.status) {
        query = query.eq('status', filters.status);
      }
      if (filters.orderDate) {
        query = query.gte('order_date', filters.orderDate.toISOString());
      }
    }

    return from(query).pipe(
      map(({ data }) => data as SalesOrder[])
    );
  }

  createSalesOrder(order: Omit<SalesOrder, 'id' | 'created_at' | 'updated_at'>): Observable<SalesOrder> {
    return from(
      this.supabase.client
        .from('sales_orders')
        .insert([order])
        .select()
        .single()
    ).pipe(
      map(({ data }) => {
        // Send order to third-party API
        this.sendOrderToThirdParty(data as SalesOrder);
        return data as SalesOrder;
      })
    );
  }

  private async sendOrderToThirdParty(order: SalesOrder): Promise<void> {
    try {
      await fetch('https://third-party-api.com/salesOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        },
        body: JSON.stringify(order)
      });
    } catch (error) {
      console.error('Failed to send order to third-party API:', error);
    }
  }
}