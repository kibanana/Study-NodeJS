/* eslint-disable no-undef */

// find - 조건을 만족하는 컬렉션에서의 첫 번째 요소 찾음
const users = [
  { user: 'joey', age: 32 },
  { user: 'ross', age: 41 },
  { user: 'chandler', age: 39 },
];
_.find(users, (o) => o.age < 40);

// filter
const numbers = [10, 40, 230, 15, 18, 51, 1221];
_.filter(numbers, (num) => num % 3 === 0);

// first and rest
const names = ['first', 'middle', 'last', 'suffix'];

const firstName = _.first(names);
const otherNames = _.rest(names);

const [firstName2, ...otherNames2] = names;
console.log(firstName); // 'first'
console.log(otherNames); // [ 'middle', 'last', 'suffix' ]

// each
_.each([1, 2, 3], (value, index) => {
  console.log(value);
})

  [1, 2, 3].forEach((value, index) => {
    console.log(value);
  });

_.forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key);
});

({ a: 1, b: 2 }).forEach((value, key) => { // !error
  console.log(key);
});

// includes
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 97];
_.includes(primes, 47);

// uniq - 중복 제거

// compact - 배열에서 undefinded 혹은 falsy 값을 제거하는 유용한 함수
const array = [undefined, 'cat', false, 434, '', 32.0];
_.compact(array);
array.filter(Boolean);

// fill - result : [true, true, true]
_.fill(Array(3), true);

// map - reulst : [16, 64]
function square(n) {
  return n * n;
}

_.map([4, 8], square);

// pluck - result : ['barney', 'fred']
const characters = [
  { name: 'barney', age: 36 },
  { name: 'fred', age: 40 },
];

_.pluck(characters, 'name');

// some - 배열을 순회하면서 하나의 요소라도 특정한 조건을 만족하는지 테스트
const elements = ['cat', 'dog', 'bat'];

_.some(elements, (el) => el.startsWith('c'));

// every - 배열을 순회하면서 각 요소에 대한 검증함수를 수행하는데, 모두 true 여야 조건 만족됨
// 유닛 테스트
// it('should filtered by gift id', (done) => {
//   request(app)
//     .get('/api/giftTakings?GiftId=1')
//     .end((err, res) => {
//       if (err) throw err;

//       _.every(res.body, (giftTaking) => {
//       return giftTaking.GiftId === 1;
//     }).should.be.true;
//       done();
//     });
// });
