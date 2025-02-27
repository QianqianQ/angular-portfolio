import { Component } from '@angular/core';

import { Certificate } from '../models';
import { CERTIFICATES } from '../data/certificates';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  certificates: Certificate[] = CERTIFICATES;
}
