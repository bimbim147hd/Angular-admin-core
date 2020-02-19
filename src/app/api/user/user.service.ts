import { Injectable } from '@angular/core';
import { ServiceProvider } from '../service.provider';
import * as _ from 'lodash';

@Injectable()
export class UserService extends ServiceProvider {
  public url = '/api/v1/admin/users';

}
