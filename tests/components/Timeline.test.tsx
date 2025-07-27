import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect } from "vitest";
import Timeline from "../../src/components/Timeline";
import postsReducer from "../../src/redux/slices/postsSlice";

const createTestStore = () =>
  configureStore({
    reducer: { posts: postsReducer },
  });

describe("Timeline", () => {
  it("should render timeline title", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Timeline />
      </Provider>,
    );

    expect(screen.getByText("Timeline")).toBeDefined();
  });

  it("should render timeline description", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <Timeline />
      </Provider>,
    );

    expect(screen.getByText("Your scheduled posts appear here")).toBeDefined();
  });
});
