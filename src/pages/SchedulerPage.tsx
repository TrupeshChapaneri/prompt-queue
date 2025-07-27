import React from "react";

import Timeline from "@components/Timeline";
import Timer from "@components/Timer";
import SchedulePostCard from "@components/SchedulePostCard";
import { usePostRevealer } from "@hooks/usePostRevealer";

const SchedulerPage: React.FC = () => {
  usePostRevealer();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Timer />

      <div className="relative z-10 flex min-h-screen flex-col md:flex-row">
        <SchedulePostCard />
        <Timeline />
      </div>
    </div>
  );
};

export default SchedulerPage;
