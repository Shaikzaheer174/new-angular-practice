import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit  {
  constructor(private _router : Router, private route: ActivatedRoute){}
  selectedId!: number;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
    let id = Number(params.get('id'));
    this.selectedId = id;
  })

    
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

  clicked(x:any): boolean {
    return x.id === this.selectedId;
  }
}
