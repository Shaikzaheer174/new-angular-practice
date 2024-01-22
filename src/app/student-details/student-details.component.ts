import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  students = [
   {"id": "1", "name": "John", "courses": "angular"},
   {"id": "2", "name": "ben", "courses": "typescript"},
   {"id": "3", "name": "eira", "courses": "javascript"},
   {"id": "4", "name": "falak", "courses": "python"},
  ];
}
