var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-adapter-memory'));
var db = new PouchDB('http://Rania:DirectDemocracy@localhost:5984/directdemocracy');

db.put({
	_id: 'testDoc',
	title: 'TestUser'
}).then(function(response){
	//TODO handle
}).catch(function(err){
	console.log(err);
});

//Use that with your user+pass via project fauxton.
//Works exactly like couchDB so far! :)