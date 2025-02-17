import {Component, inject, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, noop, Observable, of, throwError, timer} from 'rxjs';
import {catchError, delay, delayWhen, finalize, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Store} from '../common/store.service';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {

    public http = inject(HttpClient);
    private apiUrl = 'http://localhost:9000/api/courses';



    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;


    constructor(private store:Store) {

    }

    ngOnInit() {

        const courses$ = this.store.courses$;

        this.beginnerCourses$ = this.store.selectBeginnerCourses();

        this.advancedCourses$ = this.store.selectAdvancedCourses();

    }

}
