const express  = require('express'); // express 라이브러리를 참고해주세요
const app = express(); // 익스프레스를 이용한 객체를 만들어주세요

app.listen(3000, function(){
    console.log('listening on 3000')
}); // 서버를 열기 위한 세팅
//8080포트로 만들고, function 안에는 서버를 띄운뒤 실행할 동작을 코드로 입력

//누군가가 /pet으로 방분하면 pet 관련된 안내문을 띄우자.

app.get('/pet',function(req, res){
    res.send('Hi pet shop');
})

app.get('/beauty',function(req,res){
    res.send('뷰티샾임');
})

// 서버를 재시작하는 것을 자동으로 해주는 라이브러리 nodemon

//html 파일 보내기


app.get('/', function(req,res){
    res.sendFile(__dirname+'/index.html')
});// 경로'/'는 처음 서버에 접속했을 때 홈페이지를 보여준다.