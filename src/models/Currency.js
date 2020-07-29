import BTCIcon from '../assets/currency-icons/btc.png';
import XRPIcon from '../assets/currency-icons/xrp.png';
import ETHIcon from '../assets/currency-icons/eth.png';

// Supported currencies
const BTC = {
  name: 'Bitcoin',
  code: 'BTC',
};
const XRP = {
  name: 'Ripple',
  code: 'XRP',
};
const ETH = {
  name: 'Ethereum',
  code: 'ETH',
};
// TODO: Figure this out
// const USD_ACH = {
//   name: 'USD',
//   code: 'ACH',
// };

// Currency "Enum"
export const CURRENCY = {
  BTC, XRP, ETH,
};
const CURRENCY_CODE_TO_ICON = {
  BTC: BTCIcon,
  XRP: XRPIcon,
  ETH: ETHIcon,
};
export function getIconFromCurrencyCode(code) {
  return CURRENCY_CODE_TO_ICON[code];
}
export const SUPPORTED_CURRENCIES = Object.values(CURRENCY);
export function getCurrencyFromCode(code) {
  return CURRENCY[code];
}
