// Supported currencies
const BTC = {
  name: 'Bitcoin',
  symbol: 'BTC',
};
const XRP = {
  name: 'Ripple',
  symbol: 'XRP',
};

// Currency "Enum"
export const CURRENCY = {
  BTC, XRP,
};
export const SUPPORTED_CURRENCIES = Object.values(CURRENCY);
