'use strict';

import crypto from 'crypto';
import db from './db';
import { billsDB } from './db';

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

export function submitVote() {
  return {
    type: 'SUBMIT_VOTE'
  };
}

export function selectBill(selectedBill) {
  return {
    type: 'SELECT_BILL',
    selectedBill
  };
}
// export function deleteBill() {
//   return db.allDocs({
//     include_docs: true // eslint-disable-line camelcase
//   }).then(records => {
//     return Promise.all(
//       records.rows.map(row => row.doc)
//         .map(doc => db.remove(doc))
//     ).then(() => {
//       return {
//         type: 'SUBMIT_VOTE'
//       };
//     });
//   }).catch(err => {
//     throw err;
//   });
// }

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

function mapDocsFromPouch(records) {
  if (!records) {
    return {};
  }
  return records.rows.map(record => record.doc);
}

function generateId() {
  return crypto.randomBytes(16).toString('hex');
}


