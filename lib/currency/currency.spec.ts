import { Currency, CurrencyEnum, LocaleEnum } from "./index";

describe("Currency.format", () => {
  it("should format the value with the default currency and locale", () => {
    const result = Currency.format({ value: 1000 });
    expect(result).toBe("$ 1,000");
  });

  it("should format the value with CLP currency and es-CL locale", () => {
    const result = Currency.format({
      value: 1000,
      currency: CurrencyEnum.CLP,
      locale: LocaleEnum.ES_CL,
    });
    expect(result).toBe("$ 1.000");
  });

  it("should format the value with USD currency and en-US locale", () => {
    const result = Currency.format({
      value: 1000,
      currency: CurrencyEnum.USD,
      locale: LocaleEnum.EN_US,
    });
    expect(result).toBe("$ 1,000");
  });

  it("should format the value with EUR currency and es-CL locale", () => {
    const result = Currency.format({
      value: 1000,
      currency: CurrencyEnum.EUR,
      locale: LocaleEnum.ES_CL,
    });
    expect(result).toBe("€ 1.000");
  });

  it("should handle negative values correctly", () => {
    const result = Currency.format({
      value: -1000,
      currency: CurrencyEnum.USD,
      locale: LocaleEnum.EN_US,
    });
    expect(result).toBe("$ -1,000");
  });

  it("should format large numbers correctly", () => {
    const result = Currency.format({
      value: 1000000,
      currency: CurrencyEnum.USD,
      locale: LocaleEnum.EN_US,
    });
    expect(result).toBe("$ 1,000,000");
  });

  it("should format small numbers correctly", () => {
    const result = Currency.format({
      value: 0.99,
      currency: CurrencyEnum.USD,
      locale: LocaleEnum.EN_US,
    });
    expect(result).toBe("$ 0.99");
  });
});
