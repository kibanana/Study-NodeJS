/* eslint-disable prefer-const */
import { fetch } from 'cheerio-httpcli';

const keyword = 'node.js';

fetch('http://www.google.com/search', { q: keyword }, (err, $, res, body) => {
  let result = [];
  let temp = {};

  $('div#rso h3').each((i, elem) => {
    result[i] = {};
    result[i].title = $(elem).text();
  });

  $('div#rso div.g div.rc div.r > a').each((i, elem) => {
    temp.link = $(elem).attr('href');
    Object.assign(result[i] = result[i] || { title: '' }, temp);
  });

  result.forEach((value) => {
    console.log(JSON.stringify(value, null, 4));
  });
});
