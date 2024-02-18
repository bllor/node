const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("익스프레스로 라우터 리팩터링 하기")
})


//get 메서드의 라우팅 설정
app.get("/", (_, res) => res.end("HOME"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res){
    const user = url.parse(req.url, true).query;

    res.json(`[user] name : ${user.name} , age : ${user.age}`);

}
//feed(_,res)에서 _부분을 빼는 것이 원칙이지만, 함수 인터페이스 구조상 넣을 수 밖에 없을 때
//입력하는 관례
function feed(_,res){
    res.json(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>`);
}

