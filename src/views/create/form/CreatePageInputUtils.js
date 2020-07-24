import { SUPPORTED_CURRENCIES } from '../../../models/Currency';

// PayID
export function getPayIDInputInitialState() {
  return {
    value: '',
    label: 'PayID',
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
    description: 'A custom message to display on your payment page',
    type: 'text',
  };
}

// Requested Amount
export function getRequestedAmountEnabledInputInitialState() {
  return {
    value: false,
    label: 'Request a Specific Amount (Optional)',
  };
}
export function getRequestedAmountValueInputInitialState() {
  return {
    value: '',
    placeholder: 'Amount',
    type: 'number',
    isValid: null,
    validFeedback: '',
    invalidFeedback: 'Please enter a valid amount',
  };
}
function getNumberFromInput(input) {
  // Returns a safe number or null
  const parsed = parseFloat(input);
  if (Number.isFinite(parsed)) {
    return parsed;
  }
  return null;
}
function validateRequestedAmountValueInput(strAmountValue) {
  const parsedNumber = getNumberFromInput(strAmountValue);
  return (parsedNumber && parsedNumber > 0);
}
export function getRequestedAmountCurrencyInputInitialState() {
  return {
    value: null,
    options: [
      // First option is deselected option
      { value: null, text: 'Currency' },
      // Create options from all supported currencies
      ...SUPPORTED_CURRENCIES.map((currency) => ({
        text: currency.symbol,
        value: currency,
      })),
    ],
    isValid: null,
  };
}
function validateRequestedAmountCurrencyInput(currency) {
  return !!currency;
}

// Overall Form Validation
function validateForm(formState) {
  const mutableFormState = formState; // ESLint complains if we modify the param directly
  let isValid = true;
  // Validate PayID
  if (!validatePayIDInput(mutableFormState.payId.value)) {
    mutableFormState.payId.isValid = false;
    isValid = false;
  } else {
    mutableFormState.payId.isValid = null; // Only show invalid fields
  }
  // Validate requested amount
  if (formState.isRequestedAmountEnabled.value) {
    // Value
    if (!validateRequestedAmountValueInput(mutableFormState.requestedAmountValue.value)) {
      mutableFormState.requestedAmountValue.isValid = false;
      isValid = false;
    } else {
      mutableFormState.requestedAmountValue.isValid = null;
    }
    // Currency
    if (!validateRequestedAmountCurrencyInput(mutableFormState.requestedAmountCurrency.value)) {
      mutableFormState.requestedAmountCurrency.isValid = false;
      isValid = false;
    } else {
      mutableFormState.requestedAmountCurrency.isValid = null;
    }
  }
  return isValid;
}

// Create form data object from state, returns null if state is not yet valid
export function validateAndCreateDataFromState(formState) {
  // Validate form first
  if (!validateForm(formState)) {
    return null;
  }
  const isRequestedAmountEnabled = formState.isRequestedAmountEnabled.value;
  return {
    payId: formState.payId.value,
    name: formState.name.value,
    customMessage: formState.customMessage.value,
    isRequestedAmountEnabled,
    requestedAmountValue: isRequestedAmountEnabled ? formState.requestedAmountValue.value : null,
    requestedAmountCurrency: isRequestedAmountEnabled
      ? formState.requestedAmountCurrency.value : null,
  };
}
