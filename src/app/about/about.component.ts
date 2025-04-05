import { Component, OnInit } from '@angular/core';

import { ContactInfo } from '../models';
// import * as data from '../../../public/data/data.json';
// import { FULL_NAME, ABOUT_ME } from '../data/about';
// import { CONTACT_INFO } from '../data/contactInfo';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  fullName: string = '';
  aboutMeText: string = '';
  contactInfo: ContactInfo[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getPortfolioData();
    this.fullName = data.about.FULL_NAME;
    this.aboutMeText = data.about.ABOUT_ME;
    this.contactInfo = data.contactInfo;
  }
}
