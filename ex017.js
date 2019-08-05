// 117, 118
// 프로미스 promise : 비동기 처리 시 사용하는 리턴값 없는 콜백함수를 한 번에 여러 개 사용하면
// 코드의 가독성이 떨어져 실수할 여지가 많다. 프로미스는 콜백 중첩을 좀 더 보기 쉽게 작성하도록 도와준다.

const promiseFirst = new Promise(a => a(1))
.then(result => `${result + 10}`);
const promiseSecond = new Promise(resolve => resolve(1))
.then(result => `${result + 20}`);

// 여러 개의 비동기 처리가 모두 끝난 후 특정 로직을 실행하고 싶다면 Promise.all()을 이용
// { } 안에 처리할 작업을 적는다

Promise.all([promiseFirst, promiseSecond]).then(result => console.log(result))

Promise.all([promiseFirst, promiseSecond]).then(result => {
    console.log(Number(result[0]) + Number(result[1]));
    console.log('hello');
});

console.log();

// resolve에 값을 넣는 것이 return
// .then() 으로 return 값을 받아온다
// Promise 는 또다른 promise 오브젝트를 반환하기 때문에 마지막으로 연산한 값을 .then() 을 통해 받아온다.

// 119
// exports
// 1)
const sum = (a, b) => console.log(a + b);
exports.sum = sum;
// 2)
exports.printMessage = (message) => {
    console.log(message);
};

console.log();

// 120
// require.js