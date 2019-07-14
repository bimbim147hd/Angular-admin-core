import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducers';
import sagas from './sagas';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: []
})
export class Store {
  public store;
  constructor() {
    const sagaMiddleware = createSagaMiddleware();
    this.store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
    sagaMiddleware.run(sagas);
  }
  getInstance() {
    return this.store;
  }
}
