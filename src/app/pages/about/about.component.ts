import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-8">About Us</h1>
      <p>About page content coming soon...</p>
    </div>
  `
})
export class AboutComponent {}