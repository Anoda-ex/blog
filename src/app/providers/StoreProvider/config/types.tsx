import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ProfileSchema } from 'entities/Profile';
// need to can config async reducers
export interface RootState {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}
export type RootStateKey = keyof RootState;
export type ReducersList = {
  [name in RootStateKey]?: Reducer;
}
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<RootState>;
  reduce: (state: RootStateKey, action: AnyAction) => CombinedState<RootStateKey>;
  add: (key: RootStateKey, reducer: Reducer) => void;
  remove: (key: RootStateKey) => void;
}
export interface ReduxStoreWithManager extends EnhancedStore<RootState> {
  reducerManager: ReducerManager;
}
export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: RootState;
}
