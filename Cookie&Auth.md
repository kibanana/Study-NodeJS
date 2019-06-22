### 개인화
  
  
### Cookie
- 웹 서버, 웹 브라우저가 서로 주고받는 정보
- HTTP 프로토콜에 포함되어 있는 기술

### HTTP Cookie
- 인증
- 개인화
- 방문자의 상태 등을 체크

### Create Cookie 
```javascript
res.writeHead(200, {
   'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
});
```
response header에 쿠키를 저장  
=> 위의 코드를 삭제하고 다시 서버를 실행하면 request header에 쿠키(header value)가 이미 심어져있음

쿠키 삭제 시 chrome devtool-application-Cookie
  
### Read Cookie
```javascript
var cookies = cookie.parse(req.headers.cookie);
console.log(req.headers.cookie);
console.log(cookies);
```
parse에 없는 cookie를 넣으면 오류(undefined) 발생하며 서버 종료

보완
```javascript
if(request.headers.cookie !== undefined) {
  var cookies = cookie.parse(req.headers.cookie);
}
```
