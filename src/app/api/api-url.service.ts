import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiUrl {
  private api_url = environment.apiUrl;

  getApiUrl(url) {
    if (url.substring(0, 1) === '/') {
      return `${this.api_url}${url}`;
    } else {
      return `${this.api_url}/${url}`;
    }
  }
}
