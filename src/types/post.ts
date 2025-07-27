export interface Post {
  id: string;
  text: string;
  scheduledAt: number;
  visibleAt?: number;
}

export interface PostsState {
  posts: Post[];
}
