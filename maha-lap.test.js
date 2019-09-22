const mahalap = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamnai with day", () => {
    const result = mahalap.tamnaiWithDay("จัรทร์");
    expect(result).toEqual(2);
  });
});
