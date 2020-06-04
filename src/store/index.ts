import createSagaMiddleware from 'redux-saga';
import {InferableComponentEnhancerWithProps} from 'react-redux';
import {rootSaga} from './sagas';
import * as soundManager from './sound-manager';
import {configureStore, combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  soundManager: soundManager.rootReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
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
