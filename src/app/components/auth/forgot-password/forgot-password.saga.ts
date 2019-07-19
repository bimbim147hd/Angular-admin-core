import { takeEvery, put } from 'redux-saga/effects';
import {
  FORGOT_PASSWORD_REQUESTED,
  FORGOT_PASSWORD_SUCCEEDED
} from './forgot-password.actions';
import { API_CALL_ERROR } from '../../../store/action';
import { AppInjector } from '../../../app-injector';
import { NotificationService } from '../../../common/services/notification/notification.service';

function* watchForgotPasswordRequest() {
  yield takeEvery(FORGOT_PASSWORD_REQUESTED, function*(action: any) {
    try {
      const notify = AppInjector.get(NotificationService);
      notify.show(
        'success',
        'An email reset password was send to your email.',
        3000
      );
      yield put({ type: FORGOT_PASSWORD_SUCCEEDED });
    } catch (e) {
      yield put({ type: API_CALL_ERROR, error: e });
    }
  });
}

export default [watchForgotPasswordRequest];
