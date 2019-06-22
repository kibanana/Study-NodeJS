var http = require('http');
var cookie = require('cookie');
http.createServer(function(req, res){

    var cookies = {};
    if(req.headers.cookie !== undefined) {
        cookies = cookie.parse(req.headers.cookie);
    }

    console.log(req.headers.cookie);
    console.log(cookies);
    console.log();

    res.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    }); // 성공(상태코드), 객체형식의 Cookie 

    res.end('Cookie!');
}).listen(3000);