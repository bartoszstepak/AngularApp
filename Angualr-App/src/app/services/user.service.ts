import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  tmpUser = {}

  getUserId(): number {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
