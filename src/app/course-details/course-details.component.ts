import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
courseId!: number;
constructor(private route: ActivatedRoute, private router: Router) {}

ngOnInit(): void {
  // let cId = this.route.snapshot.paramMap.get('id');
  // this.courseId = Number(cId);

  this.route.paramMap.subscribe((params: ParamMap) => {
    let id = Number(params.get('id'));
    this.courseId = id;
  })
}

gotoPrevious(){
  let previousId = this.courseId - 1;
  this.router.navigate(['/course', previousId]);
}

gotoNext() {
  let nextId = this.courseId + 1;
  this.router.navigate(['/course', nextId]);
}

goBack(){
  let selectedId = this.courseId ? this.courseId : null;
  this.router.navigate(['/course',{id: selectedId}]);
}
}
