import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class Results3DashboardService {

  constructor(private httpClient: HttpClient) { }

  public get_csv_file(file_fullpath) : Observable<any> {

    return this.httpClient
      .get(file_fullpath, {responseType: 'text'}).pipe(
        map((value: string) => {
          return this.csv_to_json(value);
        })
      );
      //.subscribe(data => {
      //   console.log(this.csv_to_json(data));
      //   results = data;
      //});
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  private csv_to_json(csv) {

    var lines=csv.split("\n");
  
    var result = [];

    var curr_header=lines[0].replace("\r","");
    var headers=curr_header.split(",");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};

        var curr_line = lines[i].replace("\r","");
        var currentline=curr_line.split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    return result;
    //return JSON.stringify(result); //JSON
  }
}
