import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";

@Injectable( {
    providedIn: 'root',
  })
  export class adminAccessGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }
    
  }