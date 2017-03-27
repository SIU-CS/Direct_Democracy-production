'use strict';

let initialState = {
  greeting: 'Greetings!',
  billModalOpen: false
};

export default (state=initialState, action) => {
  switch (action.type) {
  case 'SET_GREETING':
    return {
      ...state,
      greeting: action.greeting
    };
  case 'TOGGLE_BILL_MODAL':
    return {
      ...state,
      billModalOpen: !state.billModalOpen
    };
  case 'FETCH_BILLS':
    return {
      ...state,
      bill: action.bill
    };
  case 'SUBMIT_VOTE':
    return state;
  case 'CHANGE_VOTE':
    return state;
  //  UPSET_PERSON can be changed to login
  case 'UPSERT_PERSON':
    return state;
  default:
    return state;
  }
};
