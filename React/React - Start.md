# React - Start

- 페이스북에서 개발한 유저 인터페이스 라이브러리이다.
- 페이스북과 인스타그램의 웹 UI를 개발할 때 사용하려고 만든 자바스크립트 라이브러리다.
- 백본과 앵귤러와 같이 짬뽕해서 웹의 front 부분을 자유자재로 다룰 수 있다고 한다.
- MVC모델에서 V(view)를 위한 라이브러리이다.
- 커스텀 태그(`<h1>, <select>`처럼 미리 지정된 태그외에 나만의 태그를 만들어 웹을 개발하는 방식)를 지원한다.

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



## React.js를 써야하는곳

- 지속해서 데이터가 변화하는 큰 어플리케이션 구축시
- 단순 라우팅 정도만 있는 정적인 웹페이지 만들때



## 장점

- Virtual DOM을 사용하여 어플리케이션의 성능을 향상시킬 수 있다.
- Component의 가독성이 높음.
- 쉬운 유지보수
- 클라이언트, 서버측에서 각각 렌더링 가능함.
- 프레임워크가 아닌 라이브러리 이기 때문에 다른 프레임워크와 같이 사용 가능하다.