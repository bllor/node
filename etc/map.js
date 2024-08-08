class TestService {
    static filter(text) {
        if (text == 'a') {
            return [1, 2, 3];
        } else if (text == 'b') {
            return [4, 5, 6];
        } else {
            return [text];
        }
    }

    static mapTest() {
        let qq = ['a'];

        // mapTest 메서드에서 filter 메서드를 사용하여 각 문자의 시퀀스를 생성
        const modi = qq.map(item => {
            const values = TestService.filter(item).map(num => `^${num}`);
            console.log(typeof values)
            return values.join('|');
        });
/*
modi =qq.map(item => item);
- 배열 qq의 객 요소를 item이라는 변수에 담아서 출력한다는 뜻
const values = TestService.filter(item).map(num => `^${num}`);
-filter메서드에 qq의 요소를 넣은 후 출력된 배열의 각 요소를 num으로 저장한 뒤 요소 앞에 ^를 붙인 후 배열로 values에 저장
values.join('|')
-배열들을 합치는데 구분자를|로 하여 합침
*/

        console.log(typeof modi);
    }
}

// mapTest 메서드를 호출하여 실행
TestService.mapTest();