import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/layout/header/header.component';
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qianqian Qin';

  constructor(private themeService: ThemeService) {
    // Initialize theme on app startup
    this.themeService.setTheme();
  }
}
