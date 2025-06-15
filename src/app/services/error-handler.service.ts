import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface AppError {
  message: string;
  type: 'error' | 'warning' | 'info';
  timestamp: Date;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  private errorsSubject = new BehaviorSubject<AppError[]>([]);
  public errors$ = this.errorsSubject.asObservable();

  handleError(error: any, context?: string): void {
    const appError: AppError = {
      message: this.getErrorMessage(error, context),
      type: 'error',
      timestamp: new Date(),
      id: this.generateId()
    };

    const currentErrors = this.errorsSubject.value;
    this.errorsSubject.next([...currentErrors, appError]);

    // Auto-remove error after 5 seconds
    setTimeout(() => this.removeError(appError.id), 5000);

    // Log to console in development
    if (!environment.production) {
      console.error('Application Error:', error, context);
    }
  }

  showWarning(message: string): void {
    const warning: AppError = {
      message,
      type: 'warning',
      timestamp: new Date(),
      id: this.generateId()
    };

    const currentErrors = this.errorsSubject.value;
    this.errorsSubject.next([...currentErrors, warning]);

    setTimeout(() => this.removeError(warning.id), 3000);
  }

  showInfo(message: string): void {
    const info: AppError = {
      message,
      type: 'info',
      timestamp: new Date(),
      id: this.generateId()
    };

    const currentErrors = this.errorsSubject.value;
    this.errorsSubject.next([...currentErrors, info]);

    setTimeout(() => this.removeError(info.id), 2000);
  }

  removeError(id: string): void {
    const currentErrors = this.errorsSubject.value;
    this.errorsSubject.next(currentErrors.filter(error => error.id !== id));
  }

  clearAllErrors(): void {
    this.errorsSubject.next([]);
  }

  private getErrorMessage(error: any, context?: string): string {
    let message = 'An unexpected error occurred';

    if (error?.message) {
      message = error.message;
    } else if (error?.error?.message) {
      message = error.error.message;
    } else if (typeof error === 'string') {
      message = error;
    }

    return context ? `${context}: ${message}` : message;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}