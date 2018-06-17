import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, ActivatedRoute, CanActivate } from '@angular/router';

import { StartpageComponent } from './startpage/startpage.component';
import { LatestComponent } from './latest/latest.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';



//Manuell User gemacht zur Implemtierungstest, muss noch mit original verbunden werden
class UserService {
  
  isLoggedIn(): boolean {
    return true;
  }
}

//Guard
@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate {
  constructor (private userService: UserService, private router: Router) {};

  canActivate(){
    console.log("OnylLoggedInUsersGuard");
    if (this.userService.isLoggedIn()) {
      return true;      
    }else {
      window.alert("You don't have permission to view this page! Please Register or Login.");
      this.router.navigate(['startpage']);
      return false;
    }
  }
}

const routes: Routes = [
  { path: '', redirectTo: '/startpage', pathMatch: 'full' },
  { path: 'startpage', component: StartpageComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'upload', 
    component: UploadComponent,
    canActivate: [OnlyLoggedInUsersGuard] }, //Guard
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    UserService,
    OnlyLoggedInUsersGuard //Guard
  ]
})
export class RoutingModule { }