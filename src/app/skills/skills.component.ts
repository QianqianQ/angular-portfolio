import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

import { Skill } from '../models';
import * as data from '../data/data.json';
// import { SKILLS } from '../data/skills';

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
        ])
      ])
    ])
  ]
})
export class SkillsComponent {
  skills: Skill[] = data.skills;
}
