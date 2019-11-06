/* eslint-disable no-restricted-globals */
// 011
// is Not a Number
const num1 = isNaN(123);
const num2 = isNaN(-123);
const num3 = isNaN(123.123);
const num4 = isNaN('123'); // false
const num5 = isNaN('123yes'); // true
const num6 = isNaN('hello');

console.log('123 : ', num1);
console.log('-123 : ', num2);
console.log('123.123 : ', num3);
console.log('123 : ', num4);
console.log('123yes문자열 : ', num5);
console.log('hello문자열 : ', num6);
console.log();

// 012
const operland1 = 20;
const operland2 = 10;

let result = operland1 + operland2;
console.log(result);
result = operland1 - operland2;
console.log(result);
result = operland1 * operland2;
console.log(result);
result = operland1 / operland2;
console.log(result);
result = operland1 % operland2;
console.log(result);
console.log();

// 013
console.log('Is 4 even number?', 4 % 2 === 0);
console.log('Is 5 even number?', 5 % 2 === 0);
console.log();

// 014
const string1 = 'string';
const string2 = 'I want to sleep!';

console.log(string1.length);
console.log(string2.length);
console.log(string1[0]);
console.log(string2[0]);
console.log('abc'[0]);
console.log();

// 015
const string = 'abcde';
console.log(string.indexOf('de'));
console.log(string.indexOf('z'));
console.log();
