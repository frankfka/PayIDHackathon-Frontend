import { SUPPORTED_CURRENCIES } from '../../../models/Currency';

// Overall Form Validation

// PayID
export function getPayIDInputInitialState() {
  return {
    value: '',
    label: 'PayID (Required)',
    placeholder: 'name$domain.xyz',
    type: 'text',
    isValid: null,
    validFeedback: '',
    invalidFeedback: 'Please enter a valid PayID',
  };
}
export function validatePayIDInput(value) {
  return value.match(/\S+\$\S+\.\S+/g) != null;
}

// Name
export function getNameInputInitialState() {
  return {
    value: '',
    label: 'Name (Optional)',
    type: 'text',
  };
}

// Custom Message
export function getCustomMessageInputInitialState() {
  return {
    value: '',
    label: 'Custom Message (Optional)',
    description: 'Enter a custom message to display on your payment page',
    type: 'text',
  };
}

// Requested Amount
export function getRequestedAmountEnabledInputInitialState() {
  return {
    value: false,
    label: 'Request a Specific Amount',
  };
}
export function getRequestedAmountValueInputInitialState() {
  return {
    value: 0,
    label: 'Amount',
  };
}
export function getRequestedAmountCurrencyInputInitialState() {
  return {
    value: null,
    label: 'Currency',
    options: [
      // First option is deselected option
      { value: null, text: 'Select a Currency' },
      // Create options from all supported currencies
      ...SUPPORTED_CURRENCIES.map((currency) => ({
        text: currency.symbol,
        value: currency,
      })),
    ],
  };
}
