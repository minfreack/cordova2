import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messages: string;
  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  ngOnInit() {
  }

  setMessage() {
    this.messages = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.messages = 'Trying to validate...';
    this.authService.login().subscribe(()=>{
      this.setMessage();
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl):'/admin';
      }
    })
  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }

}
