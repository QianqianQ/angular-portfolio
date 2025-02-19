import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

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
  skills = [

    { name: 'Python', icon: 'python-plain colored' },
    { name: 'TypeScript', icon: 'typescript-plain colored' },
    { name: 'JavaScript', icon: 'javascript-plain colored' },
    { name: 'HTML5', icon: 'html5-plain colored' },
    { name: 'CSS3', icon: 'css3-plain colored' },
    { name: 'Django', icon: 'django-plain colored'},
    { name: 'Angular', icon: 'angularjs-plain colored' },
    { name: 'PostgreSQL', icon: 'postgresql-plain colored' },
    { name: 'Linux', icon: 'linux-plain colored' },
    { name: 'Jenkins', icon: 'jenkins-line' },
    { name: 'Git', icon: 'git-plain colored' },
    { name: 'Docker', icon: 'docker-plain colored' },
  ];
}
