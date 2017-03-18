var request = require('request');
var    cheerio = require('cheerio');
var    fs =  require('fs'),
    urls = [];
request('http://congress.gov', function(err, resp, body) {
    if(!err && resp.statusCode == 200) {
    var $ = cheerio.load(body);
    $('a.title', '#siteTable').each(function(){
    var url = this.attr('href');
    if(url.indexOf('i.imgur.com') != -1){
      urls.push(url);
      }
  });

    console.log(urls);
    for(var i = 0; i < urls.length; i++){
        request(url[i]).pipe(fs.createWriteStream('img/' + i + '.jpg'));
      }

}

});
