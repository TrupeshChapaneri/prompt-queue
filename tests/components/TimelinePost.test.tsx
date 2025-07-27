import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TimelinePost from "../../src/components/TimelinePost";

describe("TimelinePost", () => {
  const mockPost = {
    id: "1",
    text: "Test post content",
    scheduledAt: Date.now(),
    visibleAt: Date.now(),
  };

  it("should render post text", () => {
    render(<TimelinePost post={mockPost} index={0} />);

    expect(screen.getByText("Test post content")).toBeDefined();
  });

  it("should render posted at text", () => {
    render(<TimelinePost post={mockPost} index={0} />);

    expect(screen.getByText("Posted at:")).toBeDefined();
  });

  it("should render SVG icons", () => {
    render(<TimelinePost post={mockPost} index={0} />);

    // Check for SVG elements
    const svgs = document.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(0);
  });
});
