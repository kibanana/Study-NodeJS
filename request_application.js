import '@babel/polyfill';
import * as request from 'request';
import { decode } from 'iconv-lite';

// request({
//     url: 'https://www.google.co.kr',
//     method: 'GET',
// }, (err, res, body) => {
//     console.log(body); // 응답메시지 - protocol, encoding 등의 정보
// });

request({
  url: 'https://www.google.co.kr/search',
  method: 'GET',
  qs: { q: '김예원' }, // 선택적
  encoding: null,
}, (err, res, body) => {
  console.log(decode(body, 'euc-kr'));
});
