import { Component } from '@angular/core';

import { AboutComponent } from '../../portfolio/about/about.component';
import { SkillsComponent } from '../../portfolio/skills/skills.component';
import { ExperienceComponent } from '../../portfolio/experience/experience.component';
import { EducationComponent } from '../../portfolio/education/education.component';
import { CertificatesComponent } from '../../portfolio/certificates/certificates.component';
import { ProjectsComponent } from '../../portfolio/projects/projects.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
