import { Injectable, DestroyRef, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { Observable, EMPTY, of } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { API_URL } from "../config/api-config";
import { MOCK_PRODUCTS } from "./mock-data";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private destroyRef = inject(DestroyRef);
  private apiUrl = `${API_URL}/api/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // Temporarily return mock data with artificial delay
    // return of(MOCK_PRODUCTS).pipe(
    //   delay(800),
    //   takeUntilDestroyed(this.destroyRef)
    // );

    return this.http.get<Product[]>(`${this.apiUrl}`).pipe(
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
        console.error("Error fetching products:", err);
        return EMPTY;
      })
    );
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
        console.error(`Error fetching product with id ${id}: `, err);
        return EMPTY;
      })
    );
  }

  createProduct(
    product: Omit<Product, "id" | "created_at" | "updated_at">
  ): Observable<Product> {
    return this.http.post<Product>(`${API_URL}/products`, product).pipe(
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
        console.error("Error creating product:", err);
        return EMPTY;
      })
    );
  }

  updateProduct(id: string, product: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/products/${id}`, product).pipe(
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
        console.error(`Error updating product with id ${id}: `, err);
        return EMPTY;
      })
    );
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/products/${id}`).pipe(
      takeUntilDestroyed(this.destroyRef),
      catchError((err) => {
        console.error(`Error deleting product with id ${id}: `, err);
        return EMPTY;
      })
    );
  }

  addToCart(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, {
      ...product,
      isInCart: true
    });
  }
}
