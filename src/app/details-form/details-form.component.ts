import { ConnectorService } from '../services/connector.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchPassword, passwordMinLength } from '../constants/matchPassword.validator';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {

  pValue: any;
  
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
      phnnum: new FormControl('',[Validators.required]),
    }, {
      validators: [matchPassword]
      
    }
  );

  ngOnInit() {
   
  }

  checkingPassword(){
    if((this.pValue?.length <6) || this.pValue == undefined){
      alert("Password should be greater than or equal to 6");
    }
  }

  onSubmit()
  {
    const formdata = this.profileForm.value;
    this.service.adddetails(formdata);
    this.profileForm.reset();
  }

}
