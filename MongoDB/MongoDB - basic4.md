# MongoDB - basic4

### 정규식 : $regex

```
{<필드> : {$regex: /pattern/, $option : '<option>'}}
{<필드> : {$regex: 'pattern', $option : '<option>'}}
{<필드> : {$regex: /pattern/ <options>}}
```



* MongoDB에서 정규 표현식을 사용하여 /pattern/ 지정 가능

```
{<필드> : /pattern/ <oprtions>}
```



### Options

| Option | Description            | Syntax Restrictions          |
| ------ | ---------------------- | ---------------------------- |
| i      | 대/소문자 구분없이 수행함         |                              |
| m      | 앵커(^,$) 등이 있으면 개행을 무력화 |                              |
| x      | 정규식에 공백문자(스페이스) 문자를 무시 | $regex, $options 구문 같이 사용해야됨 |
| s      | .(도트 문자) 사용할때 개행 포함    | $regex, $options 구문 같이 사용해야됨 |



### 정규식 예1:

```
>db.friends.find({name:{$regex:"e",$options:"$i"}}).pretty()
// friends 콜렉션의 name 도큐먼트에 "e"를 포함한 문서를 보여주는 코드
```



### 정규식 예2:

```
db.friends.find({"schoolnum": /schoolnum0[8-9]/}).pretty()
// friends 콜렉션에서 정규식 /schoolnum0[8-9]/에 일치하는 데이터 조회
```



### Projection

find()의 두번째 매개변수인 Projection은 자신이 보고싶은 필드를 지정해서 조회할 수 있는 기능을 갖고있음

```
> db.friends.find({},{"_id":false, "name":true, "school":true})
{ "name" : "jieun", "school" : "dsm" }
{ "name" : "taeim", "school" : "dsm" }
```



### 데이터 정렬하기 : find().sort()

```
{Key : Value} 라고 했을때, value에 1이오면 오름차순, -1이 오면 내림차순
```

```
> db.friends.find().sort({"likes":1}).pretty()
{
	"_id" : ObjectId("58de0eb537d63b5f7fc7bb79"),
	"name" : "jieun",
	"title" : "where is my data",
	"likes" : 100,
	"school" : "dsm",
	"age" : 18,
	"schoolnum" : "schoolnum09",
	"comments" : [ ]
}
{
	"_id" : ObjectId("58de37ea37d63b5f7fc7bb7a"),
	"name" : "taeim",
	"title" : "hahaha",
	"likes" : 200,
	"school" : "dsm",
	"age" : 18,
	"schoolnum" : "schoolnum08"
}
{
	"_id" : ObjectId("58de5ddcdcb45c83aec5bc3a"),
	"name" : "sumin",
	"title" : "hedgehog",
	"likes" : 400,
	"school" : "dsm",
	"age" : 18,
	"schoolnum" : "schoolnum01",
	"comments" : [ ]
}
> 

```



### 데이터 출력 갯수 제한하기 : find().limit()

```
> db.friends.find().limit(1).pretty()  //출력갯수 1개로 제한
{
	"_id" : ObjectId("58de0eb537d63b5f7fc7bb79"),
	"name" : "jieun",
	"title" : "where is my data",
	"likes" : 100,
	"school" : "dsm",
	"age" : 18,
	"schoolnum" : "schoolnum09",
	"comments" : [ ]
}
```

