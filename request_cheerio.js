import request from 'request';
import iconv from 'iconv-lite';
import charset from 'charset';
import { load } from 'cheerio';

const crawl = (callback) => (queryString) => {
  const url = `https://www.google.com/search?${Object.keys(queryString)[0]}=${queryString[Object.keys(queryString)[0]]}`;
  callback(url); // 디코드 결과를 콜백
};

const parse = (url) => {
  const $ = load(url);
  const titles = [];

  $('h3').each((i) => {
    titles[i] = $(this).text();
  });

  console.log(titles);
};

crawl(parse)({ q: 'Node.js' });
