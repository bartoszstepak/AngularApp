import { Injectable } from '@angular/core';
import { User, WorkStatus, WorkStatsIcon } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = { id: 3, firstName: "Bartosz", secondName: "Stępak", email: "bartoszstepak@gmail.com", status: WorkStatus.loggedId }

  constructor() { }

  public getUserId(): number {
    if (this.user) {
      return this.user.id;
    }
    return -1;
  }

  public getUser(): User {
    return this.user;
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
