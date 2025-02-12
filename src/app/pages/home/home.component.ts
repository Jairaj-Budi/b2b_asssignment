import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="relative h-[500px] bg-gray-900 text-white">
        <div class="container mx-auto px-6 py-20 h-full flex items-center">
          <div class="max-w-2xl">
            <h1 class="text-5xl font-bold mb-4">Welcome to B2B Sales Platform</h1>
            <p class="text-xl mb-8">Your one-stop solution for B2B sales management</p>
            <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <!-- Cross-Sell Products Section -->
      <section class="py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-bold mb-8">Featured Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            @for (product of products; track product.id) {
              <div class="bg-white rounded-lg shadow-md p-6">
                <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
                <p class="text-gray-600 mb-4">{{ product.description }}</p>
                <p class="text-2xl font-bold text-blue-600">${{ product.price }}</p>
                <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => this.products = products.slice(0, 4)
    );
  }
}