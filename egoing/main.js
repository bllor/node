var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    console.log(__dirname+url)// __dirname: 폴더이름, url: 접속하는 url
    response.end(fs.readFileSync(__dirname + url));//response.end에 들어가는 내용이 사용자에게 전송할 데이터
    
 
});
app.listen(3000);