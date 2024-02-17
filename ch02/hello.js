const http = require("http"); //http모듈을 불러와서 http 변수에 할당 
let count = 0;
const server = http.createServer((req,res) => { //서버 객체 생성 || 서버 인스턴스를 생성하며 인수로 콜백함수인 req, res를 받는다.
    log(count);
    res.statusCode= 200; //결과값 200
    res.setHeader("Content-Type", "text/plain"); //헤더 설정 || http 요청/응답에 대한 부가 정보를 설정하는 곳으로, 
                                                 //콘텐츠 탑입은 어떤 형태의 데이터 인지를 나타낸다. 여기서는 텍스트를 평문으로 받는다.

    res.write("hello\n");
    setTimeout(()=>{
        res.end("Node.js");
    },2000)
});

function log(count){
    console.log((count+=1));
}

server.listen(8000); //8000번 포트로 서버 실행
                     //IP가 생략되어 있을 때는 기본적으로 localhost를 사용한다.

                     