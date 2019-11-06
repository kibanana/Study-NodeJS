import * as express from 'express';

const app = express();

app.use('/', (req, res) => {
  const agent = req.header('User-Agent');
  const paramName = req.query.name;
  const browserChrome = 'welcome to chrome';
  const browserOther = 'welcome to other browser';

  console.log(req.headers);
  console.log(req.baseUrl); // localhost 시 값 없음 => 127.0.0.1
  console.log(req.hostname);
  console.log(req.protocol);

  if (agent.toLowerCase().match(/chrome/)) {
    res.write(`<div><p>${browserChrome}</p></div>`);
  } else {
    res.write(`<div><p>${browserOther}</p></div>`);
  }

  res.write(`<div><p>${paramName}</p></div>`);
  res.write(`<div><p>${agent}</p></div>`);
  res.end();
});

app.listen(3000, () => {
  console.log('server is working');
});
