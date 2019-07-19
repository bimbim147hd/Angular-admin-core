import { ApiUrl } from './api-url.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    ApiUrl,
    ApiService,
    AuthService
  ]
})
export class ApiModule {}
