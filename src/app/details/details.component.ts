import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../service/connector.service';
import { personal } from '../personal';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

   data : any=[];
   

  constructor(private service:ConnectorService){}



  ngOnInit() {
    this.getdata();
  }
  

  getdata() : void{
    
    this.service.getDetails().subscribe(res => this.data = res );
    
  
    
  }

}
