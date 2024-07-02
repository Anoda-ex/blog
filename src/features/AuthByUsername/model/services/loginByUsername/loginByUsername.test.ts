import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';

describe('login by username', () => {
  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
  });
  // test('login by username fulfiled', async () => {
  //   const userData = { username: '123', id: '1' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
  //   const action = loginByUsername({
  //     username: '123',
  //     password: '123',
  //   });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(localStorage.setItem).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData({ username: '123', id: '1' }));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(result.payload).toBe(userData);
  // });
  // test('login by username rejected', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({
  //     username: '123',
  //     password: '123',
  //   });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(localStorage.setItem).not.toHaveBeenCalled();
  //   expect(result.payload).toBe('Error');
  // });
  test('login by username fulfiled', async () => {
    const userData = { username: '123', id: '1' };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: '123', password: '123' });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({ username: '123', id: '1' }));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toBe(userData);
  });
  test('login by username rejected', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });
    expect(result.meta.requestStatus).toBe('rejected');
    expect(thunk.api.post).toHaveBeenCalled();
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(result.payload).toBe('Error');
  });
});
//
// type User = number;
// const user:User = 12;
// function logEntity<T>(entity:T): void {
//   console.log(entity);
// }
// logEntity(user);
