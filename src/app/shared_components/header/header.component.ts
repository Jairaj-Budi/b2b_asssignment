import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="nav-left">
          <a routerLink="/" class="logo">B2B Sales</a>
          <div class="nav-links">
            <a
              routerLink="/"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              >Home</a
            >
            <a routerLink="/products" routerLinkActive="active">Products</a>
            <a routerLink="/about" routerLinkActive="active">About</a>
            <a routerLink="/contact" routerLinkActive="active">Contact</a>
          </div>
        </div>
        <div class="nav-right">
          <div class="search-cart">
            <input type="text" placeholder="Search..." class="search-input" />
            <button class="cart-button">
              <span class="cart-icon">🛒</span>
              <span class="cart-count">0</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  `,
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {}
