import { takeEvery, put } from 'redux-saga/effects';

import { API_CALL_ERROR } from '../../../store/action';
import { AppInjector } from '../../../app-injector';
import { NotificationService } from '../../../common/services/notification/notification.service';
import {
  RESET_PASSWORD_REQUESTED,
  RESET_PASSWORD_SUCCEEDED
} from './reset-password.actions';
import { Router } from '@angular/router';

function* watchResetPasswordRequest() {
  yield takeEvery(RESET_PASSWORD_REQUESTED, function*(action: any) {
    try {
      const notify = AppInjector.get(NotificationService);
      const router = AppInjector.get(Router);
      notify.show('success', 'Your password was reset.', 3000, true);
      yield put({ type: RESET_PASSWORD_SUCCEEDED });
      router.navigate(['/', 'auth', 'login']);
    } catch (e) {
      yield put({ type: API_CALL_ERROR, error: e });
    }
  });
}

export default [watchResetPasswordRequest];
