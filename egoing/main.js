var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    
    var _url = request.url;
    var queryData = url.parse(_url, true).query ;
    var title = queryData.id;

    if(request.url == '/'){
      _url = '/index.html';
      title = 'welcome';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
      response.end();
      return;
    }


    
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
      console.log(queryData.id);
      var template= `
      <!doctype html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <ol>
      <li><a href="/?id=html">HTML</a></li>
      <li><a href="/?id=css">CSS</a></li>
      <li><a href="/?id=js">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p>
    ${description}
    </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
    </p>
  </body>
  </html>
  `
  response.end(template);//response.end에 들어가는 내용이 사용자에게 전송할 데이터
    })
    console.log(__dirname+_url)// __dirname: 폴더이름, url: 접속하는 url

 
});
app.listen(3000);