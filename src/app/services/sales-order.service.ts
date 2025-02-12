import { Injectable, DestroyRef, inject } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { SalesOrder } from "../models/sales-order.model";
import { Observable, EMPTY } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { API_URL } from "../config/api-config";

@Injectable({
  providedIn: "root",
})
export class SalesOrderService {
  private destroyRef = inject(DestroyRef);

  constructor(private http: HttpClient) {}

  getSalesOrders(filters?: {
    customerName?: string;
    customerEmail?: string;
    customerMobile?: string;
    status?: string;
    orderDate?: Date;
  }): Observable<SalesOrder[]> {
    let params = new HttpParams();
    if (filters) {
      if (filters.customerName) {
        params = params.set("customerName", filters.customerName);
      }
      if (filters.customerEmail) {
        params = params.set("customerEmail", filters.customerEmail);
      }
      if (filters.customerMobile) {
        params = params.set("customerMobile", filters.customerMobile);
      }
      if (filters.status) {
        params = params.set("status", filters.status);
      }
      if (filters.orderDate) {
        params = params.set("orderDate", filters.orderDate.toISOString());
      }
    }
    return this.http
      .get<SalesOrder[]>(`${API_URL}/sales_orders`, { params })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError((err) => {
          console.error("Error fetching sales orders:", err);
          return EMPTY;
        })
      );
  }

  createSalesOrder(
    order: Omit<SalesOrder, "id" | "created_at" | "updated_at">
  ): Observable<SalesOrder> {
    return this.http.post<SalesOrder>(`${API_URL}/sales_orders`, order).pipe(
      tap((createdOrder: SalesOrder) => {
        // Send order to third-party API after successful order creation
        this.sendOrderToThirdParty(createdOrder).subscribe();
      }),
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
        console.error("Error creating sales order:", err);
        return EMPTY;
      })
    );
  }

  private sendOrderToThirdParty(order: SalesOrder): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    });
    return this.http
      .post("https://third-party-api.com/salesOrder", order, { headers })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        catchError((err) => {
          console.error("Failed to send order to third-party API:", err);
          return EMPTY;
        })
      );
  }
}
