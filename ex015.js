// 101 - closer
function grandParent(g1, g2) {
    const g3 = '3 ';
    return function parent(p1, p2) {
        const p3 = '33 ';
        return function child(c1,c2) {
            const c3 = '333 ';
            return g1+g2+g3+p1+p2+p3+c1+c2+c3;
        };
    };
}

const parentFunction = grandParent('1 ', '2 '); // return parent
const childFunction = parentFunction('11 ', '22 '); // return child
console.log(childFunction('111 ', '222 ')); // 1 2 3 11 22 33 111 222 333 

console.log();

// 102 - 합성함수
// 1)
const hello = () => console.log('hello');
const world = () => console.log('world');

hello(world());

console.log();

// 2)
const calMultiple = x => x*x;
const calAdd = (x, y) => x+y;

console.log(calAdd(calMultiple(5), 10)); // 35
console.log(calMultiple(calAdd(10, 20))); // 900

console.log();

// 103 - 커링 curring
// node.js에는 비동기 실행이 많기에 return 값이 없는 대신 callback(콜백)을 인자로 넘겨서 사용하는데, 
// 이때 curring 기법으로 중복을 최소화하며 개발 가능

const add = x => y => `x : ${x}, y : ${y} => ${x+y}`;
const add10 = add(10);
console.log(add10(20));
console.log(add(60)(30));

console.log();

// 104
const makeCoffee = liquid => espresso => `${espresso} + ${liquid}`;

const makeAmericano = makeCoffee('water');
const makeLatte = makeCoffee('milk');

const americano = makeAmericano('coffeBean');
const latte = makeLatte('coffeBean');

console.log(americano);
console.log(latte);

console.log();

// 105

// console 창에서 가장 나중에 출력되는 게 방해돼서 주석처리
// const fs = require('fs');

// const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data) => {
//     if(err) throw err;
//     console.log(data.toString().substring(0, 30) + "/"); // 파일 내용이 너무 길어서 자름
// });

// const thisDirOpenFileAndPrint = openFileAndPrint('./');
// const otherDirOpenFileAndPrint = openFileAndPrint('./');

// thisDirOpenFileAndPrint('README.md'); // 나중 출력
// otherDirOpenFileAndPrint('ex014.js'); // 먼저 출력

// console.log();

// 106 - 프리디케이트 predicate
// 함수이지만 그 중에서도 true또는 false를 리턴하는 함수
const isApple = (fruit) => {
    if (fruit === 'apple') return true;
    return false;
}
console.log(isApple('apple'));

console.log();

// 107
const numbers = [50, 1, 99];
const isFirstBiggerThanSecond = (first, second) => {
    if(first > second) return true;
    return false;
}
const sortedNumbers = numbers.sort(isFirstBiggerThanSecond);
console.log(sortedNumbers);