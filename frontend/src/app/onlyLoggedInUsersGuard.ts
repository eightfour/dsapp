import { Injectable } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import * as globals from './global';
@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate {
  constructor (private userService: UserService, private router: Router) {}

  public canActivateV = false;

  public setCanActivateV(b: boolean) {
    this.canActivateV = true;
  }

  canActivate() {
    const x = localStorage.getItem('loggedIn');
    console.log(x);
    console.log('OnylLoggedInUsersGuard');
    if (x === 'true') {
      this.setCanActivateV(true);
      return this.canActivateV;
    } else {
      window.alert('You don\'t have permission to view this page! Please Register or Login.');
       this.router.navigate(['startpage']);
      return this.canActivateV;
    }
  }
}
