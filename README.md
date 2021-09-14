# momentum
바닐라 JS로 크롬 앱 만들기

브라우저는 HTML을 열고(실행), HTML은 CSS와 자바스크립트를 가져온다.

JavaScript는 이미 HTML에 연결되어 있다.
JavaScript는 HTML에 접근하고 읽을 수 있게 설정되어 있다.
JavaScript는 HTML을 읽어올 뿐만 아니라, HTML을 변경할 수도 있다.

document가 모든것들의 시작점
document는 우리의 web site를 의미

html에 이벤트 추가하는 방법
`title.addEventListener('click', handleClick);`
`title.onclick = handleClick;`

#### 이벤트 추가/삭제
더욱 선호하는 방법은 `.addEventListener()`
왜냐하면 'removeEventListener()'로 이벤트를 제거할 수 있다.

#### magic 변수
raw value: 개발자가 스스로 만든 magic 변수
문제점: 오타를 때문에 error 요인이 될 수 있다.
해결: 상수 처리

#### className vs classList
기존에 가지고 있던 className을 잃어버리기 때문에 JavaScript에서는 className을 변경하지 않는다.
해결: classList 사용

#### toggle
classList에 해당 클래스명이 존재하는지 확인해서 있으면 제거해주고 없으면 추가해준다.

```
const clickedClass = 'clicked';
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
```

```
// 위 코드와 동일함
h1.className.toggle('clicked');
```

