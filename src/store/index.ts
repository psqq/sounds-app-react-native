import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as userWishes from './user-wishes';
import * as soundManager from './sound-manager';
import {rootSaga} from './sagas';

export const rootReducer = combineReducers({
  userWishes: userWishes.rootReducer,
  soundManager: soundManager.rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
