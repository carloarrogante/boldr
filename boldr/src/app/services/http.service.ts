import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  baseData: any
  baseUrl: any;

 

  getData() {
    this.baseUrl = "https://api.crossref.org/works";
    return this.http.get(this.baseUrl).pipe(
      map((res: any) => res),
      catchError((err) => throwError(() => new Error(err))
    ));
  }


}
