import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaurdGuard implements CanActivate {
  canActivate(){
    if(localStorage.getItem("isLoggedin") === 'true')
    {
      return true;
    }
    else{
      return false;
    }
  }
  
}
