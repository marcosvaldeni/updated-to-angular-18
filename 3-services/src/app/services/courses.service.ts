import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(
    private http: HttpClient
  ) { }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set('page', '1')
      .set('pageSize', '10');

    return this.http.get<Course[]>('http://localhost:9000/api/courses', { params });
  }
}
