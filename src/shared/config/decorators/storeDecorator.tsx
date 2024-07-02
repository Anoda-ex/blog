import React from 'react';
import { RootState, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export const StoreDecorator = (
  state: DeepPartial<RootState>,
  additionalReducers?: DeepPartial<ReducersMapObject<RootState>>,
) => (Story: any) => (
  <StoreProvider initialState={state} additionalReducers={additionalReducers}>
    <Story />
  </StoreProvider>
);
