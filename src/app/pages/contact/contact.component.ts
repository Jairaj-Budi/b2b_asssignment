import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
      <p>Contact page content coming soon...</p>
    </div>
  `
})
export class ContactComponent {}