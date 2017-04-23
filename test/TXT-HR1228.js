//Current HR 1228 TEXT Pending

var request = require('request');
var cheerio = require('cheerio');

request('https://www.congress.gov/bill/115th-congress/house-bill/1228/text', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var parsedResults = [];
    $('table.lbexGeneralStyle100').each(function(i, element){
  // Select the previous element
      var a = $(this).next();
      // Get the rank by parsing the element two levels above the "a" element
    //  var rank = a.parent().parent().text();
var rank = a.text();
  // Parse the link title
      var title = a.text();
      // Parse the href attribute from the "a" element
  //   var url = a.html('h3')
      // Get the subtext children from the next row in the HTML table.
      var subtext = a.parent().parent().next().children('.subtext').children();
      // Extract the relevant data from the children
      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();
      // Our parsed meta data object
      var metadata = {
        rank: parseInt(rank),
        title: title,
  //     url: url,

    //    points: parseInt(points),
    //    username: username,
    //  comments: parseInt(comments)
      };
      // Push meta-data into parsedResults array
      parsedResults.push(metadata);
    });
    // Log our finished parse results in the terminal
    console.log(parsedResults);
  }
});