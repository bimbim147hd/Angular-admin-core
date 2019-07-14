import { fork, all, put } from 'redux-saga/effects';
import * as _ from 'lodash';

export default function* sagas() {
  yield all(_.map([], item => fork(item)));
}
