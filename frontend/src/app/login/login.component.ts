import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  errorCode = 200;

  constructor() { }

  loginUser(): void {
    console.log('user:');
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.password);
  }

  ngOnInit() {
  }

}
