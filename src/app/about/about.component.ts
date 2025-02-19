import { Component } from '@angular/core';

import { fullName } from '../data/about';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  fullName = fullName;
}
