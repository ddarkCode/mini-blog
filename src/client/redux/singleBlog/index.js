import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBlog = createAsyncThunk(
  'blog/getBlog',
  async (blogId, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/api/blogs/${blogId}`
      );
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        `Something went wrong: ${JSON.stringify(err)}`
      );
    }
  }
);

const initialState = {
  err: '',
  isPending: false,
  blog: {},
};

const blogReducer = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    logState: (state, action, ...other) => console.log(state),
  },
  extraReducers: {
    [getBlog.pending]: (state, action) => {
      state.isPending = true;
    },
    [getBlog.fulfilled]: (state, action) => {
      state.blog = action.payload;
      state.isPending = false;
    },
    [getBlog.rejected]: (state, action) => {
      state.err = action.payload;
      state.isPending = false;
    },
  },
});

export const { logState } = blogReducer.actions;
export default blogReducer.reducer;
