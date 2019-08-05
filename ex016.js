// 108
// filter()
// 조건
const arr = ['abcd', 'bacd', 'cabd', 'dabc', 'eabc'];
const includeE = arr.filter(arg => arg.includes('e'));
const includeD = arr.filter(arg => arg.includes('d'));
const includeDandE = arr.filter(arg => arg.includes('e') && arg.includes('d'));
const includeDorE = arr.filter(arg => arg.includes('e') || arg.includes('d'));

console.log(arr);
console.log(includeE);
console.log(includeD);
console.log(includeDandE);
console.log(includeDorE);

console.log();

// 109
const fruitList = [
    {name: 'grape', level: 3},
    {name: 'lemon', level: 1},
    {name: 'apple', level: 5},
    {name: 'melon', level: 7},
    {name: 'watermelon', level: 6},
    {name: 'orange', level: 3}
];
const filteredFruitlist = fruitList.filter(fruit => fruit.level > 3 && fruit.name.includes('o'));
console.log(filteredFruitlist);
console.log();

// 110
// map()
// 각각 적용
const numberArr = [1,2,3,4];
const mappedNumberArr = numberArr.map(item => item * 10);
console.log(mappedNumberArr);
console.log();

// 111
const employeeArr = [
    {name: 'a', age: 20, salary: 2300},
    {name: 'b', age: 20, salary: 4000},
    {name: 'b', age: 20, salary: 4500}
];
const mappedEmployeeArr = employeeArr.map(item => item.salary * 1.2);
mappedEmployeeArr.forEach(item => console.log(`I'm ${item.name}, ${item.age}. My salary is ${item.salary}`));
mappedEmployeeArr.forEach(item => console.log(item));
console.log();

// 112
// reduce()
// 누적 계산
const scoreArr = [90,87,100,95];
const scoreSum1 = scoreArr.reduce((a, b) => a + b);
const scoreSum2 = scoreArr.reduce((a, b) => a + b, 85); // 첫 번째 호출에 첫 번째 인수 : 10
const scoreSum3 = scoreArr.reduce((a, b) => a + b, 0);
console.log(scoreSum1);
console.log(scoreSum2);
console.log(scoreSum3);

console.log();

// 113
// map, reduce 함수는 여러 데이터를 나누어 처리하여 결과를 합치는 역할을 한다.

const studentArr = [
    {name:'sA', class: 2, score: 89},
    {name:'sB', class: 6, score: 95},
    {name:'sC', class: 5, score: 92}
];

// 모든 학생의 점수 합을 구하는 것이 목적이므로 map()을 이용하여 점수만 뽑아낸다
const studentScore = studentArr.map(item => item.score);

// 모든 학생의 점수 합을 계산
// reduce 함수에 두 파라미터의 합을 리턴하는 함수를 전달한다
const studentScoreSum = studentScore.reduce((a, b) => a + b);

console.log(studentScoreSum);

console.log();

// 114
// filter(), map(), reduce() 동시적용
// const studentArr = [
//     {name:'sA', class: 2, score: 89},
//     {name:'sB', class: 6, score: 95},
//     {name:'sC', class: 5, score: 92}
// ];

const result = studentArr.filter(student => student.score > 90)
.map(student => student.score).
reduce((s1, s2) => s1 + s2);
console.log(result);

console.log();

// 115
const itArr = [
    {name: 'Angry', age: 23, department: 'development'},
    {name: 'Kind', age: 32, department: 'design'},
    {name: 'Upset', age: 33, department: 'development'},
    {name: 'Good', age: 25, department: 'development'},
    {name: 'Bad', age: 24, department: 'design'},
    {name: 'Hungry', age: 37, department: 'development'},
    {name: 'Calm', age: 35, department: 'planner'}
]
const resultAge = itArr.filter(item => item.department === 'development')
.map(item => item.age).
reduce((a1, a2) => a1 + a2);
console.log(resultAge);

console.log();

// 116
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

const resultAverage = itArr.filter(item => item.department === 'development')
.map(item => item.age)
.reduce((previous, current, index, array) => previous + (current / array.length), 0);
// ※ callback 함수의 파라미터 4개
// previous : 배열의 첫 번째 파라미터 or 초기값
// current : 배열 내 현재 처리되고 있는 값
// index : current의 인덱스
// array : 현재 사용되고 있는 배열

const resultIt = itArr.filter(item => item.department === 'development');
console.log(`${resultIt.length} * ${resultAverage} = ${resultIt.length * resultAverage}`);
console.log(resultAverage);