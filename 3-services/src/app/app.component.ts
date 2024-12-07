import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    private http: HttpClient,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    this.courses$ = this.http.get<Course[]>('http://localhost:9000/api/courses', { params });
  }
}
