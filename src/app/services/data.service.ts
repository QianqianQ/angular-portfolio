import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap, catchError, retry, shareReplay } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ErrorHandlerService } from './error-handler.service';

export interface PortfolioData {
  about: {
    FULL_NAME: string;
    ABOUT_ME: string;
  };
  contactInfo: any[];
  experience: any[];
  education: any[];
  skills: any[];
  certificates: any[];
  projects: any[];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private portfolioData: PortfolioData | null = null;
  private dataSubject = new BehaviorSubject<PortfolioData | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public data$ = this.dataSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  private dataCache$: Observable<PortfolioData> | null = null;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {}

  fetchPortfolioData(): Observable<PortfolioData> {
    // Return cached observable if available
    if (this.dataCache$) {
      return this.dataCache$;
    }

    this.loadingSubject.next(true);

    const url = environment.portfolioUrl;

    this.dataCache$ = this.http.get<PortfolioData>(url).pipe(
      retry(2), // Retry failed requests twice
      tap((data) => {
        this.portfolioData = data;
        this.dataSubject.next(data);
        this.loadingSubject.next(false);
      }),
      catchError((error: HttpErrorResponse) => {
        this.loadingSubject.next(false);
        this.handleDataError(error);
        return this.getFallbackData();
      }),
      shareReplay(1) // Cache the result
    );

    return this.dataCache$;
  }

  getPortfolioData(): PortfolioData | null {
    return this.portfolioData;
  }

  /**
   * Get portfolio data with fallback to empty data structure
   * This method never returns null, making it safe to use without null checks
   */
  getPortfolioDataSafe(): PortfolioData {
    return this.portfolioData || this.getEmptyPortfolioData();
  }

  /**
   * Check if portfolio data is loaded
   */
  isDataLoaded(): boolean {
    return this.portfolioData !== null;
  }

  /**
   * Get empty portfolio data structure
   */
  private getEmptyPortfolioData(): PortfolioData {
    return {
      about: {
        FULL_NAME: '',
        ABOUT_ME: ''
      },
      contactInfo: [],
      experience: [],
      education: [],
      skills: [],
      certificates: [],
      projects: []
    };
  }

  refreshData(): Observable<PortfolioData> {
    this.dataCache$ = null; // Clear cache
    return this.fetchPortfolioData();
  }

  private handleDataError(error: HttpErrorResponse): void {
    let errorMessage = 'Failed to load portfolio data';

    if (error.status === 0) {
      errorMessage = 'Network error - please check your connection';
    } else if (error.status >= 400 && error.status < 500) {
      errorMessage = 'Portfolio data not found';
    } else if (error.status >= 500) {
      errorMessage = 'Server error - please try again later';
    }

    this.errorHandler.handleError(error, errorMessage);
  }

  private getFallbackData(): Observable<PortfolioData> {
    // Return minimal fallback data
    const fallbackData: PortfolioData = {
      about: {
        FULL_NAME: 'Portfolio',
        ABOUT_ME: 'Portfolio data is currently unavailable. Please try again later.'
      },
      contactInfo: [],
      experience: [],
      education: [],
      skills: [],
      certificates: [],
      projects: []
    };

    this.portfolioData = fallbackData;
    this.dataSubject.next(fallbackData);

    return of(fallbackData);
  }
}
