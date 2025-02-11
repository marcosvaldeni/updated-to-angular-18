import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  URL = 'http://localhost:9000/'

  constructor(
    private http: HttpClient
  ) { }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.http.get<Course[]>(this.URL + 'api/courses', { params });
  }

  saveCourse(course: Course) {
    const headers = new HttpHeaders()
      .set('X-Auth', 'userId');

    return this.http.put(this.URL + `api/courses/${course.id}`, course, { headers });
  }
}
