import { Component, EventEmitter, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  course: Course;

  courseSelected = new EventEmitter<Course>();

  onCourseViewd() {
    console.log('test');

    this.courseSelected.emit(this.course);
  }
}
