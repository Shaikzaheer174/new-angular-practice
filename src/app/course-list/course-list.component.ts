import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit  {
  constructor(private _router : Router){}

  ngOnInit(): void {
    
  }
  courseList = [
    {"id": 1, "course": "javascript"},
    {"id": 2, "course": "Java"},
    {"id": 3, "course": "Angular"},
    {"id": 4, "course": "Typescript"},
    {"id": 5, "course": "HTML"},
    {"id": 6, "course": "CSS"},
  ];

  onClick(x: any) {
    this._router.navigate(['/course',x.id]);
  }
}
