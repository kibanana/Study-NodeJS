const http = require('http');  // 서버를 만드는 모듈 불러옴

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {  // 서버 만드는 메소드
  // request, response
  return req
  .on('error', (err) => { // 요청에 에러가 있으면
    console.error(err);
  })
  .on('data', (data) => { // 요청에 데이터가 있으면
    console.log(data);
  })
  .on('end', () => { // 요청의 데이터가 모두 받아졌으면
    res.on('error', (err) => { // 응답에 에러가 있으면
      console.error(err);
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('I wanna sleep!\n');
  res.end(`Server running at http://${hostname}:${port}/`);
  });
})

server.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
});