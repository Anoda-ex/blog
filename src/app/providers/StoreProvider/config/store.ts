import {
  configureStore, DeepPartial, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { RootState } from './types';

export const createReduxStore = (initialState?: RootState, additionalReducers?: ReducersMapObject<RootState>) => {
  const staticReducers: ReducersMapObject<RootState> = {
    counter: counterReducer,
    user: userReducer,
    ...additionalReducers,
  };
  const reducerManager = createReducerManager(staticReducers);
  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
