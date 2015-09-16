///<reference path="testReference.ts" />

describe("Component", () => {
  it.only("Mocked Component returns the wrong Plottable under coverage", () => {
    let mockRetriever = new Mocks.MockRetriever();
    // this fails
    assert.strictEqual(mockRetriever.getPlottable(), Plottable, "does not return the correct Plottable");
  });
});