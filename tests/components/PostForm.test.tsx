import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect, vi } from "vitest";
import PostForm from "../../src/components/PostForm";
import postsReducer from "../../src/redux/slices/postsSlice";

vi.mock("react-datepicker", () => ({
  default: vi.fn(() => <div data-testid="datepicker">DatePicker</div>),
}));

const createTestStore = () =>
  configureStore({
    reducer: { posts: postsReducer },
  });

describe("PostForm", () => {
  it("should render form elements", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/what's on your mind/i)).toBeDefined();

    expect(screen.getByText("Schedule Post")).toBeDefined();
  });

  it("should render datepicker components", () => {
    const store = createTestStore();

    render(
      <Provider store={store}>
        <PostForm />
      </Provider>,
    );

    const datepickers = screen.getAllByTestId("datepicker");
    expect(datepickers.length).toBeGreaterThan(0);
  });
});
