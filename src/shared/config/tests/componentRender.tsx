import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { RootState, StoreProvider } from 'app/providers/StoreProvider';

interface options {
  initalRoute?: string,
  initialState?: DeepPartial<RootState>
}
const componentRender = (component: ReactNode, options: options = {}) => render(
  <MemoryRouter initialEntries={[options.initalRoute || '/']}>
    <StoreProvider initialState={options.initialState}>
      {component}
    </StoreProvider>
  </MemoryRouter>,
);

export default componentRender;
