import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { EmployeeserviceService } from './../employeeservice.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeResolved } from 'src/app/models/IEmployee2';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<EmployeeResolved> {

  constructor(private employeeService:EmployeeserviceService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<EmployeeResolved>{
    const id = route.paramMap.get('id');
    if(isNaN(+id) || (+id)<=0){
      const message = `Product id was not a number`;
      console.error(message);
      return of({eemployeelist:null, error:message});
    }

    return this.employeeService.getemployees2()
    .pipe(
      map(eemployee => ({eemployeelist:eemployee})),
      catchError(error => {
        const message = `Retrieval error: $(error)`;
        return of({eemployeelist:null, error:message});
      })
    )}

    

    
  
}
