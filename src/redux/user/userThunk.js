import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: {
    Authorization: '',
  },
});

export const register = createAsyncThunk(
  'user/register',
  async (body, thunkAPI) => {
    try {
      const response = await userApi.post('/users/signup', body);
      userApi.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (body, thunkAPI) => {
  try {
    const response = await userApi.post('/users/login', body);
    // userApi.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    userApi.post('/users/logout');
    userApi.headers.common.Authorization = '';
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
