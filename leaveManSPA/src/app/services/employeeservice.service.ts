import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, pipe } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IEmployee } from '../models/iemployee';
import { IEmployee2 } from '../models/IEmployee2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private employeeUrl = "http://localhost:5000/api/employee";

  constructor(private http: HttpClient) { }

  getemployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError )
    );
  }
  getemployees2(): Observable<IEmployee2[]> {
    return this.http.get<IEmployee2[]>(this.employeeUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError )
    );
  }

  getemp(id: number): Observable<IEmployee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<IEmployee>(url).pipe(
      tap(data => console.log('Authorised: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getemp2(id: number): Observable<IEmployee2> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<IEmployee2>(url).pipe(
      tap(data => console.log('Authorised: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addEmp(emp: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.employeeUrl, emp, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(data => console.log('We got it: ', + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addEmp2(emp: IEmployee2): Observable<IEmployee2> {
    return this.http.post<IEmployee2>(this.employeeUrl, emp, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(data => console.log('We got it: ', + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateEmp(emp: IEmployee2): Observable<IEmployee2> {
    const url = `${this.employeeUrl}/${emp.id}`;
    return this.http.put<IEmployee2>(url, emp, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      tap(() => console.log('We got it: ', + emp.id)),
      map(()=> emp),
      catchError(this.handleError)
    );
  }
  deleteEmp(id:number):Observable<void>{
        const url = `${this.employeeUrl}/${id}`;

    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}


