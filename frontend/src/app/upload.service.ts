import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UploadService {

  private filesURL = 'http://localhost:8080/uploads';

  public fileLinks;

  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.get(this.filesURL).pipe(map(res => this.saveFileLinks(JSON.stringify(res))));
  }

  saveFileLinks(links) {
    this.fileLinks = JSON.parse(links);
      console.log(this.fileLinks);
      console.log('element: ' + this.fileLinks.files[0]);

  }


}
