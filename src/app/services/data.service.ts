import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private portfolioData = new BehaviorSubject<any>(null);
  private portfolioIsFetching = false;

  constructor(private http: HttpClient) { }

  getPortfolioData() {
    if (this.portfolioData.value) {
      // Return portfolio data if available
      return of(this.portfolioData.value);
    } else if (!this.portfolioIsFetching) {
      // Fetch portfolio data only if not already in progress
      this.portfolioIsFetching = true;
      // const url = environment.production
      // ? '/api/fetch-portfolio'
      // : '/data/data.json';
      const url = environment.portfolioUrl;
      return this.http.get(url).pipe(
        tap((data) => {
          this.portfolioData.next(data); // Store the response
          this.portfolioIsFetching = false;
        })
      );
    }

    // Return existing observable if fetch is in progress
    return this.portfolioData.asObservable();
  }
}
