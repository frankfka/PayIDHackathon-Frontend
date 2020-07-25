import axios from 'axios';
import * as endpoints from '../constants/api';

export async function createPage(pageData) {
  const requestInfo = {
    payId: pageData.payId,
    name: pageData.name,
    customMessage: pageData.customMessage,
    requestedAmount: pageData.isRequestedAmountEnabled ? {
      value: pageData.requestedAmountValue,
      currencyCode: pageData.requestedAmountCurrency.code,
    } : null,
  };
  console.log('Creating page');
  console.log(requestInfo);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Stubbed testing data
  return 'TestID3231212';
  // eslint-disable-next-line no-unreachable
  const res = await axios.post(endpoints.CREATE_ENDPOINT, requestInfo);
  return res.data.id;
}

export async function getPage(id) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // Stubbed testing data
  return {
    payId: 'test$testdomain.com',
    name: 'Frank',
    customMessage: 'This is some custom message',
    paymentOptions: [
      {
        currencyCode: 'BTC',
        address: 'BTCAddress',
        value: 20,
      },
      {
        currencyCode: 'XRP',
        address: 'XRPAddress',
        value: 454545,
      },
    ],
  };
  // eslint-disable-next-line no-unreachable
  const requestInfo = {
    id,
  };
  const res = await axios.get(endpoints.GET_ENDPOINT, {
    params: requestInfo,
  });
  return res.data;
}