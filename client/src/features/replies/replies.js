import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../lib/ApiClient";
import { fetchComments } from "../comments/comments";

const initialState = [];

export const addReplies = createAsyncThunk("replies/addReplies", async (id) => {
  const data = await apiClient.getReplies(id);
  return data;
});

const replySlice = createSlice({
  name: "replies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      const replies = action.payload.reduce((acc, comment) => {
        const { replies } = comment;
        return acc.concat(replies);
      }, []);
      return replies;
    });
    builder.addCase(addReplies.fulfilled, (state, action) => {
      state.push(...action.payload);
    });
  },
});

export default replySlice.reducer;
