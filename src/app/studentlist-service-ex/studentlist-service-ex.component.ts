import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-studentlist-service-ex',
  templateUrl: './studentlist-service-ex.component.html',
  styleUrls: ['./studentlist-service-ex.component.css']
})
export class StudentlistServiceExComponent implements OnInit {
  students: any;
  constructor(private studentService: StudentServiceService) {

  }
  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}
