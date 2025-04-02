import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../services/data.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPortfolioData().subscribe((data) => {
      if (data) {
        this.projects = data.projects;
      }
    });
  }
}
