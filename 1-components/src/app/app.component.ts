import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;
  startDate = new Date();

  title = COURSES[0].description;

  onCourseViewed(course) {
    console.log('App component - click envent bubbled...', course);
  }
}
