import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './userThunk';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: '',
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export const userReducer = userSlice.reducer;
