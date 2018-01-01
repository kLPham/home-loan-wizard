//SET THE INITIAL STATE IN REDUCER:
const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: false,
  realEstateAgent: 'false',
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
};

//ACTION TYPES:
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPATE_REAL_ESTATE_AGENT = 'UPATE_REAL_ESTATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWNPAYMENT = 'UPDATE_DOWNPAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE';
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

function reducer(state = initialState, action) {
  console.log('REDUCER: Action ->', action);
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({}, state, { loantype: action.payload });

    case UPDATE_PROPERTY_TYPE:
      return Object.assign({}, state, { propertyType: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });

    case UPDATE_PROP:
      return Object.assign({}, state, { propToBeUsedOn: action.payload });

    case UPDATE_FOUND:
      return Object.assign({}, state, { found: action.payload });

    case UPATE_REAL_ESTATE_AGENT:
      return Object.assign({}, state, { realEstateAgent: action.payload });

    case UPDATE_COST:
      return { ...state, cost: action.payload };

    case UPDATE_DOWNPAYMENT:
      return { ...state, downPayment: action.payload };

    case UPDATE_CREDIT:
      return { ...state, credit: action.payload };

    case UPDATE_HISTORY:
      return { ...state, history: action.payload };

    case UPDATE_ADDRESS_ONE:
      return { ...state, addressOne: action.payload };

    case UPDATE_ADDRESS_TWO:
      return { ...state, addressTwo: action.payload };

    case UPDATE_ADDRESS_THREE:
      return { ...state, addressThree: action.payload };

    case UPDATE_FIRSTNAME:
      return { ...state, firstName: action.payload };

    case UPDATE_LASTNAME:
      return { ...state, lastName: action.payload };

    case UPDATE_EMAIL:
      return { ...state, email: action.payload };

    default:
      return state;
  }
}

//ACTION CREATORS:
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
}

export function updatePropertyType(propertyType) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: propertyType
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateProp(prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  };
}

export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  };
}

export function updateRealEstateAgent(realEstateAgent) {
  return {
    type: UPATE_REAL_ESTATE_AGENT,
    payload: realEstateAgent
  };
}

export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  };
}

export function updateDownPayment(downPayment) {
  return {
    type: UPDATE_DOWNPAYMENT,
    payload: downPayment
  };
}

export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  };
}

export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  };
}

export function updateAddressOne(addressOne) {
  return {
    type: UPDATE_ADDRESS_ONE,
    payload: addressOne
  };
}

export function updateAddressTwo(addressTwo) {
  return {
    type: UPDATE_ADDRESS_TWO,
    payload: addressTwo
  };
}

export function updateAddressThree(addressThree) {
  return {
    type: UPDATE_ADDRESS_THREE,
    payload: addressThree
  };
}

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstName
  };
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LASTNAME,
    payload: lastName
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}
export default reducer;
