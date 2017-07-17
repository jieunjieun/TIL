# State

- 유동적인 데이터이다

- JSX 내부에{this.state.stateName}

- 초깃값 설정을 꼭 해줘야함.

- 생성자에서 this.state = {}으로 설정

- 값을 수정하려면 this.setState({…})

- 렌더링 된 다음에는 this.state =  사용 불가

  =바로 수정하는것이 아닌 리액트 개발자가 지정한 안정적인 프로세스를 통하여 값이 변경되고, 변경된 이후에 자동으로 계속 해줌



```Jsx
class Counter extends React.Component{
constructor(props){ //constructor 메소드의 파라미터는 props이다.
					//여기서 props는 이 카운터 클래스가 만들어질때 전달받을 						//props이다.

  super(props); //상속받은 parent의 생성자 메소드를 먼저 실행함.
 				 //이 메소드 안에서 this.state 라던지 props라던지 접근가능
  this.state = {
	value : 0
  };
   this.handleClick = this.handleClick.bind(this);
} //constructor 에서 binding 해주는게 더 좋음
  
  handleClick(){
    this.setState({
      value : this.state.value + 1
    });
   
  }
  
  render(){
return(
<div>
<h2>{this.state.value}</h2>
  <button onClick = {this.handleClick}>Press me</button>
  </div>  
)}
}

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);
```

