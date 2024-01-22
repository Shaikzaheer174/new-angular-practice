import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details-service-ex',
  templateUrl: './student-details-service-ex.component.html',
  styleUrls: ['./student-details-service-ex.component.css']
})
export class StudentDetailsServiceExComponent {
  students: any;
  constructor(private studentService: StudentServiceService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

}