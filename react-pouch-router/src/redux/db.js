'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { fetchBills } from './actions';
import { fetchPersonalInfo } from './actions';

let db = new PouchDB('http://localhost:5984/users');
let billsDB = new PouchDB('http://localhost:5984/bills');
let votesDB = new PouchDB('http://localhost:5984/votes');

billsDB.changes({
  live: true,
  include_doc: true, // eslint-disable-line camelcase
  since: 'now'
}).on('change', changeCallback)
  .on('error', console.log.bind(console));

db.changes({
  live: true,
  include_doc: true, // eslint-disable-line camelcase
  since: 'now'
}).on('change', changeCallback)
  .on('error', console.log.bind(console));

votesDB.changes({
  live: true,
  include_doc: true, // eslint-disable-line camelcase
  since: 'now'
}).on('change', changeCallback)
  .on('error', console.log.bind(console));

function changeCallback() {
  store.dispatch(fetchBills());
  store.dispatch(fetchPersonalInfo());

  // TODO: add/remove specific docs instead of fetching allDocs

  // if (change.deleted) {
  //   store.dispatch(deletePerson(change.id))
  // } else {
  //   store.dispatch(upsertPerson(change.doc));
  // }
}

export default db;
export { billsDB };
export { votesDB };
