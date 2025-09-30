import { describe, it, expect } from "vitest";

describe("routes sample", () => {
  it("checks object property", () => {
    expect({ route: "home" }.route).toBe("home");
  });
});
