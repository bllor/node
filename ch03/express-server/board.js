/*
익스프레스로 간단한 API 서버 만들기
API(application programming interface)
-프로그램에서 다른 프로그램의 기능을 사용할 수 있게 해주는 일종의 규약

REST API: 자원을 URL에 표현하고 자원을 가져오는 행위를 HTTP 메서드로 표현하는 규칙
1./
-메서드 : get
-게시판 목록을 가져온다.

2./posts
-method : post
-게시판에 글을 씁니다.

3./posts/:id
-method : delete
-게시글 아이디가 id인 글을 삭제합니다.
*/


const express = require("express");
const app = express();
let posts = [];

//req.body를 사용하지 않기 위해서 json미들웨어를 사용한다.
app.use(express.json());

//post 요청시 컨텐트 타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.json(posts);
});

app.post("/posts", (req, res) => {
    const{title, name, text} = req.body;
    posts.push({id: posts.length+1, title, name, text, craetedDt: Date()});
    res.json({title, name, text});

});

app.delete("/posts/:id" , (req, res) => {
    const id = req.params.id; // app.delete에 설정한 path정보에서 id값을 가져옴
    const filteredPosts = posts.filter(post => post.id !== +id); // 글 삭제 로직
    //게시판의 글에서 id이외의 글들만 뽑아서 filteredPosts에 다시 할당한다.
    //+id는 문자열인 id를 숫자형으로 변경한다는 뜻
    const isLengthChanged = posts.length !== filteredPosts.length; // 삭제 확인
    posts = filteredPosts;
    if(isLengthChanged){
        res.json("Ok");
        return;
    }
    res.json("Not Changed")
})

app.listen(3000, () => {
    console.log("Welcome my first Node Board!")
})
