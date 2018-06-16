import { Component, OnInit, ViewChild } from '@angular/core';
import {DropzoneModule, DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})




export class UploadComponent implements OnInit {

  @ViewChild(DropzoneComponent) drpzone: DropzoneComponent;

  constructor() { }

  ngOnInit() {

  }

  public upload() {
    this.drpzone.directiveRef.dropzone().processQueue();
  }

}
