//021
const pi = 3.14;
const name = 'Kim Yewon';
console.log(typeof name);
console.log(typeof 'hello');
console.log(typeof '20'); //isNaN, typeof 모두 숫자 값을 가진 문자형을 string으로 인식
console.log(typeof pi);
console.log(typeof 30);
console.log(typeof []);
console.log(typeof {});
console.log();

//022
console.log(10 > 20);
console.log(10 < 20);

const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);

console.log(typeof true);
console.log(typeof (true));
console.log(typeof false);
console.log(typeof (false));

const number = !1;
const string = !(!'hello');
console.log(number);
console.log(string);
console.log();

//023
let numberChange = 1;

console.log(numberChange);
console.log(--numberChange);
numberChange = numberChange+10;
console.log(numberChange);
numberChange = numberChange-5;
console.log(++numberChange);
console.log();

//024
const a = 5;
const b = 6;

if(a===5) {
    console.log(a == 5);
    console.log(a == b);
    console.log(a == '5');
    console.log(a === '5');
}
// === 은 타입까지 비교

console.log();

//025
const value30 = 30;
const value50 = 50;

console.log(value30 >= 30 && value50 >= 30);
console.log(value30 >= 30 && value50 >= 100);
console.log(value30 >= 40 && value50 >= 100);

console.log(value30 >= 30 || value50 >= 30);
console.log(value30 >= 30 || value50 >= 100);
console.log(value30 >= 40 || value50 >= 100);
console.log();

//026
const num1 = 1;
const num2 = 2;
const list = [1,2,3,4];
const emptyList = [];

const result = num1 > num2 ? 'num1 is bigger than num2' : 'num2 is bigger than num1';
console.log(result);

let arrLength = list.length;
arrLength > 0 ? console.log(list) : console.log('list가 비었습니다');
arrLength = emptyList.length;
arrLength > 0 ? console.log(list) : console.log('emptyList가 비었습니다');

console.log();

//End - chapter 01