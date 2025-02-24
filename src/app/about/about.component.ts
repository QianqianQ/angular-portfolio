import { Component } from '@angular/core';
import { FULL_NAME, ABOUT_ME } from '../data/about';
import { contactInfo } from '../data/contact-info';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  fullName = FULL_NAME;
  aboutMeText = ABOUT_ME;
  contactInfo = contactInfo;
}
