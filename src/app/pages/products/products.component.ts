import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "../../shared_components/product-card/product-card.component";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { MatDialog } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AddToCartModalComponent } from "../../shared_components/add-to-cart-modal/add-to-cart-modal.component";
import { NoDataComponent } from "../../shared_components/no-data/no-data.component";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    NoDataComponent,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products.map((product) => ({
          ...product,
          isInCart: false,
        }));
        this.loading = false;
      },
      error: (error) => {
        this.error = "Failed to load products";
        this.loading = false;
        console.error("Error loading products:", error);
      },
    });
  }

  addToCart(product: Product): void {
    const dialogRef = this.dialog.open(AddToCartModalComponent, {
      data: { product },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productService.addToCart(product).subscribe({
          next: (updatedProduct) => {
            const index = this.products.findIndex(
              (p) => p.id === updatedProduct.id
            );
            if (index !== -1) {
              this.products[index] = updatedProduct;
              this.products = [...this.products];
            }
          },
          error: (error) => {
            console.error("Error adding to cart:", error);
            // Handle error (show snackbar/toast)
          },
        });
      }
    });
  }
}
