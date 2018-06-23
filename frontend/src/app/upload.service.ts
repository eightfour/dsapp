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

  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.get(this.filesURL).pipe(map(res => console.log(res.toString())));
  }


}
