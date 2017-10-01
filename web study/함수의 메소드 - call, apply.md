# 함수의 메소드 - call, apply

함수를 호출하는 방법에는 함수() <- 이렇게 부르는 방법도 있지만, call과 apply를 사용해서 호출하는 방법도 있다.

```javascript
var example function (a,b,c){
  return a + b + c
};

example(1,2,3);
example.call(null,1,2,3);
example.apply(null,[1,2,3]);
```

call, apply에 null인자를 넣어주는 이유: 	this를 대체하기 위해서이다.

```javascript
var obj = {
string : 'obj1',
callObj : function(){
 console.log(this.string);
 }
};

var obj2 ={
string : 'obj2'
}

obj.callObj();     //obj1
obj.callObj.call(obj2);      //obj2
```



`obj.callObj.call(obj2) `에서 this가 가리키는 것을 obj -> obj2로 바꾸어줬음

callObj는 obj의 메소드인데도 'obj2' 를 불렀음 

왜냐하면 call 메소드는 다른 객체의 함수를 자기꺼인 마냥 사용할 수 있는 능력을 갖고있기 때문임



위의 메소드들은 arguments 들을 조작하고 싶을때 사용한다고 한다. arguments는 함수라면 처음부터 갖고있는 속성인데 함수에 들어온 인자들을 배열의 형식으로 반환한다고 한다. (배열은 아니고 비슷하게 생긴 유사배열이라고 한다.)

```Javascript
function example(){
  console.log(arguments)
};

example(1,'hello', true);     //[1,'hello', true]
```



유사배열은 모양만 배열이지 <u>진짜 배열이 아니라서 배열관련 메소드를 쓰면 오류가 뜨게 된다.</u> 그래서 call 이나 apply를 쓴다고 한다.

```javascript
function example2(){
	console.log(Array.prototype.join.call(arguments));
}

example2(1,'hello',true);      //'1,hello,true'
```





—to be continue