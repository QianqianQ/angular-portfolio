import { Component } from '@angular/core';

import { contactInfo } from '../data/contact-info';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = contactInfo;
}
