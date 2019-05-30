//082
const fruitList = [
    {name: 'grape', sweet: 5},
    {name: 'apple', sweet: 7},
    {name: 'melon', sweet: 9}
]

fruitList.push({name: 'watermelon', sweet:  7})

for(let i=0; i<fruitList.length; i++){
    console.log(`${fruitList[i].name} is got ${fruitList[i].sweet}`);
}

fruitList.pop();

for(let i=0; i<fruitList.length; i++){
    console.log(`${fruitList[i].name} is got ${fruitList[i].sweet}`);
}

console.log();

//083
fruitList.reverse();

for(let i=0; i<fruitList.length; i++){
    console.log(`fruitList : ${fruitList[i].name} is got ${fruitList[i].sweet}`);
}

const strArr = 'Yewon'.split('');
strArr.reverse();
console.log(strArr);

console.log();

//084
strArr.sort();
console.log(strArr);

const numArr = [5,2,6,4];
numArr.sort();
console.log(numArr); //내림차림의 경우 .sort() 후 .reverse()

console.log();

//085
const hungryList = [
    {name: 'Salaryman', age: 35},
    {name: 'So Yeon', age: 16},
    {name: 'Ji Hyeon', age: 17},
    {name: 'Goodgirl', age: 35},
    {name: 'Yesman', age: 40}
];

// hungryList.sort((beforeHungry, afterHungry) => {
//     if(beforeHungry.age > afterHungry.age) return 1; //나이 오름차순
//     else if(beforeHungry.age < afterHungry.age) return -1;
//     else if(beforeHungry.name > afterHungry.name) return -1; //반환문을 수정하기보다는 조건문을 수정함으로써 오름차순/내림차순 조정
//     else if(beforeHungry.name < afterHungry.name) return 1; //이름 내림차순(z~A)
//     return 0;
// });
// Visual Studio Code의 주석 단축키는 ctrl+/
// console.log(hungryList);

console.log();

//86 - JSON 오브젝트 정렬시 return 1, return -1을 이용하지 않고
// hungryList.sort((now, next) => now.age - next.age); //오름차순 정렬
// console.log(hungryList);

const compare = (now, next) => {
    console.log('----------');
    console.log('now: ', now);
    console.log('next: ', next);
}

// hungryList.sort(compare);

//After Selection light(icon) - Extract menu
 
console.log();

//087
const sliced = hungryList.slice(1,2);
console.log(sliced);

console.log();

//088 - 왠지 object Object로 출력됨
console.log('Sort: ' + JSON.stringify(hungryList.sort((now, next) => now.age - next.age)));
console.log('Reverse: ' + JSON.stringify(hungryList.reverse()));
console.log('Sliced: ' + JSON.stringify(hungryList.slice(1,3)));

console.log();

//089
const strArr1 = ['A', 1];
const strArr2 = ['B', 2];
const strArr3 = ['C', 3];

const concatArr1 = strArr1.concat(strArr2);
const concatArr2 = strArr1.concat(strArr2, strArr3);

console.log(concatArr1);
console.log(concatArr2);

console.log();

//090
const capital = ['London', 'Seoul', 'Berlin'];
console.log(capital.shift()); // London
console.log(capital); // [ 'Seoul', 'Berlin' ]
capital.unshift('Beijing');
console.log(capital); // [ 'Beijing', 'Seoul', 'Berlin' ]

console.log();

//091
console.log(capital)
console.log(capital.pop()); // Berlin
console.log(capital.push('Tokyo')); // 3

console.log();

//092
for(let j=0; j < capital.length; j++) {
    if(capital[j] === 'Seoul') {
        console.log('I\'ve arrived Seoul');
        break;
    }
}

console.log();