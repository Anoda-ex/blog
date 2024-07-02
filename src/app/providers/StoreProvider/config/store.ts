import {
  CombinedState,
  configureStore, DeepPartial, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { RootState } from './types';

export const createReduxStore = (
  initialState?: RootState,
  additionalReducers?: ReducersMapObject<RootState>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) => {
  const staticReducers: ReducersMapObject<RootState> = {
    counter: counterReducer,
    user: userReducer,
    ...additionalReducers,
  };
  const reducerManager = createReducerManager(staticReducers);
  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<RootState>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });
  // @ts-ignore
  store.reducerManager = reducerManager;
  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
