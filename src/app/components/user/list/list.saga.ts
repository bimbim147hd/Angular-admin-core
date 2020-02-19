import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED } from './list.actions';
import { AppInjector } from '../../../app-injector';
import { ApiService } from '../../../api/api.service';
import { API_CALL_ERROR } from '../../../store/action';

function* watchFetchUserRequest() {
  yield takeEvery(FETCH_USERS_REQUESTED, function*(action: any) {
    const api = AppInjector.get(ApiService);
    try {
      const result = yield api.user.get(action.data).toPromise();
      yield put({ type: FETCH_USERS_SUCCEEDED, data: result });
    } catch (e) {
      yield put({ type: API_CALL_ERROR, error: e });
    }
  });
}

export default [watchFetchUserRequest];
