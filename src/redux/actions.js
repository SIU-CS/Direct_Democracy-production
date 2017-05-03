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

export function userLogin(name, pass) {
	db.login(name, pass, function (err, response) {
	if (err) {
	if (err.name === 'unauthorized') {
		console.log("Username or password incorrect.");
	} else {
		console.log("an error we couldn't define. Probably cosmic rays.");
	}
	}else{
	console.log(response);}
	});
}


export function userChangePWD(name, pwd){
	db.changePassword(name, pwd, function(err, response) {
  if (err) {
    if (err.name === 'not_found') {
    // typo, or you don't have the privileges to see this user
	console.log("Typo or non priviledged to do so.");
    } else {
    // some other error
	console.log("error I cant define.");
    }
  } else {
	console.log(response);
    // response is the user update response
    // {
    //   "ok": true,
    //   "id": "org.couchdb.user:spiderman",
    //   "rev": "2-09310a62dcc7eea42bf3d4f67e8ff8c4"
    // }
  }
})
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

export function acquireUserInfo(user){
	db.getUser(user, function (err, response) {
  if (err) {
    if (err.name === 'not_found') {
      console.log("typo?");
    } else {
      console.log("error I cant define atm.");
    }
  } else {
    // response is the user object
	console.log(response._id);
  }
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
db.signup(name, pass, function (err, response) {
  if (err) {
    if (err.name === 'conflict') {
      console.log("conflict");
    } else if (err.name === 'forbidden') {
      console.log("forbidden");
    } else {
      console.log("http error");
    }
  }else{
  console.log(response);}
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


