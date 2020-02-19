import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@Injectable()
export class ApiService {
  constructor(public auth: AuthService, public user: UserService) {}
}
