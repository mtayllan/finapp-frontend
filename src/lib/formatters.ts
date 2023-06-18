export const toMoney = (value: number) => `$ ${value.toFixed(2).toString().replace(',', '.')}`;
export const formatDate = (value: string) => new Date(value).toLocaleDateString('pt-BR');
