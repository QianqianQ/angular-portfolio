import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DataService } from '../services/data.service';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    const data = this.dataService.getPortfolioData();
    this.projects = data.projects;

    // Calculate dimensions for each image to fit in container
    this.projects.forEach(project => {
      if (project.screenshotUrl) {
        const img = new Image();
        img.src = project.screenshotUrl;
        img.onload = () => {
          const containerWidth = 600;  // Max width in the container
          const containerHeight = 300; // Fixed container height
          
          const scale = Math.min(
            containerWidth / img.width,
            containerHeight / img.height
          );
          
          project.imageWidth = Math.round(img.width * scale);
          project.imageHeight = Math.round(img.height * scale);
        };
      }
    });
  }

  // Helper method to get priority loading for first two images
  isPriority(index: number): boolean {
    return index < 2;
  }
}
