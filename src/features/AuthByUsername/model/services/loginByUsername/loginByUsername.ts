import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User/model/types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorageConsts';
import { userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider/config/types';
import { UserCredentials } from '../../types/loginSchema';

export const loginByUsername = createAsyncThunk<User, UserCredentials, ThunkConfig<string>>(
  'login/loginByUsername',
  async (userCredentials, { rejectWithValue, dispatch, extra }) => {
    try {
      const response = await extra.api.post<User>('/login', userCredentials);
      if (!response.data) {
        throw Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);
