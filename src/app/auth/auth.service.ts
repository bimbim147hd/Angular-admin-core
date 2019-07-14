import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as Cookies from 'js-cookie';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const token = Cookies.get(environment.auth_token);
    return !_.isNil(token);
  }
}
