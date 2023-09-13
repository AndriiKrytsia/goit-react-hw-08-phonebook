import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './userThunk';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: '',
    isLogged: false,
    isRefresh: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
        console.log(1111);
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = '';
        state.isLogged = false;
      });
  },
});

export const userReducer = userSlice.reducer;
