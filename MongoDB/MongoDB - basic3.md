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



