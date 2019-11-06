// 094
const functionSum = () => (a, b) => a + b;
const plus = functionSum();
console.log(plus(10, 20));

console.log();

// 095
const countDown = (value) => {
  console.log('value : ', value);
  if (value === 0) return value;
  return countDown(value - 1);
};
console.log('result : ', countDown(20));

console.log();

// 096 - start: 하나씩 증가하는 값
const sumNumber = (start, end, sum) => {
  console.log('sum : ', sum + start);
  if (start < end) return (sumNumber(start + 1, end, sum + start));
  return sum;
};
console.log(sumNumber(1, 20, 0));

console.log();

// 097
const factorial = (n) => {
  if (n === 0) return 1;
  console.log('n : ', n * (n - 1));
  return n * factorial(n - 1);
};
console.log(factorial(5));

console.log();

// 098
const fibonacci = (num) => {
  console.log('num : ', num);
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(5));

console.log();

// 099
const scores = [85, 95, 76];

const sum = (list, total, idx) => {
  console.log(`list: ${list}, totla: ${total}, idx: ${idx}`);
  if (idx === list.length) return total;
  return sum(list, total + list[idx], idx + 1);
};
console.log('sum : ', sum(scores, 0, 0));

console.log();

// 100
const average = (list, total, idx) => {
  if (idx === list.length) return total / idx;
  return average(list, total + list[idx], idx + 1);
};
console.log(`average : ${average(scores, 0, 0)}`);
