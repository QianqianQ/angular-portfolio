import { Component } from '@angular/core';

import { ContactInfo } from '../models';
import * as data from '../data/data.json';
// import { CONTACT_INFO } from '../data/contactInfo';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo: ContactInfo[] = data.contactInfo;
}
