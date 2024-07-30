/*
boolean: 참(true)과 거짓(false)을 나타냄
true , false는 변수 명으로 사용할 수 없다.

비교연산자
a == b -->좌항과 우항이 같을 경우 true, 아닐 경우 false를 출력한다.
a === b --> === 3개를 쓸 경우 정확히 일치할 때만 true, 아닐 경우 false를 출력한다
ex)
1)console.log(1 == 1)
좌항과 우항이 같으므로 true가 출력된다.
2)console.log(1 == '1')
좌항은 int, 우항은 string으로 데이터 타입이 다르지만 글자가 같으므로 true를 출력한다.
3)console.log(1 === '1')
===를 할 경우 글자 및 데이터 타입도 같이 비교를 하는데, 좌항과 우항의 데이터 타입이 다르므로 false를 출력한다.
*/

console.log(1 == 1)
console.log(1 == '1')
console.log(1 === '1')
