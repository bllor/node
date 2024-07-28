/* 
파일 읽기
js.readFile

모듈 : 기본적으로 제공하는 기능들을 그룹으로 묶은 것
*/

var fs = require('fs');
fs.readFile('sample.txt' ,'utf8', function(err,data){
    console.log(data);
})