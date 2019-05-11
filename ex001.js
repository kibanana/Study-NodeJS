//004
console.log('hello world!');
console.log('hello world!', 'buy');
console.warn(`this line ${'can make erroe'}`);
console.log('');

// 005
console.log('name: %s', 'Kim Yewon'); // 문자열
console.log('age: %d', 31); // 정수
console.log('pi: %d', 3.14); // 소수
console.log('math : %d science: %d', 92, 84); // 두 개 출력
console.log('name: %s age: %d', 'Kim Yewon'); // %d로 출력되는 경우
console.log('name: %s math: %s science: %s', 'Kim Yewon', 92, 84); // 셋 다 %s(문자열)
console.log('name: %s math: %s science: %s', 'Kim Yewon', '92', '84'); // 셋 다 %s(문자열)
console.log('');