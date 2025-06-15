import { Component, OnInit } from '@angular/core';

import { Certificate } from '../../../models';
// import * as data from '../../../public/data/data.json';
// import { CERTIFICATES } from '../data/certificates';
import { DataService } from '../../../services/data.service';


@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent implements OnInit {

  certificates: Certificate[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getPortfolioDataSafe();
    this.certificates = data.certificates;
  }
}
