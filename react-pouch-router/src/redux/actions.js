'use strict';

import crypto from 'crypto';
import db from './db';
import { billsDB } from './db';
import { votesDB } from './db';
import { routeActions } from 'react-router-redux';


export const ERROR = 'ERROR';
export const AUTHENTICATION_STATE = {
  AUTHENTICATED: 'AUTHENTICATED',
  UNAUTHENTICATED: 'UNAUTHENTICATED'
};

const { AUTHENTICATED, UNAUTHENTICATED } = AUTHENTICATION_STATE;

export function handleError(err) {
  return { type: ERROR, err };
}

export function logOutUserAction(user) {
  return { type: UNAUTHENTICATED, user };
}

export function logInUserAction(name) {
  return { type: AUTHENTICATED, name: name };
}

export function userLogin(user) {
    // something like this?
    //
    // export function registerUser(name, pass) {
    //     return db.put({
    //         _id: generateId(),
    //         name: name,
    //         pass: pass
    //     }).then(() => {
    //         return {
    //             type: 'REGISTER_USER'
    //         };
    //     }).catch(err => {
    //         throw err;
    //     });
    // }
  return {
    type: 'USER_LOGIN',
    user
  };
}

export function setGreeting(greeting) {
  return {
    type: 'SET_GREETING',
    greeting
  };
}

export function toggleBillModal() {
  return {
    type: 'TOGGLE_BILL_MODAL'
  };
}

//  change to fetch votes for user after login
//  export function fetchBills(user) {
export function fetchBills() {
  return billsDB.allDocs({
    include_docs: true // eslint-disable-line camelcase
  }).then(bill => {
    return {
      type: 'FETCH_BILLS',
      bill: mapDocsFromPouch(bill)
    };
  }).catch(err => {
    throw err;
  });
}

export function submitVote(user, bill, preference) {
  return votesDB.put({
    _id: generateId(),
    userID: user,
    billID: bill,
    vote: preference
  }).then(() => {
    return {
      type: 'SUBMIT_VOTE'
    };
  }).catch(err => {
    throw err;
  });
}

export function selectBill(selectedBill) {
  return {
    type: 'SELECT_BILL',
    selectedBill
  };
}

export function registerUser(name, pass) {
  return db.put({
    _id: generateId(),
    name: name,
    pass: pass
  }).then(() => {
    return {
      type: 'REGISTER_USER'
    };
  }).catch(err => {
    throw err;
  });
}

export function logInUser(name, pass) {
  return dispatch => {
    return db.login(name, pass, function (err, response) {
      if (err) {
        dispatch(handleError(err));
      } else {
        dispatch(logInUserAction(response.name));
        dispatch(routeActions.push('/home'));
      }
    });
  };
}

function mapDocsFromPouch(records) {
  if (!records) {
    return {};
  }
  return records.rows.map(record => record.doc);
}

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}


