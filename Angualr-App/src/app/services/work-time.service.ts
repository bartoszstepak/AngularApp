import { Injectable, OnInit } from '@angular/core';
import { UserWorkTime } from '../model/UserWorkTime';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeService implements OnInit{

  private userTime = new UserWorkTime();
  private isCounting = false;
  private workTimeServerURL = "url zapisać i pobierac z konfiga";

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.userTime.userdId = this.userService.getUserId();
  }

  public setStartTime(date: Date) : boolean{
    if(date){
      this.userTime.startDate = date;
      this.isCounting = true;
      return true;
    }
    return false;
  }

  public setEndTime(date: Date) : boolean{
    if(date){
      this.userTime.endDate = date;
      this.isCounting = false;
      var saveTimeSub = this.saveWorkedTime(this.userTime).subscribe( 
        response =>{
          debugger
          return true;
        },
        error => {
          ErrorHandlerService.logError(error);
        }
      );
    }
    return false;
  }

  public saveWorkedTime(data: UserWorkTime): Observable<any>{
    return this.http.post<any>(this.workTimeServerURL, data , {observe: 'response'}).pipe(
      catchError(ErrorHandlerService.handleError<any>('createTask'))
    );
  }

  public getWorkedTime(): number {
    if (this.isCounting && this.userTime.startDate){
      var currentDate = Date.parse(new Date().toString());
      var startDate = Date.parse(this.userTime.startDate.toString());
      var diffSeconds = (currentDate - startDate)/1000;
      return diffSeconds
    }
    return 0;
  }
}
