var request = require('request');
var cheerio = require('cheerio');

request('https://www.whitehouse.gov/briefing-room/pending-legislation', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    var parsedResults = [];
    $('div.views-field.views-field-field-signed-date').each(function(i, element){
      // Select the previous element
      var a = $(this).next();
      // Get the rank by parsing the element two levels above the "a" element
  //    var rank = a.parent().parent().text();
      // Parse the link title
      //var title = a.html();
      // Parse the href attribute from the "a" element

  // var url = $(html).find('href');


  //var url = $(html).a.parent().href();
//  var url = a.attr('href');
//  var url = a.text('a');
var title = a.text();
var space = a.attr('......');
//var url =  a.html();

var url = 'Next';
for(i = 0; i< 6; i++) {
  url = i + a.html();
}
//var url = $('h3').html(); {
//for(i = 0; i< 6; i++);
//}


var a_href = $('div.views-field.views-field-title').find('h3.field-content').attr('a');


      // Get the subtext children from the next row in the HTML table.
      var subtext = a.parent().parent().next().children('.subtext').children();
      // Extract the relevant data from the children
      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();
      // Our parsed meta data object
      var metadata = {
    //    rank: parseInt(rank),
        title: title,
        space: space,
        url: url,
      };
      // Push meta-data into parsedResults array
      parsedResults.push(metadata);
    });
    // Log our finished parse results in the terminal
    console.log(parsedResults);
  }
});
