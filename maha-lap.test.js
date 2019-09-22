const mahalap = require("./maha-lap");
describe("Test Maha-Lap", () => {
  test("Test Tamnai with  จันทร์", () => {
    const result = mahalap.tamnaiWithDay("จันทร์");
    expect(result).toEqual(2);
  });
  test("Test Tamnai with  อังคาร", () => {
    const result = mahalap.tamnaiWithDay("อังคาร");
    expect(result).toEqual(3);
  });
  test("Test Tamnai with  พุธ", () => {
    const result = mahalap.tamnaiWithDay("พุธ");
    expect(result).toEqual(4);
  });
  test("Test Tamnai with  พฤหัสบดี", () => {
    const result = mahalap.tamnaiWithDay("พฤหัสบดี");
    expect(result).toEqual(5);
  });
  test("Test Tamnai with  ศุกร์", () => {
    const result = mahalap.tamnaiWithDay("เสาร์");
    expect(result).toEqual(7);
  });
  test("Test Tamnai with  สงกรานต์", () => {
    const result = mahalap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });
  test("Test Tamnai with  ฮาโลวีน", () => {
    const result = mahalap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });
  test("Test Tamnai with  คริสมาสต์", () => {
    const result = mahalap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });
  test("Test Tamnai with day 20", () => {
    const result = mahalap.tamnaiWithDay("20");
    expect(result).toEqual(99);
  });

  test("Test Tamnai with Story", () => {
    const result = mahalap.tamnaiWithStory("งู");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with time กลางวัน remdom = 0.98 return 0.98", () => {
    global.Math.random = jest.fn(() => 0.98);
    const result = mahalap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.98);
  });

  test("Test Tamnai with time กลางวัน remdom = 0.4 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = mahalap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางคืน remdom = 0.4 return 0.4", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = mahalap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.4);
  });

  test("Test Tamnai with time กลางคืน remdom = 0.64 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.64);
    const result = mahalap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });
});
