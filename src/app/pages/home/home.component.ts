import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { NoDataComponent } from "../../components/no-data/no-data.component";
import { HeroCarouselComponent } from "../../components/hero-carousel/hero-carousel.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, NoDataComponent, RouterModule, HeroCarouselComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

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
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        name: "Product 2",
        description: "Description 2",
        price: 200,
        stock: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "3",
        name: "Product 3",
        description: "Description 3",
        price: 300,
        stock: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "4",
        name: "Product 4",
        description: "Description 4",
        price: 400,
        stock: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    // this.productService
    //   .getProducts()
    //   .subscribe((products) => (this.products = products));
  }
}
