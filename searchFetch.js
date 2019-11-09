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

  for (let i = 0; i < result.length; i += 1) {
    console.log(`title : ${result[i].title}`);
    console.log(`link : ${result[i].link}`);
    console.log('=======================');
  }
});
