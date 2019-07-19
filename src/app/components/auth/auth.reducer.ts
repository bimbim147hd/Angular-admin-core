import { combineReducers } from 'redux';
import { login } from './login/login.reducer';
import { forgotPassword } from './forgot-password/forgot-password.reducer';
import { resetPassword } from './reset-password/reset-password.reducer';

export const Auth = combineReducers({
  login,
  forgotPassword,
  resetPassword
});
