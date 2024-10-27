import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectorService } from '../services/connector.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../services/shared-data.service';
import { personal } from '../personal';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit{


  constructor(private service: ConnectorService, private sharedData: SharedDataService){}

  ngOnInit() {
    this.sharedData.data$.subscribe((data) => {
      this.setData(data);
    });
    
  }

  profileForm = new FormGroup(
    {
      firstname : new FormControl('',Validators.required),
      secondname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      birthday : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.minLength(6),Validators.required]),
      confirmpassword : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      phnnum: new FormControl('',[Validators.required]),
    },
  );

  onUpdate()
  {
    const formdata = this.profileForm.value;
    this.service.adddetails(formdata);
    this.profileForm.reset();
  }

  setData(data: personal){
    this.profileForm.setValue({
      firstname: data.firstname,
      secondname: data.secondname,
      email: data.email,
      birthday: data.birthday,
      password: data.password,
      confirmpassword: data.confirmpassword,
      address: data.address,
      phnnum: data.phnnum,
    });
  }

}
