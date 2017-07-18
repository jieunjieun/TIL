# List and Keys

1. 자바스크립트에서 list를 사용하는 법

   ```javascript
   const numbers = [1,2,3,4,5];
   const doubled = numbers.map((numbers) => numbers * 2);
   console.log(doubled)
   ```

   출력결과 : `[2,4,6,8,10]`

   ​

## js 에서 의 map = arr.map(callback,[thisArg])

callback : 새로운 배열의 요소를 생성하는 함수로서, 세가지 인수를 갖는다.

​	currentvalue : 현재 처리되고 있는 요소

​	index : 현재 처리되고 있는 요소

 	array : 메소드가 불려진 배열

thisArg : (옵션) callback 함수 내부에서 사용할 this값 설정



## 다수의 컴포넌트 렌더링하기

```jsx
const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) =>
<li>{number}</li>
);
```

```jsx
ReactDOM.render(
<ul>{listItems}</ul>,
document.getElementById('root')
);
```



## 간단한 list 컴포넌트 만들기

컴포넌트 안에 리스트를 넣어보기

```jsx
function NumberList(props){
const numbers = props.numbers;
const listItems = numbers.map((number) =>
<li key = {number.toString()}>
  {number}
</li>
);

return(
<ul>{listItems}</ul>
);
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
<NumberList numbers = {numbers}/>,
  document.getElementById('root')
  );
```



## Key

키는 리액트의 각각의 아이템들이 바뀌거나 , 추가되거나 삭제된것을 알수있게 해주는 정보이다.

키는 element 안에 배열안에 넣어준다.

```jsx
const numbers = props.numbers;
const listItems = numbers.map((number) =>
<li key = {number.toString()}>
  {number}
</li>
);
```

키를 고르는 가장 좋은 방법은 string 을 쓰는 것이다. 대부분 데이터들의 key에  id를 쓴다



```jsx
const todoItems = todos.map((todo) =>
<li key={todo.id}>{todo.text}</li>
)
```

만약에 렌더링할 아이템에 안정된 id 를 갖고있지 않다면 item index를 써야한다.  하지만 index를 쓰는 방법은 추천하지 않는다고한다.

```jsx
const todoItems = todos.map((todo, index) =>
<li key = {index}>
{todo.text}
</li>
);
```

