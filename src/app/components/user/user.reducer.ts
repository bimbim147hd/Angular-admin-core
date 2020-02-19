import { combineReducers } from 'redux';
import { list } from './list/list.reducer';

export const User = combineReducers({
  list
});
