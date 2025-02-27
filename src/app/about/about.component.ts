import { Component } from '@angular/core';

import { ContactInfo } from '../models';
import * as data from '../data/data.json';
// import { FULL_NAME, ABOUT_ME } from '../data/about';
// import { CONTACT_INFO } from '../data/contactInfo';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  fullName: string = data.about.FULL_NAME;
  aboutMeText: string = data.about.ABOUT_ME;
  contactInfo: ContactInfo[] = data.contactInfo;
}
