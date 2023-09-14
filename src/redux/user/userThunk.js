import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'user/register',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', body);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (body, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', body);
    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    axios.post('/users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.user.token;

  if (token === null) {
    return thunkAPI.rejectWithValue('error');
  }
  try {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
