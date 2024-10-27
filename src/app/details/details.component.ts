import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../services/connector.service';
import { personal } from '../personal';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

   data : any=[];
   update:any;
   

  constructor(private service:ConnectorService, private sharedservice:SharedDataService){}



  ngOnInit() {
    this.getdata();
  }
  

  getdata() : void{
    
    this.service.getDetails().subscribe(res => {
      this.data = res;
     });
  }

  delete(name :any){
    this.service.delete(name).subscribe((res: any) => {
      this.data = res;
    },(error: any) => {
      console.error('Error occurred while deleting:', error);});
  }

  dataTransfer(hero : personal){
    this.sharedservice.updateData(hero);
  }

}
