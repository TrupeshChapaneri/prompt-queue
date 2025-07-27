import React from "react";
import PostForm from "@components/PostForm";

const SchedulePostCard: React.FC = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center border-b border-gray-200/50 p-8 md:w-1/2 md:border-r md:border-b-0 md:border-gray-200/50">
        <div className="w-full max-w-lg rounded-3xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-sm">
          <div className="mb-8 text-center">
            <h2 className="mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
              Schedule a Post
            </h2>
            <p className="text-sm text-gray-600">
              Create and schedule your posts for the perfect timing
            </p>
          </div>
          <PostForm />
        </div>
      </div>
    </>
  );
};

export default SchedulePostCard;
