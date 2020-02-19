import { ApiUrl } from './api-url.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [ApiUrl, ApiService, AuthService, UserService]
})
export class ApiModule {}
