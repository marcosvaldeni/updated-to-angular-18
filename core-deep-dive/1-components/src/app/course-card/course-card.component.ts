import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({ required: true })
  course: Course;
  @Input()
  noImageTpl: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images;

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.images);
    
  }
}
