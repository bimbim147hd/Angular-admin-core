import * as _ from 'lodash';
import { FETCH_USERS_SUCCEEDED } from './list.actions';

export const list = (state = { fetched: false, items: [] }, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCEEDED:
      return _.assign({}, state, {
        fetched: true,
        items: action.data.items,
        pagination: action.data.pagination
      });

    default:
      return state;
  }
};
