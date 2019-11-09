import { decode } from 'iconv-lite';

const request = require('request');

request({
  url: 'https://www.google.co.kr/search',
  method: 'GET',
  qs: { q: '주지훈' },
  encoding: null,
}, (err, res, body) => {
  console.log(decode(body, 'euc-kr'));
});
