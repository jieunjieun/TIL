# Prop

- 컴포넌트 속성으로 정의
- 컴포넌트 내에서 {this.props.000} 으로 참조해서 사용 가능
- 객체, 함수 등 어떤 타입이든 지정 가능함.



## Javascript 로 간단하게 component 지정하기

```javascript
function welcome(props){
  return <h1>Hello {props.name}</h1>;
}
```

이 함수는 리액트 컴포넌트라고 할 수 있다. 왜냐하면 단일 props 객체를 매개변수로 받고, react component로 리턴해준다. 우리는 그런 컴포넌트들을 "functional" 이라고 부른다. 



## ES6 class 로 component 지정하기

```javascript
class Welcome extends React.Component{
  render(){
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```