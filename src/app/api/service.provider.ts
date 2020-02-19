import { ApiUrl } from './api-url.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { AppInjector } from '../app-injector';
import { PreloaderService } from '../common/services/preloader/preloader.service';

export class ServiceProvider {
  public url = '';
  public http;
  public apiUrl;
  public preloader;

  constructor() {
    this.http = AppInjector.get(HttpClient);
    this.apiUrl = AppInjector.get(ApiUrl);
    this.preloader = AppInjector.get(PreloaderService);
  }

  get(params = {}): Observable<any> {
    this.preloader.show();
    const queryParams = new HttpParams({ fromObject: params });
    return this.http
      .get(this.apiUrl.getApiUrl(this.url), { params: queryParams })
      .pipe(
        tap(result => {
          this.preloader.hide();
        }),
        map(result =>
          _.assign(
            {},
            {
              items: (result as any).data,
              pagination: (result as any).meta.pagination
            }
          )
        ),
        catchError(error => {
          this.preloader.hide();
          throw error;
        })
      );
  }

  list(params = {}): Observable<any> {
    AppInjector.get(PreloaderService).show();
    return this.http
      .post(this.apiUrl.getApiUrl(`${this.url}/list`), JSON.stringify(params))
      .pipe(
        tap(result => {
          AppInjector.get(PreloaderService).hide();
        }),
        map(result => (result as any).data),
        catchError(error => {
          AppInjector.get(PreloaderService).hide();
          throw error;
        })
      );
  }

  update(id, data): Observable<any> {
    AppInjector.get(PreloaderService).show();
    return this.http.put(this.apiUrl.getApiUrl(this.url) + '/' + id, data).pipe(
      tap(result => {
        AppInjector.get(PreloaderService).hide();
      }),
      map(result => result as any),
      catchError(error => {
        AppInjector.get(PreloaderService).hide();
        throw error;
      })
    );
  }

  delete(id): Observable<any> {
    AppInjector.get(PreloaderService).show();
    return this.http.delete(this.apiUrl.getApiUrl(this.url) + '/' + id).pipe(
      tap(result => {
        AppInjector.get(PreloaderService).hide();
      }),
      catchError(error => {
        AppInjector.get(PreloaderService).hide();
        throw error;
      })
    );
  }

  create(data): Observable<any> {
    AppInjector.get(PreloaderService).show();
    return this.http.post(this.apiUrl.getApiUrl(this.url), data).pipe(
      tap(result => {
        AppInjector.get(PreloaderService).hide();
      }),
      map(result => (result as any).data),
      catchError(error => {
        AppInjector.get(PreloaderService).hide();
        throw error;
      })
    );
  }

  getItemById(id, param?): Observable<any> {
    param = param || {};
    const query = [];
    // tslint:disable-next-line:forin
    for (const prop in param) {
      query.push(prop + '=' + param[prop]);
    }
    AppInjector.get(PreloaderService).show();
    return this.http
      .get(
        this.apiUrl.getApiUrl(this.url) + '/' + id + '?' + _.join(query, '&')
      )
      .pipe(
        tap(result => {
          AppInjector.get(PreloaderService).hide();
        }),
        map(result => new (result as any).data()),
        catchError(error => {
          AppInjector.get(PreloaderService).hide();
          throw error;
        })
      );
  }
}
