'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { fetchBills } from './actions';

let db = new PouchDB('http://131.230.166.104:5984/users');
// let db = new PouchDB('app');

db.changes({
  live: true,
  include_doc: true, // eslint-disable-line camelcase
  since: 'now'
}).on('change', changeCallback)
  .on('error', console.log.bind(console));

function changeCallback() {
  store.dispatch(fetchBills());


  // if (change.deleted) {
  //   store.dispatch(deletePerson(change.id))
  // } else {
  //   store.dispatch(upsertPerson(change.doc));
  // }
}

export default db;
