import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- add this
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../interfaces/project';
import { ICategory } from '../../interfaces/category';
import { MultiSelectComponent } from '../multi-select/multi-select.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MultiSelectComponent], // <-- add CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  categories: ICategory[] = [];
  statuses: ICategory[] = [
    { id: 1, name: "completed" },
    { id: 2, name: "in-progress" },
    { id: 3, name: "not-started" }
  ];

  private _projectService = inject(ProjectService);

  ngOnInit(): void {
    this._projectService.getCategories().subscribe({
      next: cats => {
        this.categories = cats;
      },
      complete: () => this.getProjects()
    });
  }

  getProjects(filters?: number[]) {
  this._projectService.getProjects().subscribe(projects => {
    this.projects = projects.map(p => ({
      ...p,
      imageUrl: `assets/${p.imageUrl.replace(/^.*[\\/]/, '')}`,
      categories: p.categoryIds.map(id =>
        this.categories.find(c => c.id === id)!
      )
    }));
  });
}


  onSelectChange(selection: ICategory[]) {
    this.getProjects(selection.map(s => s.id));
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
