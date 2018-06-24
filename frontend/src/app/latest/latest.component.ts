import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  public fileLinkArr;

  displayFiles() {
    console.log('hello');
    console.log(this.uploadService.getFileLinksF());
    this.fileLinkArr = this.uploadService.fileLinks;
    console.log(this.fileLinkArr);
    console.log(this.fileLinkArr.files);
    console.log(this.fileLinkArr.files[0]);
    // const x = this.uploadService.fileLinks.files[0];
  }

  ngOnInit() {
    this.uploadService.getFileLinks().subscribe(
      data => {
        this.displayFiles();
      },
      error => console.log(error)
    );

  }

}
