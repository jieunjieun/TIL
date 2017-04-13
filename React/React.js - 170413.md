# React.js - 170413

## 1. ES6란?

- ECMAScript의 약자
- 브라우저에 사용되는 자바스크립트 부분을 표준으로 정의함
- 페이스북의 React.js 같은 최신 JS 프레임워크들은 앞으로 ES6기반으로 개발을 많이 할 것같아서 요즘 입에 오르락내리락 한다.



## 2. ES6문법 - let

```javascript
var a = 1;

function Test1(){
  console.log(a);
  
  var b = 2;
  it(true) {
    var c = 3;
    console.log(b);
  }
  console.log(c);
}

Test1();   // 1 2 3

```

변수의 범위가 function()  이기 때문에 이 예제에서는 Test1()까지가 변수의 범위임



```Javascript
let a = 1;
function Test1(){
  console.log(a);
  
  let b = 2;
  if(true){
    let c = 3;
    console.log(b);
  }
  console.log(c);
}

Test1(); // 1 2 undefined
```

변수 c는 if문 안에서만 통용되도록 설정됨.



```Javascript
var a = 1;
var a = 2;

console.log(a);  // 2

let b = 1;
let b = 2;

console.log(b);   // Type Error
```



## ES6문법 - Const

```javascript
<p>var pi = 3.14;
var r = 4;

console.log(r * r * pi);  //50.24

pi = 2.14;
console.log(r * r * pi);  //34.24

const pi2 = 3.14;
console.log(r * r* pi2);   //50.24

pi2 = 2.14;
console.log(r * r* pi2);    //error
</p>
```





## 배열 연산자

```Javascript
function Test1(a,b){
  return a + b;
}

var data = [1,2];

console.log(Test1.apply(null,...data));   //3
```

… 연산자는 변수안에 있는 모든 데이터들을 다 때려박는 기능을 갖고있음



```javaScript
let data1 = [1, 2, 3];
let data2 = [4, 5, 6];
let data3 = [...data1, ...data2, 7];

console.log(data3);         //1,2,3,4,5,6,7

data1.push(...data2);
console.log(data1);   //1,2,3,4,5,6

function add (a, b, c, d, e, f){
  return a + b + c + d + e + f;
}

console.log(add(...data1, ...data2));  //21
```



```javascript
let array = [1,2,3];
let[a, , b] = array;
console.log(a,b); //1,3

let array2 = [1,2,3];
let [c, ...d] = array2;

console.log(c);  //1
console.log(d);  //2,3

let array3 = [1,2,3,4];
let[e, , ...f] = array3;
console.log(e);  //1
console.log(f);  //3,4
```



```
let array = [1,2];
let [a, b, c = 3] = array;

console.log(a,b,c);  //1,2,3

function test1(a = 1, b = 2, c = 3){
  return a + b + c;
}
console.log(test1());  //6
```



## ES6문법 - arrow function

```javascript
let add = function(a,b){
  return a + b
}
```

를 ES6에서는 이렇게 바꿀 수 있다.

```Javascript
let add = (a,b) => a + b
```

또

```Javascript
let add = function(a){
  console.log(a)
}
```

를 arrow function의 형태로 바꾸면

```javascript
let add = (a) => {
  console.log(a)
}
```



## ES6문법 - Object Merge

```javascript
Object.assign(
{},
{Hello : 'jieun'},
{Hi : "Oh My God"}
);

//{
//Hello : 'jieun'
//Hi : 'Oh My God'
//}
```

Object.assign을 쓰게 되면 위 예제에서는 {}의 빈배열 안에 나머지 두 오브젝트들을 넣어준다. 

즉 그냥 합쳐주는 것이다.



## 예제

```javascript
//배열인자 예제

const array = (...elements) =>{
  return elements;
};

array (1,2,3) //[1,2,3]

const log = (...args) =>{
  console.log(...args);
}
log('hello','Seoul'); //hello Seoul
```

```javascript
//배열식의 변수 선언

const lang = ['javascript','Ruby','Haskell'];
const [js, ...rest] = langs;

js === 'javascript'
rest[0] === 'Ruby';
rest[1] === 'Haskell';

const head = ([x]) => x;

head([1,2,3]) === 1;
```



