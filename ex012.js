//070
const hello = 'Nice to meet you!';
const date = Date();
const bracket = '()';

const replaceHello = hello.replace('you', 'him');
const replaceDate = date.replace('GMT', ' ');
const replaceBracket = bracket.replace('(', '{').replace(')', '}');

console.log(replaceHello);
console.log(replaceDate);
console.log(replaceBracket);

console.log();

//071
const splitDate = Date();
console.log(splitDate.split(' ')[0]);
const splited = ['grape', 'me'];
console.log(splitDate.split(' '));
console.log(splited);

console.log();

//072
const str= 'asdf';
console.log(str.substring(0, 3));

console.log();

//073
const order1 = {no:1, itemName:'모자', price:'5000'};
const order2 = {no:2, itemName:'티셔츠', price:'10000'};
const order3 = {no:3, itemName:'블라우스', price:'25000'};
const order4 = {no:4, itemName:'슬랙스', price:'20000.50'};

const concat1 = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10); // 10진수라는 뜻 - 10진수일 경우 생략 가능
const sum2 = parseInt(order3.price, 10) + parseInt(order4.price, 10); //소수점 없어짐
const sum3 = parseFloat(order3.price, 10) + parseFloat(order4.price, 10); //소수점 없어짐
const sumNumber = Number(order3.price) + Number(order4.price); //소수점 있음

console.log(concat1);
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sumNumber);

console.log();



//정규표현식(regexp, regular expression)

//074 - \ 이스케이프
const regStr='<h1>Kim Yewon</h1>';
const result1 = regStr.replace(/Ye/g, '');
const result2 = regStr.replace(/Ye/g, '').replace(/Kim /g, ''); //띄어쓰기 포함 가능

const result3 = regStr.replace(/<h1>/g, '');
const result4 = regStr.replace(/<h1>/g, '').replace(/<\/h1>/g, ''); //이스케이프(escape) - 일반 문자열로 인식하게 함

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

console.log();

//075 - . 한글자
const regStr2='<h1>Kim Yewon</h1><h2>High School Student</h2>';
const result5 = regStr2.replace(/<..>/g, '');
const result6 = regStr2.replace(/<.../g, '');
const result7 = regStr2.replace(/<..>/g, ' ').replace(/<...>/g, ' ');

console.log(result5);
console.log(result6);
console.log(result7);

console.log();

//076 - .{(n), (m)} 중괄호 : n개 ~ m개 있다
const regStr3='<h1>Kim Yewon</h1> <h2>High School Student</h2>';
const regStrDiv='<div>Kim Yewon</div><h2>High School Student</h2>';
const result8 = regStr3.replace(/<.{0,1}..>/g, 'ㅇㅋ?'); //..이 h1, h2을 찾음
const result9 = regStrDiv.replace(/<.{0,4}>/g, ' ');

console.log(result8);
console.log(result9);

console.log();

//077 - [] - 안에 있는 문자열을 찾음
const regStr4='(<h1>Kim Yewon</h1>)';
const result10 = regStr4.replace(/[())]/g, '');
const result11 = regStr4.replace(/[(mn)]/g, '');
console.log(result10);
//console.log(regStr4);
console.log(result11);

console.log();

//078 - .match()
const regStr5='(<h1>Kim Yewon</h1>)';
const matched = regStr5.match(/[a-z]{3}/g); //대소문자 구분
console.log(matched);
console.log();



//실행 관련 메소드
//079
/*
setInterval(() => console.log('You do your best!'), 100);
const printGood = () => console.log('Good!');
setInterval(printGood, 200);
*/

//080
//setTimeout(() => console.log('Too late!'), 2000);

//081
const playFunction = setInterval(() => console.log('I score!'), 2000);
setTimeout(() => {clearInterval(playFunction);}, 5000); //setInterval - 4초동안 playFunction이 두 번 실행되고 / setTimeout - 1초 후(5초 후) 실행 중지시킴