import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-no-data",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="no-data">
      <p>No data available</p>
    </div>
  `,
  styles: [`
    .no-data {
      text-align: center;
      padding: 2rem;
      color: #666;
    }
  `]
})
export class NoDataComponent {}
