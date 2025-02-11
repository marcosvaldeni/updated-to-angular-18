import { Component, OnInit} from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  courses = COURSES;

  constructor(
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('Course Saved!')
      );
  }
}
