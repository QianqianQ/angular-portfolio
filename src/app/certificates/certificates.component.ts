import { Component } from '@angular/core';

import { CERTIFICATES } from '../data/certificates';

interface Certificate {
  title: string;
  certificateImg: string;
  certificateLink?: string;
}

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  certificates: Certificate[] = CERTIFICATES;
}
