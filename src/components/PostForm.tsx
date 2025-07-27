import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addPost } from "@redux/slices/postsSlice";
import type { AppDispatch } from "@redux/store";

const PostForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");
  const [scheduledAt, setScheduledAt] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const getCurrentTime = () => {
    const now = new Date();
    now.setSeconds(0, 0);
    now.setMinutes(now.getMinutes() + 1);
    return now;
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const now = getCurrentTime();
      date.setHours(now.getHours(), now.getMinutes(), 0, 0);
      setScheduledAt(date);
    } else {
      setScheduledAt(null);
    }
  };

  const handleTimeChange = (date: Date | null) => {
    if (date && selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setHours(date.getHours(), date.getMinutes(), 0, 0);
      setScheduledAt(newDate);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!text.trim()) {
      setError("Text is required.");
      return;
    }
    if (!scheduledAt) {
      setError("Date and time are required.");
      return;
    }
    if (scheduledAt.getTime() <= Date.now()) {
      setError("Scheduled time must be in the future.");
      return;
    }
    dispatch(addPost({ text, scheduledAt: scheduledAt.getTime() }));
    setText("");
    setScheduledAt(null);
    setSelectedDate(null);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  const filterPassedTime = (time: Date) => {
    const now = new Date();
    if (!selectedDate) return false;
    const isToday =
      selectedDate.getDate() === now.getDate() &&
      selectedDate.getMonth() === now.getMonth() &&
      selectedDate.getFullYear() === now.getFullYear();
    if (isToday) {
      return time.getTime() > now.getTime();
    }
    return true;
  };

  const getMinTime = () => {
    const now = new Date();
    const isToday =
      selectedDate?.getDate() === now.getDate() &&
      selectedDate?.getMonth() === now.getMonth() &&
      selectedDate?.getFullYear() === now.getFullYear();

    if (isToday) {
      return getCurrentTime();
    }
    return new Date(0, 0, 0, 0, 0);
  };

  return (
    <form className="flex w-full flex-col gap-6" onSubmit={handleSubmit}>
      <div className="w-full">
        <label className="mb-3 flex items-center text-sm font-semibold text-gray-700">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          Post Content:
        </label>
        <textarea
          className="min-h-[120px] w-full resize-none rounded-xl border-2 border-gray-200 bg-white/80 p-4 text-gray-800 placeholder-gray-500 shadow-sm backdrop-blur-sm transition-all duration-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
          placeholder="What's on your mind? Share your thoughts..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
      </div>

      <div className="flex w-full flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <label className="mb-3 flex items-center text-sm font-semibold text-gray-700">
            <span className="mr-2 h-2 w-2 rounded-full bg-purple-500"></span>
            Select Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
            className="w-full cursor-pointer rounded-xl border-2 border-gray-200 bg-white/80 p-4 text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
            placeholderText="Select date"
            required
          />
        </div>

        <div className="w-full md:w-1/2">
          <label className="mb-3 flex items-center text-sm font-semibold text-gray-700">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            Select Time
          </label>
          <DatePicker
            selected={scheduledAt}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={1}
            timeFormat="hh:mm aa"
            dateFormat="h:mm aa"
            minTime={getMinTime()}
            maxTime={new Date(0, 0, 0, 23, 59)}
            filterTime={filterPassedTime}
            disabled={!selectedDate}
            className={`w-full cursor-pointer rounded-xl border-2 p-4 text-gray-800 shadow-sm transition-all duration-200 ${
              selectedDate
                ? "border-gray-200 bg-white/80 backdrop-blur-sm focus:border-green-400 focus:ring-4 focus:ring-green-100"
                : "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
            }`}
            placeholderText={selectedDate ? "Select time" : "Select date first"}
          />
          {selectedDate && (
            <div className="mt-2 flex items-center text-xs text-gray-500">
              <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              {selectedDate.toDateString() === new Date().toDateString()
                ? "Only future times selectable."
                : "All times available for selected date."}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="flex items-center rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
          <span className="mr-2 h-2 w-2 rounded-full bg-red-500"></span>
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full transform cursor-pointer rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-4 font-bold text-white shadow-lg"
      >
        {submitted ? "✓ Scheduled!" : "Schedule Post"}
      </button>
    </form>
  );
};

export default PostForm;
