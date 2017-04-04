'use strict';

let initialState = {
  greeting: 'Direct Democracy',
  user: 'none',
  selectedBill: {title: 'none'},
  billModalOpen: false
};

export default (state=initialState, action) => {
  switch (action.type) {
  case 'SET_GREETING':
    return {
      ...state,
      greeting: action.greeting
    };
  case 'SELECT_BILL':
    return {
      ...state,
      selectedBill: action.selectedBill
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
  case 'DOC_SEARCH':
    return {
      ...state,
      docs: action.docs
    };
  case 'DOC_TERM':
    return {
      ...state,
      term: action.term
    };
  case 'FETCH_INFO':
    return {
      ...state,
      info: action.info
    };
  case 'SUBMIT_VOTE':
    return state;
  case 'CHANGE_VOTE':
    return state;
  case 'REGISTER_USER':
    return state;
  default:
    return state;
  }
};
