import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  ngAfterViewInit() {
    this.cards.changes.subscribe((card) => {
      console.log(card);
    });
    // console.log(this.cards);
  }

  onCourseEdited() {
    this.courses.pop();
  }

  onCourseViewed(course) {
    console.log(this.cards);
  }
}
