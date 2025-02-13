import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-to-cart-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div class="modal-content">
      <h2 mat-dialog-title>Add to Cart</h2>
      <mat-dialog-content>
        <p>Are you sure you want to add "{{ data.product.name }}" to your cart?</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button (click)="cancel()">Cancel</button>
        <button mat-raised-button color="primary" (click)="confirm()">
          Confirm
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .modal-content {
      padding: 1.5rem;
      min-width: 300px;
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 500;
      color: #333;
    }

    mat-dialog-content {
      margin: 1.5rem 0;
      color: #666;
    }

    mat-dialog-actions {
      margin-bottom: 0;
      padding: 1rem 0 0;
    }

    button {
      min-width: 100px;
    }
  `]
})
export class AddToCartModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { product: any },
    private dialogRef: MatDialogRef<AddToCartModalComponent>
  ) {}

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
} 