import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  user = new User();
  errorCode = 200;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  registerUser(): void {
    console.log('user:');
    console.log(this.user.name);
    console.log(this.user.email);
    console.log(this.user.password);
    this.userService.registerUser(this.user).subscribe(response => {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/latest']);
    },
      err => {
        console.log(err.status);
        const scode = err.status;
        if (scode === 409) { this.errorCode = 409; }
        if (scode == null) { console.log('something went wrong'); this.errorCode = 409; }
        console.log(this.errorCode);
        alert('This user is already registered. Please change the name.');
      });
  }
}
