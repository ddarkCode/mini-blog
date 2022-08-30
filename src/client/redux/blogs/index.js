import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  blogs: [],
  isPending: false,
  err: '',
};

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async (name, thunkAPI) => {
    try {
      const { data } = await axios.get('http://localhost:3000/api/blogs');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Something went wrong: ', err);
    }
  }
);

const blogsReducer = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    getblogsFromFunc: (state, ownParams) =>
      console.log('getblogsFromFunc: ', state),
  },
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.isPending = true;
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.blogs = action.payload;
    },
    [getBlogs.rejected]: (state, action) => {
      state.err = action.payload;
    },
  },
});

export const { getblogsFromFunc } = blogsReducer.actions;
export default blogsReducer.reducer;
