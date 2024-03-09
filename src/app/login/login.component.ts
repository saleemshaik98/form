import { ConnectorService } from './../service/connector.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(){

  }
 
   constructor(private route : Router,private service:ConnectorService){

   }

  onSubmit()
  {
    var value: any;
    this.service.authservice(this.loginForm.value).subscribe((res: any) =>  {value=res
      if(value.status){
        this.route.navigateByUrl('/form');
      }else{
        alert("Invalid Username or password");
      }   
    
  });
}
 

}
