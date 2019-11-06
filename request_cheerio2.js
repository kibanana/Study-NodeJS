import { fetch } from 'cheerio-httpcli';

const keyword = 'node.js';
const resultLink = [];
const resultTitle = [];

fetch('http://www.google.com/search', { q: keyword }, (err, $, res, body) => {
  // console.log(res.headers);

  $('h3').each(() => {
    resultTitle.push($(this).text());
  });

  $('div#rso div.g div.rc div.r > a').each(() => {
    resultLink.push($(this).attr('href'));
  });

  for (let i = 0; i < resultLink.length; i += 1) {
    console.log(`title: ${resultTitle[i]}`);
    console.log(`link: ${resultLink[i]}`);
    console.log('=======================');
  }
});
