// // axios 는 쿼리스트링을 붙여서 요청을 하기에는 적절하지 않은 것 같으므로
// // 해당 예제는 사용하지 않는다

// import * as axios from 'axios';
// import * as cheerio from 'cheerio';

// const getHtml = (url) => {
//   try {
//     return axios.get(url);
//   } catch (error) {
//     return error;
//   }
// };

// // html.data 값이 제대로 받아지지 않았는지, each 문 내에서 받아지는 값이 없다
// const parse = (queryString) => {
//   const url = `https://www.google.com/search?${Object.keys(queryString)[0]}=${queryString[Object.keys(queryString)[0]]}`;

//   getHtml(url)
//     .then((html) => {
//       const $ = cheerio.load(html.data);
//       const titles = [];

//       $('a h3').each((i, elem) => {
//         titles.push($(elem).text());
//       });
//       return titles;
//     });
// };

// const result = parse({ q: 'Node.js' });
