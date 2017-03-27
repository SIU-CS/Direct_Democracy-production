'use strict';

import crypto from 'crypto';
import db from './db';

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
  return db.allDocs({
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

// This can be converted to login
export function upsertPerson(name) {
  return db.put({
    _id: generateId(),
    name: name
  }).then(() => {
    return {
      type: 'UPSERT_PERSON'
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
