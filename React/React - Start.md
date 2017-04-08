# React - Start

- 페이스북에서 개발한 유저 인터페이스 라이브러리이다.
- 페이스북과 인스타그램의 웹 UI를 개발할 때 사용하려고 만든 자바스크립트 라이브러리다.
- 백본과 앵귤러와 같이 짬뽕해서 웹의 front 부분을 자유자재로 다룰 수 있다고 한다.
- MVC(Model View Controller)모델에서 V(view)를 위한 라이브러리이다.
- 단방향 데이터 흐름
- JSX = JavaScript XML
  - Ex) `<div> <h1>hi</h1> </div>`
- 동형 자바스크립트
  - 클라이언트와 서버가 같은 코드를 공유하는것. 
  - 반복 작업 제거 
  - 사용자 경험 향상
  - 검색 엔진 최적화
- 커스텀 태그(`<h1>, <select>`처럼 미리 지정된 태그외에 나만의 태그를 만들어 웹을 개발하는 방식)를 지원한다.(밑 참고)

```React
var CheckLink = React.createClass({
render : function(){
//codecodecode
}
});

React.render(
<CheckLink href = "/checked.html">
Click here!
</CheckLink>,
document.getElementById('example');
```



- Virtual DOM을 지원한다.
  - DOM이란 Document Object Model의 약자로, 객체를 통하여 문서를 표현하는 방법. html이나 xml로 작성됨. 웹 브라우저는 이 DOM을 확용하여 javascript나 css를 적용한다. 
  - 브라우저에 의존적이지 않기 때문에 일관성있다. 
  - 순수 JS만으로 구현하기 때문에 테스트하기 쉽다.
    - 페이스북 같이 자료가 많은 곳에 DOM을 접근하여 변화를 주면 느려진다?
      - DOM자체는 빠른데 브라우저 단에서 DOM에 변화를 주면 브라우저가 CSS를 다시 연산 하고 레이아웃 구성하느라 시간이 허비되는것임. 이렇게 웹 페이지에서 색상변경과 같은 레이아웃에 관계없는 것들을 처리하는것을 repaint라고 한다. 레이아웃을 다시 구성하는것은 reflow라고 함. 

```react
var style = document.body.style;

style.padding = "20px"; //reflow, repaint
style.border = "10px solid red"; //reflow, repaint
style.color = "blue"; //repaint
style.color = backgroundColor = "#ffa"; //repaint
style.fontSize = "1em"; //reflow, repaint

document.body.appendChild(document.createTextNode('hello world'));
```



Virtual DOM 사용하면 실제 DOM에 접근하여 조작하긴 하지만 이를 또 추상화를 시켜서 만든 자바스크립트 객체를 구성해서 사용함. 쉽게 말해 DOM의 사본이라고 봐도 됨.



## 실제 DOM을 업데이트 할때 밟는 3가지 절차

1. 데이터가 업데이트되면, 전체 UI를 Virtual DOM에 rerendering 함

2. 이전 Virtual DOM에 있던 내용과 현재의 내용 비교

3. 바뀐 부분만 실제 DOM에 적용

   ​



## React.js를 써야하는곳

- 지속해서 데이터가 변화하는 큰 어플리케이션 구축시

- 단순 라우팅 정도만 있는 정적인 웹페이지 만들때

  ​



## 장점

- Virtual DOM을 사용하여 어플리케이션의 성능을 향상시킬 수 있다.
- Component의 가독성이 높음.
  - Component = 재사용 가능한 UI구성 단위로, 컴포넌트끼리 결합, 포함관계를 갖고있다. 
  - 데스크톱/ 모바일 네이티브앱의 개발 방식이다.
- 쉬운 유지보수
- 클라이언트, 서버측에서 각각 렌더링 가능함.
- 프레임워크가 아닌 라이브러리 이기 때문에 다른 프레임워크와 같이 사용 가능하다.



## 단점

- 러닝 커브가 존재하여 초보자들이 접하기 어렵다.
- 다른 프레임워크를 같이 쓰려면 부가적인 작업들이 필요하다.
- angular.js 처럼 router, model 등 frontend full 프레임워크를 제공하지 않아서 다른 프레임워크와의 조합이 꼭 필요하다.

## React Family

- React Native

  - 모바일의 네이티브 UI를 조작할 수 있다.

- React Canvas

  DOM대신 Canvas에 표현