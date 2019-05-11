//016
const strings = ['hello', 'bye', 'thank you'];
const numbers1 = new Array(1,2,3);
const numbers2 = [4,5,6];

console.log(strings);
console.log(numbers1);
console.log(numbers2);
console.log();

//017
const arNumbers = [];
arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);
arNumbers.push(4);
console.log(arNumbers);

const arStrings = ['1'];
arStrings.push('a');
arStrings.push('b', 'c');
console.log(arStrings);
console.log();

//018
const arFruit = [];
console.log(arFruit[0]);
console.log(arFruit.length);
arFruit.push('Grape', 'Apple', 'Lemon');
console.log(arFruit[0]);
console.log(arFruit.length);
console.log();

//019, 020
const user1 = {};
user1.name = 'Kim Yewon';
user1.age = 18;
console.log(user1);
console.log(user1.name);
console.log(user1.age);

/*const user2 = {name: 'Kim Yejin', age: 19};
console.log(user2);*/

user1.job = 'developer';
user1.nation = 'korea';
console.log(user1);

const memberName = 'job';

console.log(user1[memberName]);

console.log();