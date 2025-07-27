import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect, vi } from "vitest";
import SchedulerPage from "../../src/pages/SchedulerPage";
import postsReducer from "../../src/redux/slices/postsSlice";

vi.mock("../../src/components/Timeline", () => ({
  default: () => <div data-testid="timeline">Timeline</div>,
}));

vi.mock("../../src/components/Timer", () => ({
  default: () => <div data-testid="timer">Timer</div>,
}));

vi.mock("../../src/components/SchedulePostCard", () => ({
  default: () => <div data-testid="schedule-post-card">SchedulePostCard</div>,
}));

const createTestStore = () =>
  configureStore({
    reducer: { posts: postsReducer },
  });

describe("SchedulerPage", () => {
  it("should render all main components", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <SchedulerPage />
      </Provider>,
    );

    expect(screen.getByTestId("timeline")).toBeDefined();
    expect(screen.getByTestId("timer")).toBeDefined();
    expect(screen.getByTestId("schedule-post-card")).toBeDefined();
  });
});
