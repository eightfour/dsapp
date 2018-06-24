import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, ActivatedRoute, CanActivate } from '@angular/router';

import { StartpageComponent } from './startpage/startpage.component';
import { LatestComponent } from './latest/latest.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './user.service';

import { OnlyLoggedInUsersGuard } from './onlyLoggedInUsersGuard';

const routes: Routes = [
  { path: '', redirectTo: '/startpage', pathMatch: 'full' },
  { path: 'startpage', component: StartpageComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'upload',
    component: UploadComponent,
    canActivate: [OnlyLoggedInUsersGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users',
  component: UsersComponent,
  canActivate: [OnlyLoggedInUsersGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    UserService,
    OnlyLoggedInUsersGuard
  ]
})
export class RoutingModule { }
