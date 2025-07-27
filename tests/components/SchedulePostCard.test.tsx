import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect, vi } from "vitest";
import SchedulePostCard from "../../src/components/SchedulePostCard";
import postsReducer from "../../src/redux/slices/postsSlice";

vi.mock("../../src/components/PostForm", () => ({
  default: () => <div data-testid="post-form">PostForm</div>,
}));

const createTestStore = () =>
  configureStore({
    reducer: { posts: postsReducer },
  });

describe("SchedulePostCard", () => {
  it("should render title", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <SchedulePostCard />
      </Provider>,
    );

    expect(screen.getByText("Schedule a Post")).toBeDefined();
  });

  it("should render description", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <SchedulePostCard />
      </Provider>,
    );

    expect(
      screen.getByText("Create and schedule your posts for the perfect timing"),
    ).toBeDefined();
  });

  it("should render PostForm component", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <SchedulePostCard />
      </Provider>,
    );

    expect(screen.getByTestId("post-form")).toBeDefined();
  });
});
