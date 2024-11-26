import { AfterViewInit, Component, ContentChild, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {

  @Input({ required: true })
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild('courseImage')
  image;

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  ngAfterViewInit(): void {
    console.log(this.image);
  }

}
