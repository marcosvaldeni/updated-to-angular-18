import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  @ViewChild('cardRef1')
  card1: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;


  onCourseViewed(course) {
    console.log(this.card1);
  }
}
