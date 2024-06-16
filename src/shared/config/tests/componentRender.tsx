import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { RootState, StoreProvider } from 'app/providers/StoreProvider';

interface options {
  initalRoute?: string,
  initialState?: DeepPartial<RootState>
}
const componentRender = (component: ReactNode, options: options = {}) => render(
  <StoreProvider initialState={options.initialState}>
    <MemoryRouter initialEntries={[options.initalRoute || '/']}>
      {component}
    </MemoryRouter>
  </StoreProvider>,
);

export default componentRender;
