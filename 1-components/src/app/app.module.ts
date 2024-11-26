import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
import { CommonModule } from '@angular/common';
import { CourseImageComponent } from "./course-image/course-image.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CourseCardComponent,
    BrowserModule,
    BrowserAnimationsModule,
    CourseImageComponent
],
  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
