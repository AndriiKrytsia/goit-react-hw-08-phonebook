import { createSlice } from '@reduxjs/toolkit';
import { login, logout, refresh, register } from './userThunk';

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
      .addCase(register.rejected, state => {
        state.isLogged = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;
      })
      .addCase(login.rejected, state => {
        state.isLogged = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = '';
        state.isLogged = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefresh = false;
        state.isLogged = true;
      })
      .addCase(refresh.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refresh.rejected, state => {
        state.isRefresh = false;
      });
  },
});

export const userReducer = userSlice.reducer;
