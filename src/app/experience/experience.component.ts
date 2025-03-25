import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Experience } from '../models';
// import * as data from '../../../public/data/data.json';
// import { EXPERIENCE } from '../data/experience';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
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

export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPortfolioData().subscribe((data) => {
      if (data) {
        this.experiences = data.experience;
      }
    });
  }
}
