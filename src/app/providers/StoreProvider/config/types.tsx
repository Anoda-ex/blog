import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
// need to can config async reducers
export interface RootState {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
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
