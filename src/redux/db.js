'use strict';

import store from './store';
import PouchDB from 'pouchdb';
import { fetchBills, fetchVotes } from './actions';

PouchDB.plugin(require('pouchdb-find'));
PouchDB.plugin(require('pouchdb-authentication'));

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
  store.dispatch(fetchVotes());
}

export default db;
export { billsDB };
export { votesDB };
