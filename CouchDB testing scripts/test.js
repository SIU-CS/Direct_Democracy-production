//Rania = admin username
//DirectDemocracy = admin password
//Create your database on localhost and try it yourselves. Create admin account and info via Project Fauxton
//located here http://127.0.0.1:5986/_utils
//After these configurations create a database via Fauxton
//here named "directdemocracy"


var nano = require('nano')('http://Rania:DirectDemocracy@127.0.0.1:5986');

var myDB = nano.db.use('directdemocracy');


//User data
//TODO email verification and storing

var data = { 
    name: 'demoUser', 
    password: '123'
}

myDB.insert(data, 'unique_id', function(err, body){
  if(!err){
    //TODO error handling
  }
});




