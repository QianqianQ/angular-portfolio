import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { contactInfo } from '../data/contact-info';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'Contact', route: '/contact' }
  ];

  contactInfo = contactInfo;
}
