import { Component, OnInit } from '@angular/core';

import { ContactInfo } from '../../../models';
// import * as data from '../../../public/data/data.json';
// import { CONTACT_INFO } from '../data/contactInfo';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getPortfolioDataSafe();
    this.contactInfo = data.contactInfo;
  }
}
