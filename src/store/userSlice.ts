import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiRegistration } from './apiRegistration';
import { stateUser } from './interface';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    token: '',
  } as stateUser,
  reducers: {},
  extraReducers: {
    [apiRegistration.fulfilled.type]: (
      state,
      action: PayloadAction<stateUser>
    ) => {
      console.log(action.payload);
    },
    [apiRegistration.pending.type]: (state, action) => {},
    [apiRegistration.rejected.type]: (state, action) => {},
  },
});

export default userSlice.reducer;
