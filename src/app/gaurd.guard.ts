import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ConnectorService } from './services/connector.service';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GaurdGuard implements CanActivate {

  constructor(private authService : ConnectorService, private router :Router){}

  Authenticated: any = 0;

  canActivate( 
    _route: ActivatedRouteSnapshot, 
    _state: RouterStateSnapshot): boolean  { 
      if(!this.Authenticated){
      return this.authService.getAuthStatus().pipe(
        take(1),
        map((res: any) => {
          if (!res.status) {
            this.router.navigate(['/login']);
            return false;
          }
          this.Authenticated = 1;
          return true;
        }));
      }else{
        return true;
      }
    }
  
}
