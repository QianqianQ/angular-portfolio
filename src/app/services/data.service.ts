import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private portfolioData: any;

  constructor(private http: HttpClient) { }

  fetchPortfolioData() {
      const url = environment.portfolioUrl;
      return this.http.get(url).pipe(
        tap((data) => {
          this.portfolioData = data;
        })
      );
  }

  getPortfolioData() {
    return this.portfolioData;
  }
}
