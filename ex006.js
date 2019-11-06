// 027 - if문
if (true) {
  console.log('true is printed');
}

if (false) {
  console.log('false is not printed');
}

if (100 < 200) {
  console.log('100 is smaller than 200');
}

console.log();

// 028 - if-else문
if (true) {
  console.log('true is printed');
} else {
  console.log('not true is printed');
}
console.log();

// 029 - if-else if-else
const num1 = 10;
const num2 = 20;
if (num1 > num2) {
  console.log('1');
} else if (num1 === num2) {
  console.log('2');
} else {
  console.log('3');
}

console.log();

// 030 - switch
const num = 5;
let message = '';

switch (num) {
  case 1: message = 'It is not value'; break;
  case 2: message = 'It is not value'; break;
  case 3: message = 'It is not value'; break;
  case 4: message = 'It is not value'; break;
  case 5: message = 'It is value'; break;
  default: message = 'What is value?';
}

console.log(message);
console.log();
