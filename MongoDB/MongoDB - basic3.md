# MongoDB - basic3

### 데이터 수정 : update()

```
> db.friends.update({"title":"intro"},{$set:{"likes":10}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
//find().pretty()
{
	"_id" : ObjectId("58db8f18fb016ee9b5910524"),
	"title" : "intro",
	"name" : "tang",
	"comments" : [
		{
			"name" : "jieun",
			"message" : "haha tangtang ball!"
		}
	],
	"likes" : 10
}
```



### 제한자 사용하기: $set, $inc - 갱신 제한자

갱신 제한자는 키를 변경, 추가, 제거하고 심지어 배열과 내장 문서를 조작하는 복잡한 갱신연산을 지정하는데 사용되는 특수키다.

```
> db.study.insert({"url":"www.example.com"},{"pageView":51})
WriteResult({ "nInserted" : 1 })
> db.study.update({"url":"www.example.com"},{$inc:{"pageView":1}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.study.find().pretty()
{
	"_id" : ObjectId("58de58f5dcb45c83aec5bc39"),
	"url" : "www.example.com",
	"pageView" : 1
}
```

### $inc제한자

$inc제한자는 이미 존재하는 키의 값을 변경하거나 새롭게 키를 생성하는데 사용한다.

분석, 분위기 또는 투표 등과 같이 자주 변하는 수치값을 갱신하는 데 매우 유용하다. 



### $set 제한자

$set 제한자는 필드의 값을 설정한다. 만약 필드가 존재하지 않으면 해당 필드를 생성한다. 

이 기능은 스키마를 갱신하거나 사용자 정의 키를 추가할 때 편리하게 쓸 수 있다. 



### 데이터 삽입 및 수정 정리

삽입시 insert()와 save()

insert() = _id가 동일한 값을 저장하려 한다면 오류 발생

save() = _id가 동일해도 저장함(수정) 기존에 저장된 데이터 위에 덮어씀



수정시 update()와 save()

update() = 특정 필드만 수정 가능

save() = 필드단위로 수정되지 않고 데이터를 덮어써서 이전 데이터들은 사라지게 된다.



참고http://squll1.tistory.com/67



### 논리 연산자

| Operator |          설명           |
| :------: | :-------------------: |
|   $or    | 조건중 하나라도 true => true |
|   $and   |  모든 조건이 true => true  |
|   $not   | 주어진 조건이 false => true |
|   $nor   |       OR연산자의 반전       |



### 예제1

title값이 introduce이거나 name값이 hedgehog이면 Document 조회 

```
> db.friends.find({$or:[{"title":"introduce"},{"name":"hedgehog"}]})
{ "_id" : ObjectId("58db8f18fb016ee9b5910523"), "title" : "introduce", "name" : "hedgehog", "comments" : [ { "name" : "friendsHedge", "message" : "Hi prettygirl!" } ] }
```



