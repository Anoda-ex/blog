import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('get login state', () => {
  test('get login state password', () => {
    const state:DeepPartial<RootState> = {
      loginForm: {
        username: '1',
        password: '12',
        isLoading: false,
        error: 'error',
      },
    };
    expect(getLoginState(state as RootState).password).toEqual('12');
  });
  test('get login state', () => {
    const state:DeepPartial<RootState> = {
      loginForm: {
        username: '1',
        password: '12',
        isLoading: false,
        error: 'error',
      },
    };
    expect(getLoginState(state as RootState)).toEqual({
      username: '1',
      password: '12',
      isLoading: false,
      error: 'error',
    });
  });
});
