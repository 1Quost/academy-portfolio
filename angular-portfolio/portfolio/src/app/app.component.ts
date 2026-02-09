import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import your standalone components
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,          // important!
  imports: [
    CommonModule,             // needed for directives like *ngFor, *ngIf
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent           // <--- add this to fix your error
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
