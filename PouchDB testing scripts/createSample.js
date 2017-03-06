var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-adapter-memory'));
//var db = new PouchDB('http://Rania:DirectDemocracy@localhost:5984/directdemocracy2');

var nano = require('nano')('http://Rania:DirectDemocracy@localhost:5984');
var datb = nano.db.use('directdemocracy2');
var data = { 
    name: 'pikachu', 
    skills: ['thunder bolt', 'iron tail', 'quick attack', 'mega punch'], 
    type: 'electric' 
};
datb.insert(data, 'unique_id', function(err, body){
  if(!err){
    //awesome
  }
});

/*datb.insert({
	_id: 'User',
	title: 'TestUser',
	email: 'something@example.com',
	password: '123',
	username: 'something'
}).then(function(response){
	//TODO handle
}).catch(function(err){
	console.log(err);
});*/

//Use that with your user+pass via project fauxton.
//Works exactly like couchDB so far! :)