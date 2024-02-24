import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { personal } from '../personal';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getDetails(): Observable<personal> {
    const heroes= this.http.get<personal>("http://localhost:8080/details"); 
    return heroes;
  }

  adddetails(detail : any) {
    console.log(detail);
     (this.http.post<any>("http://localhost:8080/add", detail, this.httpOptions)).subscribe()
    ,(err: any) => console.log(err);
  }
}
