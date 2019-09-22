const mahalap = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamnai with day จันทร์", () => {
    const result = mahalap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
  test("Test Tamnai with day อังคาร", () => {
    const result = mahalap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });
  test("Test Tamnai with day พุธ", () => {
    const result = mahalap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });
  test("Test Tamnai with day พฤหัสบดี", () => {
    const result = mahalap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });
  test("Test Tamnai with day ศุกร์", () => {
    const result = mahalap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });
  test("Test Tamnai with day สงกรานต์", () => {
    const result = mahalap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });
  test("Test Tamnai with day ฮาโลวีน", () => {
    const result = mahalap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });
  test("Test Tamnai with day คริสมาสต์", () => {
    const result = mahalap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });
  test("Test Tamnai with day 20", () => {
    const result = mahalap.tamnaiWithDay("20");
    expect(result).toEqual(99);
  });
});
