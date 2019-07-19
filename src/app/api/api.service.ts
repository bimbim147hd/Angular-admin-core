import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ApiService {
  constructor(public auth: AuthService) {}
}
