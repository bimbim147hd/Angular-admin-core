import { fork, all, put, takeEvery } from 'redux-saga/effects';
import * as _ from 'lodash';
import { API_CALL_ERROR } from './action';
import { AppInjector } from '../app-injector';
import { PreloaderService } from '../common/services/preloader/preloader.service';
import { NotificationService } from '../common/services/notification/notification.service';
import auth from '../components/auth/auth.saga';

function* watchApiCallError() {
  yield takeEvery(API_CALL_ERROR, function*(action) {
    AppInjector.get(PreloaderService).hide();
    if ((action as any).error !== undefined) {
      if ((action as any).error.message !== undefined) {
        AppInjector.get(NotificationService).show(
          'warning',
          (action as any).error.message,
          5000,
          true
        );
      }
      if (
        (action as any).error.error !== undefined &&
        (action as any).error.error.message !== undefined
      ) {
        AppInjector.get(NotificationService).show(
          'warning',
          (action as any).error.error.message,
          5000,
          true
        );
      }
    }
  });
}

export default function* sagas() {
  yield all(_.map([watchApiCallError, ...auth], item => fork(item)));
}
