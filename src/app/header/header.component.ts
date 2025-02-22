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
    { label: 'Skills', route: '/skills' },
    { label: 'Experience', route: '/experience' },
    { label: 'Certificates', route: '/certificates' },
    { label: 'Contact', route: '/contact' }
  ];

  contactInfo = contactInfo;
}
