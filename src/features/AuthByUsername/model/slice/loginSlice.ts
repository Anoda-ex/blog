import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUsername } from '../services/LoginByUsername/loginByUsername';
import { initialState } from './initialState';

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(loginByUsername.pending, (state) => {
      // Add user to the state array
      state.isLoading = true;
    });
    builder.addCase(loginByUsername.fulfilled, (state) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(loginByUsername.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
