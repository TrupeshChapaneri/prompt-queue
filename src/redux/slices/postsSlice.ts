import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Post, PostsState } from "../../types/post";

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Omit<Post, "id" | "visibleAt">>) => {
      state.posts.push({
        ...action.payload,
        id: crypto.randomUUID(),
        visibleAt: undefined,
      });
    },
    revealPosts: (state, action: PayloadAction<number>) => {
      state.posts.forEach((post) => {
        if (!post.visibleAt && post.scheduledAt <= action.payload) {
          post.visibleAt = action.payload;
        }
      });
    },
  },
});

export const { addPost, revealPosts } = postsSlice.actions;
export default postsSlice.reducer;
