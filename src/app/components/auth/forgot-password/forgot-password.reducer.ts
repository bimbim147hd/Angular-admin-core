import * as _ from 'lodash';
import { FORGOT_PASSWORD_SUCCEEDED } from './forgot-password.actions';

export const forgotPassword = (state = { forgot: false }, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_SUCCEEDED:
      return _.assign({}, state, { forgot: true });
    default:
      return state;
  }
};
