import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const userApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const register = createAsyncThunk(
  'user/register',
  async (body, thunkAPI) => {
    try {
      const response = await userApi.post('/users/signup', body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('user/login', async (body, thunkAPI) => {
  try {
    const response = await userApi.post('/users/login', body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
