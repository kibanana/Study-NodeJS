var http = require('http');
http.createServer(function(req, res){

    if(request.headers.cookie !== undefined) {
        var cookies = cookie.parse(req.headers.cookie);
    }
    
    console.log(req.headers.cookie);
    console.log(cookies);

    res.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco', 'tasty_cookie=strawberry']
    }); // 성공(상태코드), 객체형식의 Cookie 

    res.end('Cookie!');
}).listen(3000);