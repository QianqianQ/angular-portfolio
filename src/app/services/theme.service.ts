import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
      // Check if user has a saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkTheme.next(savedTheme === 'dark');
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.isDarkTheme.next(prefersDark);
      }
   }

  toggleTheme() {
    this.isDarkTheme.next(!this.isDarkTheme.value);
    this.setTheme();
  }

  setTheme() {
    document.body.classList.toggle('dark-theme', this.isDarkTheme.value);
    localStorage.setItem('theme', this.isDarkTheme.value ? 'dark' : 'light');
  }
}
