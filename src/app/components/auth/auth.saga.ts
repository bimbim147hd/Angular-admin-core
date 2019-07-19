import * as _ from 'lodash';
import loginSaga from './login/login.saga';
import forgotPasswordSaga from './forgot-password/forgot-password.saga';
import resetPasswordSaga from './reset-password/reset-password.saga';

export default [...loginSaga, ...forgotPasswordSaga, ...resetPasswordSaga];
