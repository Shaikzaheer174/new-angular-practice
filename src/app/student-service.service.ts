import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }

  getStudents() {
    return [{"id": "1", "name": "John", "courses": "angular"},
       {"id": "2", "name": "ben", "courses": "typescript"},
       {"id": "3", "name": "eira", "courses": "javascript"},
       {"id": "4", "name": "falak", "courses": "python"},
      ];
  }
}
