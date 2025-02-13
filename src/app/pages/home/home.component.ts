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
import { ProductCardComponent } from '../../shared_components/product-card/product-card.component';

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    NoDataComponent,
    HeroCarouselComponent,
    ProductCardComponent
  ],
  providers: [CartService],
  templateUrl: "./home.component.html",
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private cartService: CartService
  ) {}

  trackByProduct(index: number, product: Product): string {
    return product.id;
  }

  ngOnInit() {
    console.log("HomeComponent loaded!");
    this.products = [
      {
        id: "1",
        name: "Product 1",
        description: "Description 1",
        price: 100,
        stock: 10,
        imageUrl: 'https://picsum.photos/400/300?random=1',
        isInCart: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        name: "Product 2",
        description: "Description 2",
        price: 200,
        stock: 20,
        imageUrl: 'https://picsum.photos/400/300?random=2',
        isInCart: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        name: "Product 3",
        description: "Description 3",
        price: 300,
        stock: 30,
        imageUrl: 'https://picsum.photos/400/300?random=3',
        isInCart: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "4",
        name: "Product 4",
        description: "Description 4",
        price: 400,
        stock: 40,
        imageUrl: 'https://picsum.photos/400/300?random=4',
        isInCart: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    // this.productService
    //   .getProducts()
    //   .subscribe((products) => (this.products = products));
  }

  openAddToCartModal(product: any): void {
    const dialogRef = this.dialog.open(AddToCartModalComponent, {
      width: '400px',
      data: { product }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.addToCart(product);
      }
    });
  }

  addToCart(product: any): void {
    product.isInCart = true;
    // Call your cart service to add the product
    this.cartService.addToCart(product);
  }
}
