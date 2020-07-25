// Supported currencies
const BTC = {
  name: 'Bitcoin',
  code: 'BTC',
};
const XRP = {
  name: 'Ripple',
  code: 'XRP',
};

// Currency "Enum"
export const CURRENCY = {
  BTC, XRP,
};
export const SUPPORTED_CURRENCIES = Object.values(CURRENCY);
export function getCurrencyFromCode(code) {
  return CURRENCY[code];
}
