import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('login slice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: '123',
    };
    expect(loginReducer(state, loginActions.setUsername('new username'))).toEqual({ username: 'new username' });
  });
  test('set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123',
    };
    expect(loginReducer(state, loginActions.setPassword('new password'))).toEqual({ password: 'new password' });
  });
});
