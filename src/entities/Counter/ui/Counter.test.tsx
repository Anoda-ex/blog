import { screen } from '@testing-library/react';
import componentRender from 'shared/config/tests/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from 'entities/Counter';

describe('Counter', () => {
  test('counter render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 22,
        },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('22');
  });
  test('increment', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 22,
        },
      },
    });
    userEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('23');
  });
  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: {
          value: 22,
        },
      },
    });
    userEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('21');
  });
});
