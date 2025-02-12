import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Product } from '../models/product.model';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private supabase: SupabaseService) {}

  getProducts(): Observable<Product[]> {
    return from(
      this.supabase.client
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
    ).pipe(
      map(({ data }) => data as Product[])
    );
  }

  getProduct(id: string): Observable<Product> {
    return from(
      this.supabase.client
        .from('products')
        .select('*')
        .eq('id', id)
        .single()
    ).pipe(
      map(({ data }) => data as Product)
    );
  }

  createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Observable<Product> {
    return from(
      this.supabase.client
        .from('products')
        .insert([product])
        .select()
        .single()
    ).pipe(
      map(({ data }) => data as Product)
    );
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return from(
      this.supabase.client
        .from('products')
        .update(product)
        .eq('id', id)
        .select()
        .single()
    ).pipe(
      map(({ data }) => data as Product)
    );
  }

  deleteProduct(id: string): Observable<void> {
    return from(
      this.supabase.client
        .from('products')
        .delete()
        .eq('id', id)
    ).pipe(
      map(() => void 0)
    );
  }
}