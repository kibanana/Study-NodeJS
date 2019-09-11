const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');
const cheerio = require('cheerio');

const crawl = callback => queryString => {
    const url = 'https://www.google.com/search?'+Object.keys(queryString)[0]+'='+queryString[Object.keys(queryString)[0]];
    console.log(url);
    callback(url); //디코드 결과를 콜백
};

const parse = (url) => {
    const $ = cheerio.load(url);
    let titles = [];

    $('h3').each(function(idx) {
        titles[i] = $(this).text();
        console.log($(this).text());
    });

    console.log(titles);
};

crawl(parse)({q: 'Node.js'});