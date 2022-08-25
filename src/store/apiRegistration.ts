import { createAsyncThunk } from '@reduxjs/toolkit';
import { URL, EndPoint } from '../const/Url';
import { stateUser } from './interface';

export const apiRegistration = createAsyncThunk(
  'user/registration',
  async (user: stateUser, thunkAPI) => {
    console.log(JSON.stringify(user));
    try {
      const response = await fetch(`${URL}${EndPoint.REGISTRATION}`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(user),
      });
      console.log(response);
      if (!response.ok) {
        console.log('Сервер недоступен');
        throw new Error('Сервер недоступен');
      } else {
        console.log(response.json());
        return response.json();
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
