import { ConnectorService } from './../service/connector.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { personal } from '../personal';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {
  
constructor(private service: ConnectorService, private route: Router){}

  profileForm = new FormGroup(
    {
      firstname : new FormControl('',Validators.required),
      secondname : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      birthday : new FormControl('',Validators.required),
      password : new FormControl('',[Validators.minLength(6),Validators.required]),
      confirmpassword : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      mobile : new FormControl('',Validators.required),
    }, 
  );

  ngOnInit() {
   
  }

  onSubmit()
  {
    const formdata = this.profileForm.value;
    console.log(formdata);
    this.service.adddetails(formdata);
    //this.profileForm.reset();
  }

}
