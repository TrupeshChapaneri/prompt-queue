const TimelineEmptyState: React.FC = () => (
  <div className="py-12 text-center">
    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
      <svg
        className="h-8 w-8 text-gray-400"
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
    </div>
    <div className="text-lg font-medium text-gray-500">No posts yet</div>
    <div className="mt-1 text-sm text-gray-400">
      Schedule your first post to see it here
    </div>
  </div>
);

export default TimelineEmptyState;
