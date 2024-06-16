import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User/model/types/user';
import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorageConsts';
import { userActions } from 'entities/User';
import { UserCredentials } from '../../types/loginSchema';

export const loginByUsername = createAsyncThunk<User, UserCredentials, { rejectValue: string }>(
  'login/loginByUsername',
  async (userCredentials, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', userCredentials);
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
