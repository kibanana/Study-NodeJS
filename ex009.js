/* eslint-disable no-undef */
// 041
try {
  printMessage('hello');
} catch (e) {
  console.log('error: ', e);
}
console.log('program finished');

console.log();

// 042
const printHello = () => console.log('hello');

try {
  printHello();
} catch (e) {
  console.error(e);
} finally {
  console.log('finally 1');
}

try {
  printBye();
} catch (e) {
  console.error(e);
} finally {
  console.log('finally 2');
}
