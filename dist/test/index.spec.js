"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const src_1 = require("../src");
describe("Test suite", () => {
    it("test", () => {
        const a = 1;
        const b = 2;
        const expected = a + b;
        chai_1.assert.equal((0, src_1.add)(a, b), expected);
    });
});
//# sourceMappingURL=index.spec.js.map