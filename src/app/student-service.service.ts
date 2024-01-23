import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studentInterface } from './student.type';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private _http: HttpClient) { }
  private _url = '../assets/data/student.json';
  // private _url = '../assets/data/students.json'; //for creating an error.

  // getStudents() {
    // return [{"id": "1", "name": "John", "courses": "angular"},
    //    {"id": "2", "name": "ben", "courses": "typescript"},
    //    {"id": "3", "name": "eira", "courses": "javascript"},
    //    {"id": "4", "name": "falak", "courses": "python"},
    //   ];
  // }

   getStudents(): Observable<studentInterface[]>  {
    return this._http.get<studentInterface[]>(this._url)
    .pipe(catchError(this.handleError));
   }

    handleError(error: HttpErrorResponse) {
      // console.log("error -> ", error.message);
      return throwError( error.message);
    }
}
