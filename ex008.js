// 037
const today = new Date();
const year = new Date(2019);
const month = new Date(2019, 5);
const day = new Date(2019, 5 - 1, 16);
const hour = new Date(2019, 5 - 1, 16, 5);
const minute = new Date(2019, 5 - 1, 16, 5, 55);
const second = new Date(2019, 5 - 1, 16, 5, 55, 30);

console.log(today);

console.log(today.toLocaleString());
console.log(year.toLocaleString());
console.log(month.toLocaleString());
console.log(day.toLocaleString());
console.log(hour.toLocaleString());
console.log(minute.toLocaleString());
console.log(second.toLocaleString());

console.log();

// 038
console.log(second.toLocaleString());
console.log(second.toLocaleDateString());
console.log(second.toLocaleTimeString());

console.log(second.getFullYear());
console.log(second.getMonth() + 1);
console.log(second.getDate());
console.log(second.getDay()); // 요일
console.log(second.getHours());
console.log(second.getMinutes());
console.log(second.getSeconds());

console.log();

// 039
const getYymmdd = (date) => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmddAnother = getYymmdd(new Date(2019, 9 - 1, 9));
console.log(yymmdd);
console.log(yymmddAnother);

console.log();

// 040
const date = new Date();
const toTimestamp = date.getTime();
const toDate = new Date(1570274211107);
const toInit = new Date(1);

console.log(toTimestamp);
console.log(toDate);
console.log(toInit);

console.log();
