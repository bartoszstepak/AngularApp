import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserId: number = 1;

  constructor() { }

  public getUserId(): number{
    if(this.currentUserId) {
      return this.currentUserId
    }
    return -1;
  }
}
