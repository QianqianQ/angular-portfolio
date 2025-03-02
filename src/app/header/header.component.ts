import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

// import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import * as data from '../../../public/data/data.json';
// import { CONTACT_INFO } from '../../../public/data/contactInfo';
import { ContactInfo } from '../models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent {

  navItems = [
    { label: 'About', route: '/', fragment: 'about' },
    { label: 'Skills', route: '/', fragment: 'skills' },
    { label: 'Experience', route: '/', fragment: 'experience' },
    { label: 'Education', route: '/', fragment: 'education' },
    { label: 'Certificates', route: '/', fragment: 'certificates' },
  ];
  
  sociaMediaInfo: ContactInfo[] = data.contactInfo;

  activeSection: string | null = null;

  constructor(private router: Router) {}

  scrollToSection(fragment: string) {
    // Navigate to the fragment
    this.router.navigate(['/'], { fragment: fragment }).then(() => {
      // Wait for navigation to complete, then scroll to the section
      this.activeSection = fragment;
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
