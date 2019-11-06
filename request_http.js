import { createServer } from 'http';
import { parse } from 'url';

createServer((req, res) => {
  let pathname = parse(req.url);
  // 두 번째 값으로 true를 넘기면 req.query 값 또한 parse 함
  console.log(pathname);

  pathname = parse(req.url).pathname;
  console.log(pathname);

  console.log(req.url);
  console.log(req.httpVersion);
  console.log(req.method);
})
  .listen(3000, () => {
    console.log('server working!');
  });
