import React from "react";

const TimelinePost = React.memo(
  ({ post, index }: { post: any; index: number }) => (
    <li
      className="animate-fade-in group relative rounded-3xl border-l-4 border-purple-400 bg-white/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <span className="absolute top-6 -left-10 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-lg md:flex">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
      </span>

      <div className="mb-3 text-lg leading-relaxed font-semibold break-words text-gray-800">
        {post.text}
      </div>

      <div className="mt-2 flex items-center text-xs text-gray-500">
        <svg
          className="mr-2 h-4 w-4 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-medium">Posted at:</span>
        <span className="ml-1 font-mono text-purple-600">
          {post.visibleAt &&
            new Date(post.visibleAt).toLocaleString(undefined, {
              year: "numeric",
              month: "short",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })}
        </span>
      </div>
    </li>
  ),
);

TimelinePost.displayName = "TimelinePost";
export default TimelinePost;
