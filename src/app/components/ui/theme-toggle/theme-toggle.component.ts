import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss'
})
export class ThemeToggleComponent {

  isDarkTheme$;
  constructor(private themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
