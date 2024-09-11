import { expect } from "chai";

describe("Random test", function () {
  it("check if equal testing works.", function () {
    let test = 3
    expect(test).to.equal(3);
  });

  it("check if not equal testing works.", function () {
    let test = 2;
    expect(test).to.not.equal(3);
  });
});
