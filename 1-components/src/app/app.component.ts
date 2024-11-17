import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];

  ngrxCourse =COURSES[2];

  onCourseViewed(course) {
    console.log('App component - click envent bubbled...', course);
  }
}
