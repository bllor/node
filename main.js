var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);
    console.log("url : "+_url);
    if(_url == '/'){
      _url = '/index.htsml';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + _url);
    console.log('egoing :'+_url);
    response.end(queryData.id);
 
});
app.listen(3000);
