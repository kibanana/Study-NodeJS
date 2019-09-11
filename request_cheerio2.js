const client = require('cheerio-httpcli'); 
let keyword = 'node.js';
let resultLink = new Array();
let resultTitle = new Array();
 
client.fetch('http://www.google.com/search', { q: keyword }, function (err, $, res, body) {
  // console.log(res.headers);

  $('h3').each(function (idx) {
    resultTitle.push($(this).text());
  });
  
  $('div#rso div.g div.rc div.r > a').each(function (idx) {
    resultLink.push($(this).attr('href'));
  });

  for(let i = 0; i < resultLink.length; i++) {
    console.log(`title: ${resultTitle[i]}`);
    console.log(`link: ${resultLink[i]}`);
    console.log('=======================');
  }
});