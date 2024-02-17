import http from "k6/http";

export const options = {
    vus :100, // 가상 유저의 수
    duration : "10s", //테스트 진행 시간
};

export default function () {
    http.get("http://localhost:8000");
}

//가상의 유저 100명이 10초동안 localhost:8000에 동시에 요청을 보낸다는 의미.

