import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { revealPosts } from "@redux/slices/postsSlice";
import { AppDispatch, RootState } from "@redux/store";

export const usePostRevealer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postsLength = useSelector(
    (state: RootState) => state.posts.posts.length,
  );

  useEffect(() => {
    if (postsLength === 0) return;

    const interval = setInterval(() => {
      dispatch(revealPosts(Date.now()));
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, postsLength]);
};
