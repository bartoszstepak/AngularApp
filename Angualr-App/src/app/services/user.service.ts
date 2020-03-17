import { Injectable, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { WorkStatus } from '../employee/Model/Employee';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  user = { id: 3, firstName: 'Bartosz', secondName: 'Stępak', email: 'bartoszstepak@gmail.com',  status: WorkStatus.loggedId }

  ulrZKonfiga = 'elo123';

  constructor(
    private auth: AuthenticationService,
    private http: HttpClient
  ) { }

  ngOnInit(): void{
    this.getUser().subscribe();
  }

  public getUserId(): number {
    if (this.user) {
      return this.user.id;
    }
    return -1;
  }

  public getUser(): Observable<any> {
    let userId = this.auth.getUserId();
    let url = `${this.ulrZKonfiga}/${userId}`;
    return this.user
      ? of(this.user)
      : this.http.get(url).pipe(
        tap(data => {
          this.user = data
        })
      );
  }


  public getWorkStatusIcon(status: WorkStatus): String {
    switch (status) {
      case WorkStatus.online:
        return 'dot green status-icon';
      case WorkStatus.loggedId:
        return 'dot status-icon circle-icon';
      case WorkStatus.offline:
        return 'dot gray status-icon';
    }
  }
}
