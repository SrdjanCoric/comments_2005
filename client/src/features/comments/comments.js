import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/ApiClient";

const initialState = [];

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const data = await apiClient.getComments();
    return data;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (arg) => {
    const { newComment, callback } = arg;
    const data = await apiClient.addComment(newComment);
    if (callback) {
      callback();
    }
    return data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      const commentsWithoutReplies = action.payload.reduce((acc, comment) => {
        const { replies, ...commentWithoutReplies } = comment;
        return acc.concat(commentWithoutReplies);
      }, []);
      return commentsWithoutReplies;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default commentSlice.reducer;
