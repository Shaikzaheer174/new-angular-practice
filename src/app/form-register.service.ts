import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormRegisterService {
  _url = 'http://localhost:4201/register';
  constructor(private _http: HttpClient) {}

  enroll(user: UserModel) {
    return this._http
      .post<any>(this._url, user)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return  throwError(error);
  }
}
