import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" [class.overlay]="overlay">
      <div class="spinner" [style.width.px]="size" [style.height.px]="size">
        <div class="spinner-border" [class]="'text-' + color" role="status">
          <span class="visually-hidden">{{ message }}</span>
        </div>
      </div>
      <p *ngIf="showMessage" class="loading-message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .loading-container.overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .loading-message {
      margin-top: 1rem;
      font-size: 0.9rem;
      color: var(--text-color);
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() size: number = 40;
  @Input() color: string = 'primary';
  @Input() message: string = 'Loading...';
  @Input() showMessage: boolean = true;
  @Input() overlay: boolean = false;
}