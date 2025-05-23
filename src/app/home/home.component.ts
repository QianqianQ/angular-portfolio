import { Component } from '@angular/core';

import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { CertificatesComponent } from '../certificates/certificates.component';
import { ProjectsComponent } from '../projects/projects.component';

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
