import * as _ from 'lodash';
import { LOGIN_SUCCEEDED, FETCH_LOGIN_DETAIL_SUCCEEDED } from './login.action';

export const login = (state = { loggedin: false }, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return _.assign({}, state, { loggedin: true });

    case FETCH_LOGIN_DETAIL_SUCCEEDED:
      return _.assign({}, state, {
        loggedin: true,
        fetched: true,
        profile: action.data
      });
    default:
      return state;
  }
};
