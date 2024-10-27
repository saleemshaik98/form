import { Component, Input, OnInit } from '@angular/core';
import { ConnectorService } from '../services/connector.service';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';

@Component({
  selector: 'app-sahredcomp',
  templateUrl: './sahredcomp.component.html',
  styleUrls: ['./sahredcomp.component.css']
})
export class SahredcompComponent implements OnInit{

  values:any;
  message : string | undefined;
  

  constructor(private service : ConnectorService, private route : Router){}

   ngOnInit() {
    this.service.getAuthStatus().pipe(
      take(1),
      map((res :  any) =>{
        this.values =res;
      })
    ).subscribe();
  }

  logout(){
    this.service.getout().subscribe((res:any) => {
      if(!res.status){
        this.route.navigateByUrl('/login');
      }else{
        alert("logout failed");
      }
    });
    this.values.status=false;
  }
}
