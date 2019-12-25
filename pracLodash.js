/* eslint-disable no-undef */

import * as _ from 'lodash';

// find - 조건을 만족하는 컬렉션에서의 첫 번째 요소 찾음
const users = [
  { user: 'joey', age: 32 },
  { user: 'ross', age: 41 },
  { user: 'chandler', age: 39 },
];
const resultUser = _.find(users, (o) => o.age < 40);
console.log(resultUser);

// filter
const numbers = [10, 40, 230, 15, 18, 51, 1221];
const resultNumber = _.filter(numbers, (num) => num % 3 === 0);
console.log(resultNumber);

// first and rest
const names = ['first', 'middle', 'last', 'suffix'];

const firstName = _.first(names);
// const otherNames = _.rest(names);

console.log(firstName); // 'first'
// console.log(otherNames); // [ 'middle', 'last', 'suffix' ]

const [firstName2, ...otherNames2] = names;

console.log(firstName2);
console.log(otherNames2);

const arr = [1, 2, 3];

// each
_.each(arr, (value, index) => {
  console.log(value);
});

arr.forEach((value, index) => {
  console.log(value);
});

_.forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key);
});

// ({ a: 1, b: 2 }).forEach((value, key) => { // !error
//   console.log(key);
// });

// includes
// eslint-disable-next-line max-len
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 97];
const resultPrime = _.includes(primes, 47);
console.log(resultPrime);

// uniq - 중복 제거

// compact - 배열에서 undefinded 혹은 falsy 값을 제거하는 유용한 함수
const array = [undefined, 'cat', false, 434, '', 32.0];
const resultArray1 = _.compact(array);
const resultArray2 = array.filter(Boolean);
console.log(resultArray1);
console.log(resultArray2);

// fill - result : [true, true, true]
console.log(_.fill(Array(3), true));

// map - reulst : [16, 64]
function square(n) {
  return n * n;
}

console.log(_.map([4, 8], square));

// some - 배열을 순회하면서 하나의 요소라도 특정한 조건을 만족하는지 테스트
const elements = ['cat', 'dog', 'bat'];
const resultElement = _.some(elements, (el) => el.startsWith('c'));
console.log(resultElement);
