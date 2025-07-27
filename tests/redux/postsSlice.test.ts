import { describe, it, expect } from "vitest";
import postsReducer, {
  addPost,
  revealPosts,
} from "../../src/redux/slices/postsSlice";

describe("postsSlice", () => {
  it("should handle initial state", () => {
    expect(postsReducer(undefined, { type: "unknown" })).toEqual({
      posts: [],
    });
  });

  it("should handle addPost", () => {
    const initialState = { posts: [] };
    const postData = {
      text: "Test post",
      scheduledAt: Date.now() + 1000,
    };

    const newState = postsReducer(initialState, addPost(postData));
    expect(newState.posts).toHaveLength(1);
    expect(newState.posts[0].text).toBe("Test post");
    expect(newState.posts[0].id).toBeDefined();
  });

  it("should handle revealPosts", () => {
    const now = Date.now();
    const initialState = {
      posts: [
        {
          id: "1",
          text: "Test post",
          scheduledAt: now - 1000,
          visibleAt: undefined,
        },
      ],
    };

    const newState = postsReducer(initialState, revealPosts(now));
    expect(newState.posts[0].visibleAt).toBe(now);
  });
});
