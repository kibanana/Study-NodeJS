Javascript(ES6) Basic
=====

### 001 (001~005)
`console.log();`에서 console-Class, .log()-Method  
'' : single quote  
`` : backtick  
%s(문자열), %d(정수, 소수)  
  
### 002 (006~010)
백틱(backtick)을 이용한 포맷팅  
``const statement = `${greeting}! my name is ${name}`;``  
`console.log('statement: ', statement)`  
  
변수 선언은 let으로, 변수를 여러번 선언하는 것이 불가능함(var과 달리)  
  
let, var는 variable  
const는 constants  
  
### 003 (011~015)
isNaN  
+,-,*,/,%  
배열 선언시 [ ] 사용  
=== : 비교연산자  
`console.log((변수 or 상수 이름).length)`  
: 문자열 길이 출력(변수 없이 바로 (문자열).length 형태로 사용 가능)  
  
`console.log(string.indexOf('de'));`  
: argument인 문자열의 인덱스. 없으면 -1 리턴  
  
### 004 (016~020)
배열
- 배열 선언  
``const strings = ['hello', 'bye', 'thank you'];``  
``const numbers1 = new Array(1,2,3);``  
``const numbers2 = new Array();``  
- 배열에 값 삽입  
``arStrings.push('b', 'c');``
- 배열 길이  
``arFruit.length``
  
  
Javascript 객체(Object)
```javascript
const user1 = {};
user1.name = 'Kim Yewon';
user1.age = 18;
console.log(user1); // { name: 'Kim Yewon', age: 18 }
console.log(user1.name); // Kim Yewon
console.log(user1.age); // 18
```
  
```
const memberName = 'name';
console.log(user1[memberName]); // Kim Yewon
```
  
### 005 (021~026)
- typeof (argument)
```
console.log(typeof 'hello'); // string
console.log(typeof '20'); // string
console.log(typeof pi); // number
console.log(typeof 30); // number
console.log(typeof []); // object
console.log(typeof {}); // obejct
```
- 논리형
- 전위, 후위연산자
- 논리연산자
- 삼항연산자
```
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
```

Javascript(ES6) Grammar
=====

### 006 (027~030)

  
### 007 (031~036)

  
### 008 (037~040)

  
### 009 (041~042)

  
### 010 (043~054)

  
  
### 012 (070~081)
-----
__*rgex (정규표현식, Regular Expression)*__
  
### 013 (082~094)
-----
  
