export const toMoney = (value: number) => `$ ${value.toFixed(2).toString().replace(',', '.')}`;
