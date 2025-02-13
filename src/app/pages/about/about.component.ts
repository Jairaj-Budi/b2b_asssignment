import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="about-container">
      <mat-card class="about-card">
        <h1>About B2B Sales Platform</h1>
        
        <section class="about-section">
          <h2>Who We Are</h2>
          <p>We are a leading B2B sales platform connecting businesses with high-quality office equipment and supplies. With over a decade of experience, we've helped thousands of companies optimize their workspace with the right tools and technology.</p>
        </section>

        <section class="about-section">
          <h2>Our Mission</h2>
          <p>To simplify the B2B purchasing process by providing a seamless platform where businesses can find, compare, and procure the best equipment for their needs.</p>
        </section>

        <section class="about-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Extensive selection of business equipment</li>
            <li>Competitive wholesale pricing</li>
            <li>Quality-assured products</li>
            <li>Fast and reliable shipping</li>
            <li>Dedicated business support</li>
          </ul>
        </section>
      </mat-card>
    </div>
  `,
  styles: [`
    .about-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-card {
      padding: 2rem;
      border-radius: 12px;
    }

    h1 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-align: center;
    }

    .about-section {
      margin-bottom: 2rem;

      h2 {
        color: #3498db;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        color: #555;
        line-height: 1.6;
        font-size: 1.1rem;
      }

      ul {
        list-style-type: none;
        padding: 0;

        li {
          color: #555;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          padding-left: 1.5rem;
          position: relative;

          &:before {
            content: "✓";
            color: #2ecc71;
            position: absolute;
            left: 0;
          }
        }
      }
    }
  `]
})
export class AboutComponent {}