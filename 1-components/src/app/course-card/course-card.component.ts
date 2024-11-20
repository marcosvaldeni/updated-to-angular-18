import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({ required: true })
  course: Course;
  @Input({ required: true })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewd() {
    console.log('test');

    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
  }
}
