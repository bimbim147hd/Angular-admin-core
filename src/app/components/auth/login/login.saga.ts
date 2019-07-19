import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEEDED,
  FETCH_LOGIN_DETAIL_REQUESTED,
  FETCH_LOGIN_DETAIL_SUCCEEDED
} from './login.action';
import { AppInjector } from '../../../app-injector';
import { ApiService } from '../../../api/api.service';
import { API_CALL_ERROR } from '../../../store/action';
import { environment } from '../../../../environments/environment';
import { NotificationService } from '../../../common/services/notification/notification.service';
import * as Cookies from 'js-cookie';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';

function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUESTED, function*(action: any) {
    try {
      const api = AppInjector.get(ApiService);
      const result = yield api.auth.login(action.data).toPromise();
      yield put({ type: LOGIN_SUCCEEDED, data: result });
    } catch (e) {
      yield put({ type: API_CALL_ERROR, error: e });
    }
  });
}

function* watchLoginSUCCEEDED() {
  yield takeEvery(LOGIN_SUCCEEDED, function*(action: any) {
    Cookies.set(environment.auth_token, action.data.access_token, {
      path: '/'
    });
    AppInjector.get(NotificationService).show('success', 'Login Success', 3000);
    yield put({ type: FETCH_LOGIN_DETAIL_REQUESTED });
  });
}

function* watchFetchProfileRequest() {
  yield takeEvery(FETCH_LOGIN_DETAIL_REQUESTED, function*(action: any) {
    const api = AppInjector.get(ApiService);
    try {
      yield put({
        type: FETCH_LOGIN_DETAIL_SUCCEEDED,
        data: 'example_profile'
      });
    } catch (e) {
      yield put({ type: API_CALL_ERROR, error: e });
    }
  });
}

function* watchFetchLoginDetailSUCCEEDED() {
  yield takeEvery(FETCH_LOGIN_DETAIL_SUCCEEDED, function*(action: any) {
    const router = AppInjector.get(Router);
    const activatedRouter = AppInjector.get(ActivatedRoute);
    if (!_.isUndefined(activatedRouter.snapshot.queryParams.redirect)) {
      const queryParams = parseQuery(
        activatedRouter.snapshot.queryParams.search
      );
      router.navigateByUrl(
        decodeURIComponent(activatedRouter.snapshot.queryParams.redirect) +
          Object.keys(queryParams)[0]
      );
    } else {
      router.navigate(['/']);
    }
  });
}

function parseQuery(queryString) {
  const query = {};
  const pairs = (queryString[0] === '?'
    ? queryString.substr(1)
    : queryString
  ).split('&');
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}

export default [
  watchLoginRequest,
  watchLoginSUCCEEDED,
  watchFetchProfileRequest,
  watchFetchLoginDetailSUCCEEDED
];
