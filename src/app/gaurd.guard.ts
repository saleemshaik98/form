import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { ConnectorService } from './service/connector.service';

@Injectable({
  providedIn: 'root'
})
export class GaurdGuard implements CanActivate {

  constructor(private authService : ConnectorService, private router :Router){}
  canActivate( 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean  { 
      return this.authService.getAuthStatus().subscribe((res: any) => {
        if (!res.status) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      });
    }
  
}
