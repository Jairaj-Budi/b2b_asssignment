import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact&#64;b2bsales.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Address: Anjaiah Nagar, Gachibowli, Hyderabad, Telangana</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/products">Products</a></li>
              <li><a routerLink="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 B2B Sales Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {}
