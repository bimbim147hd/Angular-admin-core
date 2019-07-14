import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import * as _ from 'lodash';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log(_.assign({}, document.location));
      this.router.navigate(['/auth/login'], {
        queryParams: {
          redirect: encodeURIComponent(document.location.pathname),
          search: encodeURIComponent(document.location.search)
        }
      });
      return false;
    }
    return true;
  }
}
