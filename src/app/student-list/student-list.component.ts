import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = [
   {"id": "1", "name": "John", "courses": "angular"},
   {"id": "2", "name": "ben", "courses": "typescript"},
   {"id": "3", "name": "eira", "courses": "javascript"},
   {"id": "4", "name": "falak", "courses": "python"},
  ];
}
