//031,032 - for문 (중첩 - 구구단)
for(let i=2; i<10; i++) {
    console.log(`===== ${i} 단 출력 =====`);
    for(let j=1; j<10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log(`===== 출력 끝 =====`);
}

console.log();

//033 - for문-break
const fruitList = [
    {name: 'grape', level: 3},
    {name: 'lemon', level: 1},
    {name: 'apple', level: 5},
    {name: 'melon', level: 7},
    {name: 'watermelon', level: 6},
    {name: 'orange', level: 3}
];

let fruitResult = '';

for(let i=0; i<fruitList.length; i++) {
    if(fruitList[i].name === 'melon') {
        fruitResult = fruitList[i];
        break;
    }
    console.log(`${fruitList[i].name} 은 melon이 아닙니다`);
}
console.log(fruitResult);

console.log();

//034 - for of
for(const fruit, let i of fruitList) {
    console.log(fruit);
}

console.log();

//035 - forEach
fruitList.forEach(function(fruit, i){
    console.log(`${i} : ${JSON.stringify(fruit)}`);
});
console.log();
fruitList.forEach(fruit => {console.log(fruit); console.log(`${fruit.name} is lovely!`); });

console.log();

//036 - while
let i=0;
while(i<10) {
    console.log(i);
    i++;
}

console.log();