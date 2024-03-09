import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../service/connector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sahredcomp',
  templateUrl: './sahredcomp.component.html',
  styleUrls: ['./sahredcomp.component.css']
})
export class SahredcompComponent implements OnInit{

  values:any;

  constructor(private service : ConnectorService, private route : Router){}

   ngOnInit() {
    this.service.getAuthStatus().subscribe((res:any) =>{ this.values=res; 
      console.log(this.values);
    });
  }

  logout(){
    this.service.getout().subscribe((res:any) => {
      if(!res.status){
        this.route.navigateByUrl('/login');
      }else{
        alert("logout failed");
      }
    });

  }
}
