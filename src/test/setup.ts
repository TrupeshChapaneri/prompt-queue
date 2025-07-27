import "@testing-library/jest-dom";
import { vi } from "vitest";

Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: vi.fn(() => "test-uuid-123"),
  },
});

const mockDate = new Date("2024-01-01T12:00:00Z");
vi.spyOn(Date, "now").mockImplementation(() => mockDate.getTime());
