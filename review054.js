/* eslint-disable no-restricted-globals */
console.log('name: %s', 'Kim Yewon');

const text = 'Kim Yewon';
const statement = `${text} is my name`;
console.log(statement);

console.log('My favorite friend is ', text);

console.log(isNaN('Kim Yewon'));
console.log(isNaN('10'));
// single quote로 묶인 숫자도 isNaN 결과값이 false다

const str = 'good girl';
console.log(str.length);
console.log(str[0]);
console.log('bad girl'[0]);
console.log('bad girl'.indexOf('gir'));
console.log('gir girl'.indexOf('girl'));

// const bookArr = ['Alice in wonderland', 'Wonder'];
const bookArr = ['Alice in wonderland', 'Wonder'];
console.log(bookArr.length);
console.log(bookArr);
bookArr.push('Node.js 200', 'Call me by your name');
console.log(bookArr);

const book = {};
book.title = 'Wonder';
book.author = 'RJ Palacio';
console.log(book);
console.log(book.title);

console.log(typeof book.title);
console.log(typeof book);
console.log(typeof (false));

const result = 56 > 61 ? '56 is bigger than 61' : '61 is bigger than 56';
console.log(result);

// eslint-disable-next-line no-restricted-syntax
for (const b of bookArr) {
  console.log(b);
}

bookArr.forEach((b) => {
  console.log(b);
});

bookArr.forEach((b) => console.log(b));

const chooseDay = new Date(2019, 5 - 1, 16);
console.log(chooseDay.toLocaleDateString());

function sumA(a, b) {
  return a + b;
}
const sumB = (a, b) => a + b;
const sumC = function (a, b) {
  return a + b;
};

console.log(sumA(10, 20));
console.log(sumA(30, 40));
console.log(sumA(50, 60));
