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
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(){

  }
 
   constructor(private route : Router){

   }

  onSubmit()
  {
    localStorage.clear();
    if(this.loginForm.controls.name.value == 'admin' && this.loginForm.controls.password.value == 'admin'){
      localStorage.setItem('isLoggedin','true');
      this.route.navigateByUrl('/form');
    }
    else{
      localStorage.setItem('isLoggedin','false');
      alert("failed to login")
    }
  }

}
