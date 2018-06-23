import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LatestComponent } from './latest/latest.component';
import { UploadComponent } from './upload/upload.component';
import { MaterialModule } from './/material.module';
import { UserService } from './user.service';
import { RoutingModule } from './/routing.module';
import { StartpageComponent } from './startpage/startpage.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'http://localhost:8080/users',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
  },
  autoProcessQueue: false,
  addRemoveLinks: true,
  acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LatestComponent,
    UploadComponent,
    StartpageComponent,
    UsersComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropzoneModule,
  ],
  providers: [{provide: DROPZONE_CONFIG, useValue: DEFAULT_DROPZONE_CONFIG}, {provide: UserService, useClass: UserService}],
  // providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
