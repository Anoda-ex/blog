import React, { ReactNode } from 'react';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const store = createReduxStore(initialState as RootState, additionalReducers as ReducersMapObject<RootState>, navigate);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
