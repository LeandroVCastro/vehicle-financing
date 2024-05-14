import calculatePortions from "@/services/calculatePortions";

describe("calculatePortions function", () => {
  test("calculates portions for 6 times with value 1000 and entry 500", () => {
    const result = calculatePortions(6, 1000, 500);
    expect(result).toBe("0,94");
  });

  test("calculates portions for 12 times with value 4000000 and entry 1000000", () => {
    const result = calculatePortions(12, 4000000, 1000000);
    expect(result).toBe("2889,00");
  });

  test("calculates portions for 48 times with value 4000000 and entry 1000000", () => {
    const result = calculatePortions(48, 4000000, 1000000);
    expect(result).toBe("741,81");
  });
});
