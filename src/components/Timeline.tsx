import React from "react";
import { useVisiblePosts } from "@hooks/useVisiblePosts";
import TimelinePost from "./TimelinePost";
import TimelineEmptyState from "./TimelineEmptyState";

const Timeline: React.FC = () => {
  const { posts } = useVisiblePosts();

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-y-auto p-8 md:w-1/2">
      <div className="w-full max-w-2xl">
        <div className="relative">
          <div className="mb-8 text-center">
            <h2 className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">
              Timeline
            </h2>
            <p className="text-sm text-gray-600">
              Your scheduled posts appear here
            </p>
          </div>
          <div className="to-32 absolute bottom-0 left-6 z-0 hidden w-1 rounded-full bg-gradient-to-b from-purple-200 to-pink-200 md:block" />
          {posts?.length === 0 ? (
            <TimelineEmptyState />
          ) : (
            <ul className="ml-0 flex flex-col gap-8 md:ml-8">
              {posts?.map((post, index) => (
                <TimelinePost key={post.id} post={post} index={index} />
              ))}
            </ul>
          )}
          <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
