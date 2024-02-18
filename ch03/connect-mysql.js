const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

//JSON 및 URL 인코딩 처리하기 위한 미들웨어 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//mysql 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: "dongil",
    password: "1234",
    database: "test"
})

//mysql 연결
connection.connect((err) => {
    if(err){
        console.error("mysql 연결실패 :",err.stack);
        return
    }
    console.log('mysql 연결 ID :', connection.threadId);
})

//create
//ex
//curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 25}' http://localhost:3000/users
app.post('/users', (req, res) => {
    const {id ,name, age} = req.body;
    const query = 'insert into user values ( ?, ?, ?)';
    connection.query(query, [id ,name ,age], (err, results) => {
        if(err) throw err;
        res.json({id, name, age});

        connection.end();
        });
});

//read
// ex : curl -X GET http://localhost:3000/users/list
app.get('/users/list', (req,res) => {
    const query = 'select * from user';
    connection.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

//update
app.put('/users/:id' , (req, res) => {
    const id = req.params.id;
    const {name, age} = req.body
    const query = 'update user set name =? , age=? where id=? ';
    connection.query(query, [name,age,id ], (err,reults) => {
        if(err) throw err;
        res.json({id, name, age})
    });

});

//delete
// ex : curl -X DELETE http://localhost:3000/user/a101
app.delete('/user/:id', (req,res) => {
    const id = req.params.id;
    const query = 'delete from user where id =?';
    connection.query(query, [id], (err) => {
        if(err) throw err;
        res.json({id: id, message: 'User deleted Successfully!!'});
    });
});




app.listen(port, () => {
    console.log('서버가 http://localhost:${port}에서 실행 중입니다.');
});