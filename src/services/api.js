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
  const res = await axios.post(endpoints.CREATE_ENDPOINT, requestInfo);
  return res.data; // The data is just the ID object
}

export async function getPage(id) {
  const requestEndpoint = `${endpoints.GET_ENDPOINT}/${id}`;
  const res = await axios.get(requestEndpoint);
  return res.data;
}
