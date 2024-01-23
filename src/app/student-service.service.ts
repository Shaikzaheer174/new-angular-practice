import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentInterface } from './student.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private _http: HttpClient) { }
  private _url = '../assets/data/student.json';

  // getStudents() {
    // return [{"id": "1", "name": "John", "courses": "angular"},
    //    {"id": "2", "name": "ben", "courses": "typescript"},
    //    {"id": "3", "name": "eira", "courses": "javascript"},
    //    {"id": "4", "name": "falak", "courses": "python"},
    //   ];
  // }

   getStudents(): Observable<studentInterface[]>  {
    return this._http.get<studentInterface[]>(this._url);
   }
}
