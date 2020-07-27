/**
 Utils for parsing payment options, generating QR codes, etc.
 */

import { getCurrencyFromCode, CURRENCY } from '../../models/Currency';

/**
 Schema for payment page: {
    payId: String,
    name: String?,
    customMessage: String?,
    paymentOptions: [
      {
        currency: Currency,
        paymentInfo: {
          key: val
        }
        value: Float?,
      }
    ],
  };
 */
export function getPaymentPageDataFromResponse(data) {
  // Only get payment options that we currently support
  const filteredPaymentOptions = [];
  if (data.paymentOptions && Array.isArray(data.paymentOptions)) {
    data.paymentOptions.forEach((paymentOption) => {
      const currency = getCurrencyFromCode(paymentOption.currencyCode);
      if (currency) {
        // We support this currency - parsed properly
        filteredPaymentOptions.push({
          value: paymentOption.value,
          currency,
          paymentInfo: paymentOption.paymentInfo,
        });
      }
    });
  }
  return {
    payId: data.payId,
    name: data.name,
    customMessage: data.customMessage,
    paymentOptions: filteredPaymentOptions,
  };
}
export function validatePaymentOption(option) {
  return option.currency && option.paymentInfo;
}

// Create QR code value
export function getQrValue(paymentOption) {
  // TODO
  const { currency } = paymentOption;
  if (Object.is(currency, CURRENCY.BTC)) {
    console.log('btc');
  } else if (Object.is(currency, CURRENCY.ETH)) {
    console.log('eth');
  } else if (Object.is(currency, CURRENCY.XRP)) {
    console.log('xrp');
  }
  return 'value';
}
