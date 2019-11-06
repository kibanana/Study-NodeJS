import { createServer } from 'http';
import { parse } from 'cookie';

createServer((req, res) => {
  let cookies = {};
  if (req.headers.cookie !== undefined) {
    cookies = parse(req.headers.cookie);
  }

  console.log(req.headers.cookie);
  console.log(cookies);
  console.log();

  res.writeHead(200, {
    'Set-Cookie': ['yummy_cookie=choco', 'tasty_cookie=strawberry'],
  }); // 성공(상태코드), 객체형식의 Cookie

  res.end('Cookie!');
}).listen(3000);
