import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './service/connector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

 

 constructor(private service: ConnectorService, private route:Router){}

  ngOnInit() {

  }
  
    
 
  title = 'angular-forms';
  values:any;
}


