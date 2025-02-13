import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { NoDataComponent } from "../../shared_components/no-data/no-data.component";
import { HeroCarouselComponent } from "../../shared_components/hero-carousel/hero-carousel.component";
import { AddToCartModalComponent } from "../../shared_components/add-to-cart-modal/add-to-cart-modal.component";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { CartService } from "../../services/cart.service";
import { ProductCardComponent } from "../../shared_components/product-card/product-card.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    NoDataComponent,
    HeroCarouselComponent,
    ProductCardComponent,
  ],
  providers: [CartService],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private cartService: CartService
  ) {}

  trackByProduct(index: number, product: Product): number {
    return product.id;
  }

  ngOnInit() {
    console.log("HomeComponent loaded!");
    this.products = [
      {
        id: 1,
        name: "Executive Laptop",
        description:
          "High-performance business laptop with 16GB RAM and 512GB SSD",
        price: "1299.99",
        stock: 50,
        image_url: "https://picsum.photos/400/300?random=1",
        isInCart: false,
        created_at: "2025-02-13T05:43:10.715Z",
        updated_at: "2025-02-13T05:43:10.715Z",
      },
      {
        id: 2,
        name: "Ergonomic Desk Chair",
        description:
          "Ergonomic office chair with lumbar support and adjustable height",
        price: "299.99",
        stock: 20,
        image_url: "https://picsum.photos/400/300?random=2",
        isInCart: false,
        created_at: "2025-02-13T05:43:10.715Z",
        updated_at: "2025-02-13T05:43:10.715Z",
      },
      {
        id: 3,
        name: "Wireless Laser Printer",
        description:
          "Color laser printer with wireless connectivity and duplex printing",
        price: "449.99",
        stock: 30,
        image_url: "https://picsum.photos/400/300?random=3",
        isInCart: false,
        created_at: "2025-02-13T05:43:10.715Z",
        updated_at: "2025-02-13T05:43:10.715Z",
      },
      {
        id: 4,
        name: "HD Conference Phone",
        description: "HD voice quality conference phone with noise reduction",
        price: "199.99",
        stock: 40,
        image_url: "https://picsum.photos/400/300?random=4",
        isInCart: false,
        created_at: "2025-02-13T05:43:10.715Z",
        updated_at: "2025-02-13T05:43:10.715Z",
      },
    ];
  }

  openAddToCartModal(product: any): void {
    const dialogRef = this.dialog.open(AddToCartModalComponent, {
      width: "400px",
      data: { product },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.addToCart(product);
      }
    });
  }

  addToCart(product: any): void {
    product.isInCart = true;
    this.cartService.addToCart(product);
  }
}
