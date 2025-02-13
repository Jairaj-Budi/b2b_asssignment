import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  template: `
    <div class="contact-container">
      <mat-card class="contact-card">
        <div class="contact-content">
          <div class="contact-info">
            <h1>Contact Us</h1>
            <div class="info-item">
              <mat-icon>location_on</mat-icon>
              <div>
                <h3>Address</h3>
                <p>Anjaiah Nagar<br>Gachibowli<br>Hyderabad, Telangana</p>
              </div>
            </div>
            <div class="info-item">
              <mat-icon>phone</mat-icon>
              <div>
                <h3>Phone</h3>
                <p>+91 9876543210</p>
              </div>
            </div>
            <div class="info-item">
              <mat-icon>email</mat-icon>
              <div>
                <h3>Email</h3>
                <p>contact&#64;b2bsales.com</p>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <h2>Send us a message</h2>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Name *</label>
                <input id="name" type="text" formControlName="name" placeholder="Your name">
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input id="email" type="email" formControlName="email" placeholder="Your email">
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input id="subject" type="text" formControlName="subject" placeholder="Subject">
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" formControlName="message" rows="4" placeholder="Your message"></textarea>
              </div>

              <button type="submit" [disabled]="!contactForm.valid">Send Message</button>
            </form>
          </div>
        </div>
      </mat-card>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-card {
      padding: 2rem;
      border-radius: 12px;
      background: white;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .contact-info {
      h1 {
        color: #2c3e50;
        font-size: 2rem;
        margin-bottom: 2rem;
      }

      .info-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 1.5rem;

        mat-icon {
          color: #3498db;
          margin-right: 1rem;
          margin-top: 0.25rem;
        }

        h3 {
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
        }

        p {
          color: #666;
          margin: 0;
          line-height: 1.5;
        }
      }
    }

    .contact-form {
      h2 {
        color: #2c3e50;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .form-group {
        margin-bottom: 1.5rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #2c3e50;
          font-weight: 500;
        }

        input, textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s;

          &:focus {
            outline: none;
            border-color: #3498db;
          }
        }

        textarea {
          resize: vertical;
          min-height: 100px;
        }
      }

      button {
        background-color: #3498db;
        color: white;
        padding: 0.75rem 2rem;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #2980b9;
        }

        &:disabled {
          background-color: #bdc3c7;
          cursor: not-allowed;
        }
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Add your form submission logic here
    }
  }
}