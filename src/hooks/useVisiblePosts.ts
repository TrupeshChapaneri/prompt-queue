import { useSelector } from "react-redux";

import type { RootState } from "@redux/store";

export function useVisiblePosts() {
  const postsData = useSelector((state: RootState) => state.posts.posts);
  const posts = postsData
    .filter((post) => post.visibleAt)
    .sort((a, b) => (a.visibleAt ?? 0) - (b.visibleAt ?? 0));

  return { posts };
}
