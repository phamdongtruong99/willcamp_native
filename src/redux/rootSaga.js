import { applyMiddleware, compose, createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import reducers from './reducers';
import { sayHello, watchIncrement } from './sagas/counterSagas';
import { wathFetchMovies } from './sagas/movieSagas';

export const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;

// if (_DEV_) {
// eslint-disable-line
composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
// }

export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

function* rootSaga() {
  yield all([sayHello, watchIncrement(), wathFetchMovies()]);
}

sagaMiddleware.run(rootSaga);
