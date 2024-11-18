export enum CurrencyEnum {
  USD = "$",
  EUR = "€",
  CLP = "$",
}

export enum LocaleEnum {
  EN_US = "en-US",
  ES_CL = "es-CL",
}

interface FormatProps {
  value: number;
  locale?: string;
  currency?: CurrencyEnum;
}
export class Currency {
  static format({
    value,
    currency = CurrencyEnum.CLP,
    locale = LocaleEnum.ES_CL,
  }: FormatProps) {
    const formattedValue = new Intl.NumberFormat(locale).format(value);

    return `${currency} ${formattedValue}`;
  }
}
