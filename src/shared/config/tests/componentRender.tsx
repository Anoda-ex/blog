import React, { FC, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

interface options {
  initalRoute?: string
}
const componentRender = (component: ReactNode, options: options = {}) => render(
  <MemoryRouter initialEntries={[options.initalRoute || '/']}>
    {component}
  </MemoryRouter>,
);

export default componentRender;
