//라우팅 : URL 경로에 따라서 다른 응답을 주는 것
//현재 localhost:3000/user, localhost:3000/feed가 있다고 가정하고 진행한다.

const http = require("http");
const url = require("url"); // url 모듈을 생성하고 url 변수에 할당한다.

http
    .createServer((req,res) => {
        const path = url.parse(req.url, true).pathname; // 요청 받은 url에서 pathname을 얻어낸다.
        res.setHeader("Content-Type", "text/html");

        if(path === "/user"){ // localhost:8000/user의 주소로 호출이 올 경우
            res.end("[user] name : andy, age :30"); //응답값
        }else if(path === "/feed"){// localhost:8000/feed의 주소로 호출이 올 경우
            res.end(`<ul>
            <li>picture1</li>
            <li>picture2</li>
            <li>picture3</li>
            </ul>`);
        }else {
            res.statusCode = 404;
            res.end("404 page not found");
        }
    }).listen("3000", () => console.log("create router."));