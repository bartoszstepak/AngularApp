import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserId = 1;
  private loginUrl = 'asdasd';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      })
  };

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    return localStorage.getItem('jwt')
  }

  setToken(token) {
    localStorage.setItem('jwt', token);
  }

  login(email:string, password:string): Observable<any> {
    let credentials = {email, password};
    return this.http.post(this.loginUrl, credentials, this.httpOptions);
  }

  deleteToken() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getToken() != null;
  }

  public getUserId(): number{
    if(this.currentUserId) {
      return this.currentUserId
    }
    return -1;
  }
}
