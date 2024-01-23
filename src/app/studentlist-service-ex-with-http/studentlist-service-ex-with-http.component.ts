import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-studentlist-service-ex-with-http',
  templateUrl: './studentlist-service-ex-with-http.component.html',
  styleUrls: ['./studentlist-service-ex-with-http.component.css']
})
export class StudentlistServiceExWithHttpComponent implements OnInit {
  students: any;
  constructor(private studentService: StudentServiceService) {

  }
  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      data => this.students = data
    );
  }


}
