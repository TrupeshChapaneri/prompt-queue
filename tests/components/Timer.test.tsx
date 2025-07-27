import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Timer from "../../src/components/Timer";

describe("Timer", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render timer component", () => {
    const mockDate = new Date("2024-01-01T12:00:00Z");
    vi.setSystemTime(mockDate);

    render(<Timer />);

    expect(screen.getByText("Time")).toBeDefined();
  });
});
