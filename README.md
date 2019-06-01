Javascript(ES6) Basic
=====

### 001 (001~005)
`console.log();`에서 console-Class, .log()-Method  
' ' : single quote  
`` : backtick  
%s(문자열), %d(정수, 소수)  
  
### 002 (006~010)
백틱(backtick)을 이용한 포맷팅 

```javascript
const greeting = 'welcome';
const statement = `${greeting}! my name is ${name}`;
console.log('statement: ', statement)
```
  
변수 선언은 let으로, 변수를 여러번 선언하는 것이 불가능함(var과 달리)  
  
let, var는 variable  
const는 constants  
  
### 003 (011~015)
isNaN  
+, -, *, /, %  
배열 선언시 [ ] 사용  
=== : 비교연산자  
`console.log((변수 or 상수 이름).length)`  
: 문자열 길이 출력(변수 없이 바로 (문자열).length 형태로 사용 가능)  
  
`console.log(string.indexOf('de'));`  
: argument인 문자열의 인덱스. 없으면 -1 리턴  
  
### 004 (016~020)
배열
- 배열 선언  
```javascript
const strings = ['hello', 'bye', 'thank you']; 
const numbers1 = new Array(1,2,3);
const numbers2 = new Array();
```
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
  
```javascript
const memberName = 'name';
console.log(user1[memberName]); // Kim Yewon
```
  
### 005 (021~026)
- typeof (argument)
```javascript
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
```javascript
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
- *break*
- if - else if - else
- switch (문자열 사용 가능) - case
  
### 007 (031~036)
- for
- for of
```javascript
for(const fruit of fruitList) {
    console.log(fruit);
}
```
- forEach
```javascript
fruitList.forEach(function(fruit){
    console.log(fruit)
});
console.log();
fruitList.forEach(fruit => {console.log(fruit); console.log(`${fruit.name} is lovely!`); });
```
- while

  
### 008 (037~040)
Refer to ex008.js and execute it
  
### 009 (041~042)
```javascript
const printHello = () => console.log('hello');

try {
    printHello();
} catch(e) {
    console.error(e); // not printed
} finally {
    console.log('finally 1');
}


try {
    printBye(); // not executed
} catch(e) {
    console.error(e);
} finally {
    console.log('finally 2');
}
```
  
### 010 (043~054)
- 함수(function) 선언
```javascript
// 함수 선언식 (Function declaration)
function printHello() {
    console.log('hello');
}
// 함수 표현식 (Function expression)
const printBye = () => {
    console.log('bye');
};

function printMessage(m) {
    console.log(m);
}
const printMessage2 = (m) => {
    console.log(m)
}
```
- 함수(function) 호출
```javascript
printHello();
printBye();

printMessage('hello');
printMessage2('bye');
```
- 변수에 함수 대입
```javascript
function add(a, b) {
    return a+b;
}

let p = add;
console.log(typeof add); // function
console.log(typeof p); // function
console.log(p(10, 20)); // 30
```
- 함수에 동적으로 프로퍼티 할당
```javascript
add.attr = 'function';
add.date = '2019/05/17';
console.dir(add); // { [Function: add] attr: 'function', date: '2019/05/17' }
```
- 화살표 함수
```javascript
const addSome = (a, b) => a+b;

const sumAndPrint = (a, b) => {
    const result = a+b;
    return `결과는 ${result}입니다.`;
}
```
- 콜백함수
```javascript
const concatString = (a, b) => a+b;

const printResult = (result) => {
    console.log(`결과는 ${result}입니다.`);
};

const concatAndPrint = (concatResult, callback) => {
    callback(concatResult);
};

concatAndPrint(concatString('abc', 'xyz'), printResult);

```
- 함수의 유효 범위(Scope)  
함수 내에서 생성한 변수는 함수 밖에서 사용할 수 없음  
단, 함수 내에서 변수 유형(var, let)을 지정하지 않고 변수를 선언할 경우 전역변수가 됨
  
  
### 012 (070~081)
-----
- .replace  
`const replaceBracket = bracket.replace('(', '{').replace(')', '}');`
- .split  
`console.log(Date().split(' ')[0]);`
- .substring  
`console.log('asdf'.substring(0, 3)); //asd`
- parseInt, Number  
```javascript
const order1 = {no:1, itemName:'모자', price:'5000'};
const order2 = {no:2, itemName:'티셔츠', price:'10000'};
const order3 = {no:3, itemName:'블라우스', price:'25000'};
const order4 = {no:4, itemName:'슬랙스', price:'20000.50'};

const concat1 = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10); // 10진수라는 뜻 - 10진수일 경우 생략 가능
const sum2 = parseInt(order3.price, 10) + parseInt(order4.price, 10); //소수점 없어짐
const sumNumber = Number(order3.price) + Number(order4.price); //소수점 있음
```
  
