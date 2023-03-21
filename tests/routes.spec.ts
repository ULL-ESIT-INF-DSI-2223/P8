import "mocha";
import { expect } from "chai";
import { add } from "../src/route";

describe("add() function test", () => {
  it("add(1, 2) returns 3", () => {
    expect(add(1, 2)).to.be.eql(3);
  });  
});
