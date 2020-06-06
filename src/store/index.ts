import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {InferableComponentEnhancerWithProps} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';
import * as soundManager from './sound-manager';
import * as userWishes from './user-wishes';
import * as app from './app';
import * as timer from './timer';

//---
// Create store with sagas middlewares
//---
export const rootReducer = combineReducers({
  soundManager: soundManager.rootReducer,
  userWishes: userWishes.rootReducer,
  app: app.rootReducer,
  timer: timer.rootReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(rootSaga);

//---
// Store types
//---
export type StoreDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never;
