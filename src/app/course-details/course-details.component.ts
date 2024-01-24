import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
courseId: number | undefined;
constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  let cId = this.route.snapshot.paramMap.get('id');
  this.courseId = Number(cId);
}

}
