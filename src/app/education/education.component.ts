import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Education } from '../models';
// import * as data from '../../../public/data/data.json';
// import { EDUCATION } from '../data/education';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        query('.timeline-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPortfolioData().subscribe((data) => {
      if (data) {
        this.education = data.education;
      }
    });
  }
}
