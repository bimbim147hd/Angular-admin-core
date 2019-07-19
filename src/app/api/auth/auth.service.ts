import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrl } from '../api-url.service';
import { Observable } from 'rxjs';
import { tap, catchError ,  map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  protected url = '/api/v1/auth';

  constructor(
    private http: HttpClient,
    private apiUrl: ApiUrl
  ) {

  }

  login(data): Observable<any> {
    return this.http.post(this.apiUrl.getApiUrl(this.url) + '/login', data)
      .pipe(
        tap(result => {
          // console.log(result);
        }),
        catchError(error => {
          throw error;
        })
      );
  }
}
