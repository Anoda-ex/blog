import React, { ReactNode } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { Provider } from 'react-redux';
import { DeepPartial, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';

interface StoreProviderProps {
  children: ReactNode,
  initialState?: DeepPartial<RootState>;
  additionalReducers?: DeepPartial<ReducersMapObject<RootState>>
}
const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    additionalReducers,
  } = props;

  const store = createReduxStore(initialState as RootState, additionalReducers as ReducersMapObject<RootState>);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
