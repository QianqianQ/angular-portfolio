import { Component } from '@angular/core';

import { ContactInfo } from '../models'
import { FULL_NAME, ABOUT_ME } from '../data/about';
import { CONTACT_INFO } from '../data/contactInfo';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  fullName: string = FULL_NAME;
  aboutMeText: string = ABOUT_ME;
  contactInfo: ContactInfo[] = CONTACT_INFO;
}
