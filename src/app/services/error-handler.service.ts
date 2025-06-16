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
    return this.generateSecureRandomString();
  }

  /**
   * Generates a cryptographically secure random string (if possible) or falls back to Math.random().
   * @param length - Desired length of the random string (default: 16).
   * @returns A random string.
   */
  private generateSecureRandomString(length: number = 16): string {
    let randomValues: Uint32Array;

    // Try using window.crypto.getRandomValues (secure)
    if (window.crypto && window.crypto.getRandomValues) {
      randomValues = new Uint32Array(1);
      window.crypto.getRandomValues(randomValues);
      return randomValues[0].toString(36).substring(0, length);
    }
    // Fallback to Math.random() (less secure, but works)
    else {
      console.warn('Cryptographically secure random number generator not available. Falling back to Math.random().');
      return Math.random().toString(36).substring(2, 2 + length);
    }
  }
}