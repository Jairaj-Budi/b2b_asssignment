import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  handleImageError(event: any): void {
    event.target.src = "/assets/placeholder.png";
  }

  formatPrice(price: string): string {
    return parseFloat(price).toFixed(2);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
