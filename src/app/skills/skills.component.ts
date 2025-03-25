import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Skill } from '../models';
// import * as data from '../../../public/data/data.json';
// import { SKILLS } from '../data/skills';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('fadeInStagger', [
      transition(':enter', [
        query('.skill-item', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPortfolioData().subscribe((data) => {
      if (data) {
        this.skills = data.skills;
      }
    });
  }
}
