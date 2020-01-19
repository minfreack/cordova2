import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Atributos
  isLoggedIn = false;
  redirectUrl : string;
  private username:string='Luis';
  private password:string='1234';
  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    )
  }
  login2(password, username): Observable<boolean>{
    if(this.password==password && this.username==username){
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      )
    }
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
