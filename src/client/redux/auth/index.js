

import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (newUserDetails, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/auth/register',
        newUserDetails
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong: ', err);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginDetails, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'http://localhost:3000/api/auth/login',
        loginDetails
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong: ', err);
    }
  }
);

// export const logoutUser = createAsyncThunk(
//   'auth/logoutUser',
//   async (userId, thunkAPI) => {
//     try {
//       const { data } = await axios.p(
//         `http://localhost:3000/api/auth/logout`,
//         {userId}
//       );
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue('Something went wrong: ', err);
//     }
//   }
// );

const initialState = {
  isPending: false,
  user: null,
  err: '',
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: () => (state, action) => {
      state.blog = {
        isPending: false,
        user: null,
        err: '',
      };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.isPending = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isPending = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.err = action.payload;
      state.isPending = false;
    },
    [loginUser.pending]: (state, action) => {
      state.isPending = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isPending = false;
    },
    [loginUser.rejected]: (state, action) => {
      state.err = action.payload;
      state.isPending = false;
    },
  },
});

export const { logoutUser } = authReducer.actions;
export default authReducer.reducer;
