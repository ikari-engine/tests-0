import { assert } from "chai";
import { add } from "../src";

describe("Test suite", () => {
  it("test", () => {
    const a = 1;
    const b = 2;
    const expected = a + b;
    assert.equal(add(a, b), expected);
  });
});
