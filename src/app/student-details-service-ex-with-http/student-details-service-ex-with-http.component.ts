import { Component, OnInit } from '@angular/core';
import { studentInterface } from '../student.type';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details-service-ex-with-http',
  templateUrl: './student-details-service-ex-with-http.component.html',
  styleUrls: ['./student-details-service-ex-with-http.component.css']
})
export class StudentDetailsServiceExWithHttpComponent implements OnInit {
  students: studentInterface[] = [];
  errorMessage: string = '';
  constructor(private studentService: StudentServiceService){}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      data => this.students = data,
      error => this.errorMessage = error
    );
  }


}
