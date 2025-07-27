import React from "react";
import { useCurrentTime } from "@hooks/useCurrentTime";

const Timer: React.FC = () => {
  const currentTime = useCurrentTime();

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    return `${displayHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <div className="relative z-20 m-2.5 md:absolute md:top-6 md:right-6">
      <div className="rounded-2xl border border-white/30 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-sm">
        <div className="mb-2 text-xs font-medium tracking-wider text-gray-500 uppercase">
          Time
        </div>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-mono text-xl font-bold text-transparent">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default Timer;
