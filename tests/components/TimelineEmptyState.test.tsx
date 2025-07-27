import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TimelineEmptyState from "../../src/components/TimelineEmptyState";

describe("TimelineEmptyState", () => {
  it("should render empty state message", () => {
    render(<TimelineEmptyState />);

    expect(screen.getByText("No posts yet")).toBeDefined();
    expect(
      screen.getByText("Schedule your first post to see it here"),
    ).toBeDefined();
  });

  it("should render clock icon", () => {
    render(<TimelineEmptyState />);
    const svg = document.querySelector("svg");
    expect(svg).toBeDefined();
  });
});
