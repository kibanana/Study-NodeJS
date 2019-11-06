/* eslint-disable consistent-return */
import { createServer } from 'http';
import { parse } from 'url';
import { readFile } from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((request, response) => { // 서버 만드는 메소드
  const path = parse(request.url, true).pathname; // url에서 path 추출
  if (request.method === 'GET') { // GET 요청이면
    if (path === '/about') { // 주소가 /about이면
      response.writeHead(200, { 'Content-Type': 'text/html' }); // header 설정
      readFile(`${__dirname}/test02_about.html`, (err, data) => { // 파일 읽는 메소드
        if (err) {
          return console.error(err); // 에러 발생시 에러 기록하고 종료
        }
        response.end(data, 'utf-8'); // 브라우저로 전송
      });
    } else if (path === '/') { // 주소가 /이면
      response.writeHead(200, { 'Content-Type': 'text/html' });
      readFile(`${__dirname}/test02_main.html`, (err, data) => {
        if (err) {
          return console.error(err);
        }
        response.end(data, 'utf-8');
      });
    } else { // 매칭되는 주소가 없으면
      response.statusCode = 404; // 404 상태 코드
      response.end('주소가 없습니다');
    }
  }
}).listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});
