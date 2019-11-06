import * as express from 'express';
import * as path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'html')));

// app.use('/static', express.static(path.join(__dirname, 'html')));
// 모든 접근에 /static 이 포함되어야 함
// ex ) http://localhost:3000/static/test02_main.html
// 하지만 이 방법 안썼으니까 아래(get, sendFile)에서는 안쓰고 파일이름만 써서 접근할 수 있음

// html은 폴더명
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'test02_main.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'test02_about.html'));
});

app.listen(3000, () => {
  console.log('Express App on port 3000!');
});
