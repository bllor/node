// 문자열을 표현할 때는 '' 또는 ""로 감싸면 된다.
// 문자열 사이에 +가 있으면 문자열끼리 연결해준다.

//문자열의 개수 세기
let text = 'qewrqewrfdsfa qwerdsfa';
console.log(text.length)


//Template Literal
let name ="dongil"

let letter = "안녕하세요 "+name+" 님 \n\환영합니다"
//string을 이용하여 띄워쓰기를 하거나 변수를 추가하려면 다음과 같이 조금 복잡하게 사용한다.
console.log(letter)

let letter2 = `
안녕하세요 ${name}님 
환영합니다
`
console.log(letter2)
//template literal을 사용하면 조금 더 편하게 문자열을 사용할 수 있다.