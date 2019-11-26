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

// set (key-set) 배열과 비슷하지만 중복 데이터 허용하지 않음
redisClient.sadd('song', 'Smile', 'Reminder'); // , 'Reminder');
redisClient.smembers('song', (err, res) => {
  console.log(res);
});
