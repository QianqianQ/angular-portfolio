import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificatesComponent } from './certificates/certificates.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    { path: 'skills', component: SkillsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'certificates', component: CertificatesComponent },
    {path: 'contact', component: ContactComponent},
];
