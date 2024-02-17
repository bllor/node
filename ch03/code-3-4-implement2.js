//동적 할당 - url에 user의 정보를 받아온 다음 화면에 보여준다.

const http = require("http");
const url = require("url");

http
    .createServer((req, res) => {
        const path = url.parse(req.url, true).pathname;
        res.setHeader("Content-Type", "text/html");

        if(path ==="/user"){
            user(req,res)
        }else if(path ==="/feed"){
            feed(req,res)
        }else{
            notFound(req,res)
        }
    })
    .listen("3000", () => console.log("create refactoring router"))

const user = (req,res) => {
    const userInfo = url.parse(req.url, true).query;
    res.end(`[user]name : ${userInfo.name}, age : ${userInfo.age}`);
}

const feed = (req, res) =>{
    res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>`);
};

const notFound = (req,res) => {
    res.statusCode = 404;
    res.end("404 page not found");
}