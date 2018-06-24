import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { OnlyLoggedInUsersGuard } from '../onlyLoggedInUsersGuard';
import * as globals from '../global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  errorCode = 200;

  constructor(private userservice: UserService,
              private guard: OnlyLoggedInUsersGuard,
              private router: Router) { }

  loginUser(): void {
    this.user.email = '';
    this.userservice.loginUser(this.user).subscribe(res => {
      localStorage.setItem('loggedIn', 'true');
      this.guard.setCanActivateV(true);
      //globals.setLoggedIn(true);
      
      this.guard.canActivate();
      this.router.navigate(['/upload']);

    },
  err => {
    console.log(err);
    console.log('user cant login');
    this.userservice.setLoggedin(false);
  });
  }

  ngOnInit() {
  }

}
