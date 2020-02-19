import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { environment } from '../../environments/environment';
import { Auth } from '../components/auth/auth.reducer';
import { User } from '../components/user/user.reducer';

const RootReducer = (state = { config: environment }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  RootReducer,
  Auth,
  User
});
