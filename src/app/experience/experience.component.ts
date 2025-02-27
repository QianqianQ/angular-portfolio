import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { EXPERIENCE } from '../data/experience';
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
        ])
      ])
    ])
  ]
})

export class ExperienceComponent {
  experiences = EXPERIENCE;

  activeExperience: any = null;

  constructor() {
    this.activeExperience = this.experiences[0];
  }

  setActiveExperience(experience: any) {
    this.activeExperience = experience;
  }

  getActiveExperience() {
    return this.activeExperience;
  }
}
