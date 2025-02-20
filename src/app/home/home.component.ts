import { Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';


@Component({
  selector: 'app-home',
  imports: [AboutComponent, SkillsComponent, ExperienceComponent, EducationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
