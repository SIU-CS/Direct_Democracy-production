var request = require('request')

var url = 'http://127.0.0.1:5984/'
var db = 'mydatabase/'
var id = 'document_id'

// Create a database/collection inside CouchDB
request.put(url + db, function(err, resp, body) {
  // Add a document with an ID
  request.put({
    url: url + db + id,
    body: {message:'New Shiny Document', user: 'stefan'},
    json: true,
  }, function(err, resp, body) {
    // Read the document
    request(url + db + id, function(err, res, body) {
      console.log(body.user + ' : ' + body.message)
    })
  })
})
