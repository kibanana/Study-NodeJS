//043
//전역객체 (Global Object)
console.log(process.env);
console.log('------------------------------------------')
console.log(process.arch);
console.log('------------------------------------------')
console.log(process.uptime());
console.log('------------------------------------------')
console.log(process.memoryUsage());
console.log('------------------------------------------')
console.log(process.version);
console.log('------------------------------------------')
console.log(process.versions);
console.log('------------------------------------------')
console.log(__filename);
console.log(__dirname);

console.log();

//044
function printHello() {
    console.log('hello');
}

printHello();

const printBye = () => {
    console.log('bye');
};

printBye();

console.log();

//045
function printMessage(m) {
    console.log(m);
}

printMessage('hello');

const printMessage2 = (m) => {
    console.log(m)
}

printMessage2('bye');

console.log();

//046
function sum(a, b) {
    const r = a+b;
    return r;
}

const result = sum(10,20);
console.log(result);

console.log();

//047
const studentList = [
    {name: 'A', age: 31, score: 85},
    {name: 'B', age: 25, score: 70},
    {name: 'C', age: 20, score: 60},
    {name: 'D', age: 29, score: 85},
    {name: 'E', age: 22, score: 90}
]

function getDegree(score) {
    if(score >= 90) {
        return 'A';
    } else if(score >= 80) {
        return 'B';
    } else if(score >= 70) {
        return 'C';
    } 
        return 'F';
}

studentList.forEach((student) => {
    const resultScore = `${student.name}(${student.age})의 등급은 ${getDegree(student.score)}`;
    console.log(resultScore);
});

console.log();

//048
//함수 선언식 (Function declaration)
function printHello() {
    console.log('hello');
}

//함수 표현식 (Function expression)
const printWelcome = function() {
    console.log('welcome');
};

printHello();
printWelcome();

console.log();

//049
function add(a, b) {
    return a+b;
}

function divide(a, b) {
    return a/b;
}

let p = add;
console.log(typeof add);
console.log(typeof p);
console.log(p(10, 20));

function calculate(a, b, func) {
    return func(a,b);
}

console.log(calculate(100,200,add));
console.log(calculate(200,10, divide));

add.attr = 'function';
add.date = '2019/05/17';
console.dir(add); //동적으로 프로퍼티 할당


console.log();

//050
const printGood = () => console.log('good');
const printBad = () => 'bad';

const printSome = message => console.log(message);
const addSome = (a, b) => a+b;
const subSome = (a, b) => a-b;

printGood();
console.log(printBad());
printSome('Im sleepy!');
console.log(addSome(10,30));
console.log(subSome(50,20));

console.log();

//051
const sumAndPrint = (a, b) => {
    const result = a+b;
    return `결과는 ${result}입니다.`;
}

const arrowResult = sumAndPrint(10,20);
console.log(arrowResult);

console.log();

//052
const bookList = [
    {title: 'Alice in Wonderland', author: '1'},
    {title: 'Momo', author: '2'},
    {title: 'Endless Story', author: '3'},
    {title: 'This is Java', author: '4'},
    {title: 'Effective Java', author: '5'}
]

bookList.forEach(book => console.log(`${book.title} 의 작가는 ${book.author}`));
console.log('================================');
bookList.forEach((book) => {
    console.log(`${book.title} 의 작가는 ${book.author}`);
});

console.log();

//053
const concatString = (a, b) => a+b;

const printResult = (result) => {
    console.log(`결과는 ${result}입니다.`);
};

const concatAndPrint = (concatResult, callback) => {
    callback(concatResult);
};

concatAndPrint(concatString('abc', 'xyz'), printResult);

console.log();

//054
console.log('함수 내부에서 선언된 변수는 지역변수, 외부에 선언된 변수는 전역변수');
console.log('프로그램 전체에서 사용되는 변수는 주로 상단에 선언');
console.log('함수 내에서 변수 유형var or let을 지정하지 않고 변수를 선언할 경우 전역변수');


console.log();