__*regexp (정규표현식, Regular Expression)*__
- \ 이스케이프
```javascript
const regStr='<h1>Kim Yewon</h1>';
const result = regStr.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
//이스케이프(escape) - 일반 문자열로 인식하게 함
```
- . 한글자
```javascript
const regStr='<h1>Kim Yewon</h1><h2>High School Student</h2>';
const result = regStr.replace(/<..>/g, ' ').replace(/<...>/g, ' ');
```
- .{(n), (m)} 중괄호 : n개 ~ m개 있다
```javascript
const regStrDiv='<div>Kim Yewon</div><h2>High School Student</h2>';
const result = regStrDiv.replace(/<.{0,4}>/g, ' ');
```
- [] - 안에 있는 문자열을 찾음
```javascript
const regStr4='(<h1>Kim Yewon</h1>)';
const result10 = regStr4.replace(/[())]/g, '');
const result11 = regStr4.replace(/[(mn)]/g, '');
console.log(result10); // <h1>Kim Yewon</h1>
console.log(result11); // <h1>Ki Yewo</h1>
```
- .match()  
조건에 맞는 문자열을 배열에 넣어서 
```javascript
const regStr5='(<h1>Kim Yewon</h1>)';
const matched = regStr5.match(/[a-z]{3}/g); //대소문자 구분
console.log(matched);
```
  
__*실행 관련 메소드*__
```javascript
const playFunction = setInterval(() => console.log('I score!'), 2000);
setTimeout(() => {clearInterval(playFunction);}, 5000); 
//setInterval - 4초동안 playFunction이 두 번 실행되고
//setTimeout - 1초 후(5초 후) 실행 중지시킴
```
  
### 013 (082~092)
-----
- 리스트(list)  
배열같지만 json 객체가 들어있기에 리스트라고 얘기함  
.push()  
배열 마지막에 삽입
.pop()  
배열 마지막에서 제외
- .reverse  
뒤집기
- .sort()  
오름차순 정렬  
내림차순 정렬시 .sort() 후 .reverse()
- 객체 properties로 오름차순 정렬
  - 
  ```javascript
  hungryList.sort((beforeHungry, afterHungry) => {
      if(beforeHungry.age > afterHungry.age) return 1; //나이 오름차순
      else if(beforeHungry.age < afterHungry.age) return -1;
      else if(beforeHungry.name > afterHungry.name) return -1; //반환문을 수정하기보다는 조건문을 수정함으로써 오름차순/내림차순 조정
      else if(beforeHungry.name < afterHungry.name) return 1; //이름 내림차순(z~A)
      return 0;
  });
  ```
  - 
  ```javascript
  hungryList.sort((now, next) => now.age - next.age);
  ```
-
```javascript
const sliced = hungryList.slice(1,2);
console.log(sliced);
```
- JSON 출력
```javascript
console.log('Sort: ' + JSON.stringify(hungryList.sort((now, next) => now.age - next.age)));
console.log('Reverse: ' + JSON.stringify(hungryList.reverse()));
console.log('Sliced: ' + JSON.stringify(hungryList.slice(1,3)));
```
- .concat()
```javascript
const strArr1 = ['A', 1];
const strArr2 = ['B', 2];
const strArr3 = ['C', 3];

const concatArr1 = strArr1.concat(strArr2);
const concatArr2 = strArr1.concat(strArr2, strArr3);
```
- .shift() · .unshitf()  
배열 처음에서 제외
배열 마지막에서 삽입
