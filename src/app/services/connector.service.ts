import {  Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { personal } from '../personal';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getDetails(): Observable<personal> {
    const heroes = this.http.get<personal>("http://localhost:8080/details"); 
    return heroes;
  }

  adddetails(detail : any) {
     (this.http.post<any>("http://localhost:8080/add", detail, this.httpOptions)).subscribe()
    ,(err: any) => console.log(err);
  }

  authservice(data: any){
    const values : any = this.http.post<any>("http://localhost:8080/login", data,this.httpOptions);
    return values;
  }

  getAuthStatus(){
    const values : any =this.http.get<any>("http://localhost:8080/auth-check");
    return values;
  }

  getout(){
    return this.http.get<any>("http://localhost:8080/logout");
  }

  delete(name :any) : any{
    return this.http.post<any>("http://localhost:8080/delete", name, this.httpOptions);
  }
}
