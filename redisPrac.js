import redis from 'redis';

const redisClient = redis.createClient();

// string

// redisClient.set('name', 'woni');
// redisClient.get('name', (err, res) => {
//   console.log(res);
// });

// hash (key-hash) 객체를 저장한다고 보면 된다

// redisClient.hmset('students', 'name', 'woni', 'age', 18);
// redisClient.hgetall('students', (err, res) => {
//   console.log(res);
// });

// list (key-array) 중복 데이터 허용
// rpush: push와 비슷, lpush: unshift와 비슷
// lrange: 가져올 때 사용

// redisClient.rpush('songs', 'Smile', 'Reminder');
// redisClient.lpush('songs', 'Carnival', 'Thunderclouds');
// redisClient.lrange('songs', 0, -1, (err, res) => {
//   console.log(JSON.stringify(res));
// }); // ["Thunderclouds", "Carnival", "Smile", "Reminder"]

// set (key-set) 배열과 비슷하지만 중복 데이터 허용하지 않음(만약 넣는다면 무시됨)

// redisClient.sadd('song', 'Smile', 'Reminder', 'Reminder');
// redisClient.smembers('song', (err, res) => {
//   console.log(res);
// });

// sorted set (key-sorted set)
// list와 비슷한 방법으로 데이터를 가져온다
// 기본 오름차순 정렬

// redisClient.ZADD('score', 100, 'A', 80, 'B', 60, 'C', 40, 'D');
// redisClient.ZREVRANGE('score', 0, -1, (err, res) => {
//   console.log(res); // ["A", "B", "C", "D"]
// });
// redisClient.ZRANGE('score', 0, -1, (err, res) => {
//   console.log(res); // ["D", "C", "B", "A"]
// });

// del
// redisClient.del('name');
// redisClient.get('name', (err, res) => {
//   console.log(res);
// });

// exists
// console.log(redisClient.exists('name'));

// rename
// redisClient.rename('name', 'myName');
// redisClient.get('myName', (err, res) => {
//   console.log(res);
// });
