# React - 시작

- 페이스북에서 개발한 유저 인터페이스 라이브러리이다.

-  페이스북과 인스타그램의 웹 UI를 개발할 때 사용하려고 만든 자바스크립트 라이브러리다.

-  또한 백본과 앵귤러와 같이 짬뽕해서 웹의 front 부분을 자유자재로 다룰 수 있다고 한다. 

- MVC모델에서 V(view)를 위한 라이브러리이다.

- Virtual DOM이라는 기술을 사용하여 페이지의 빠른 변경이 가능하다.

- 커스텀 태그를 지원한다.

  - 커스텀 태그란 <h1>,<select>처럼 미리 지정된 태그 외에 나만의 태그를 만들어 웹을 개발하는 방식이다.

    ```react
    var CheckLink = React.createClass({
      render : function(){
        ...코드코드
      }
    });

    React.render(
    <CheckLink href = "/checked.html">
    Click here!
    </CheckLink>,
    document.getElementById('example')
    );
    ```

- Virtual DOM을 지원한다.

  - DOM이란 Document Object Model의 약자로, 객체를 통하여 문서를 표현하는 방법. html이나 xml로 작성됨. 웹 브라우저는 이 DOM을 확용하여 javascript나 css를 적용한다. 

    -   페이스북 같이 자료가 많은 곳에 DOM을 접근하여 변화를 주면 느려진다?

        ​	DOM자체는 빠른데 브라우저 단에서 DOM에 변화를 주면 브라우저가 CSS를 다시 연산 하고 레이아웃 구성하느라 시간이 허비되는것임. 이렇게 웹 페이지에서 색상변경과 같은 레이아웃에 관계없는 것들을 처리하는것을 repaint라고 한다. 레이아웃을 다시 구성하는것은 reflow라고 함. 