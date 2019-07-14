import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { environment } from '../../environments/environment';

const RootReducer = (state = { config: environment }, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  RootReducer
});
