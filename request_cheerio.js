const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');
const cheerio = require('cheerio');

const crawl = callback => queryString => request({
  url: 'https://www.google.com/search',
  encoding: null, //한글이 깨지는 문제를 해결하기 위해 null로 설정
  method: 'GET', //GET 요청
  qs: queryString, //크롤러를 이후 사용할 때 인자로 전달되는 값
  timeout: 10000, //10초 이후 응답을 포기
  followRedirect: true, //사이트 이동을 허용할 것인지 체크
  maxRedirects: 10, //리다이렉션을 최대 몇 번 할지 설정
},
(error, response, body) => {
  if (!error && response.statusCode === 200) { //HTTP 상태코드가 200이면 서버가 요청을 제대로 처리했다는 뜻이다. 
    const enc = charset(response.headers, body); //현재 사이트의 헤더 정보에서 인코딩 정보를 가져옴
    const decodedResult = iconv.decode(body, enc); //iconv를 이용하여 해당 사이트의 인코딩 방식으로 body를 디코드
    callback(cheerio.load(decodedResult)); //디코드 결과를 콜백
  } else {
    console.log(`error${response.statusCode}`);
  }
});

const parse = (decodeResult) => {
    console.log(decodeResult);
    const $ = decodeResult;
    console.log($);
    let titles = [];

    $('div.srg').children().each(function(i, elem) {
        titles[i] = $(this).find('h3.LC20lb div.ellip').text();
        console.log($(this).find('h3.LC20lb div.ellip').text());
    });
};

crawl(parse)({q: 'Node.js tutorial'});