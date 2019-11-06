/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const reasonToHomeList = [
  '그냥 집에 가고싶다',
  '급식이 맛이 없다',
  '컵라면밖에 못 먹는다',
];

// forEach
reasonToHomeList.forEach((item) => console.log(item));

// for of
for (const item of reasonToHomeList) {
  console.log(item);
}

// for in
for (const item in reasonToHomeList) {
  console.log(item);
}
