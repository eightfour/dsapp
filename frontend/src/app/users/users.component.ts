import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService],
})
export class UsersComponent implements OnInit {

  users: Array<any>;

  constructor(private userService: UserService, private uploadService: UploadService) { }

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      data => {
         this.users = data;
        },
        error => console.log(error)
      );

      this.uploadService.getFileLinks().subscribe(
        data => {

        },
        error => console.log(error)
      );
  }

}
