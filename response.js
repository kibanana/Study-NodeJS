import * as path from 'path';
import * as fs from 'fs';

const express = require('express');

const app = express();

app.get('/sendfile', (req, res) => {
  res.sendFile(path.join(__dirname, 'package.json'));
});

app.get('/json', (req, res) => {
  fs.readFile(path.join(__dirname, 'package.json'), (err, data) => {
    if (data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(JSON.stringify(data.toString()));
      // console.log(data);
      // res.json(JSON.stringify(data.toString()));
    } else {
      const jsonError = {
        error: "Can't read pacage.json",
      };
      res.json(jsonError);
    }
  });
});

app.listen(3000, () => {
  console.log('server is working');
});
