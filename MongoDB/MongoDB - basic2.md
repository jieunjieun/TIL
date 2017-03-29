# MongoDB - Basic2

### Data 만들기

```
> db.friends.insert([
... {
... "title":"introduce",
... "name":"hedgehog",
... "comments":[
... {
... "name":"friendsHedge",
... "message":"Hi prettygirl!"
... }
... ]
... },
... {
... "title":"intro",
... "name":"tang",
... "comments":[
... {
... "name":"jieun",
... "message":"haha tangtang ball!"
... }
... ]
... }
... ])
BulkWriteResult({
	"writeErrors" : [ ],
	"writeConcernErrors" : [ ],
	"nInserted" : 2,
	"nUpserted" : 0,
	"nMatched" : 0,
	"nModified" : 0,
	"nRemoved" : 0,
	"upserted" : [ ]
})

```



### document 조회 : db.collname.find()

```
> db.friends.find()
{ "_id" : ObjectId("58db8f18fb016ee9b5910523"), "title" : "introduce", "name" : "hedgehog", "comments" : [ { "name" : "friendsHedge", "message" : "Hi prettygirl!" } ] }
{ "_id" : ObjectId("58db8f18fb016ee9b5910524"), "title" : "intro", "name" : "tang", "comments" : [ { "name" : "jieun", "message" : "haha tangtang ball!" } ] }
```



### document 이쁘게 조회: db.collname.find().pretty()

```
> db.friends.find().pretty()
{
	"_id" : ObjectId("58db8f18fb016ee9b5910523"),
	"title" : "introduce",
	"name" : "hedgehog",
	"comments" : [
		{
			"name" : "friendsHedge",
			"message" : "Hi prettygirl!"
		}
	]
}
{
	"_id" : ObjectId("58db8f18fb016ee9b5910524"),
	"title" : "intro",
	"name" : "tang",
	"comments" : [
		{
			"name" : "jieun",
			"message" : "haha tangtang ball!"
		}
	]
} 
```

### name값이 hedgehog인 값 찾기

```
> db.friends.find({"name":"hedgehog"}).pretty()
{
	"_id" : ObjectId("58db8f18fb016ee9b5910523"),
	"title" : "introduce",
	"name" : "hedgehog",
	"comments" : [
		{
			"name" : "friendsHedge",
			"message" : "Hi prettygirl!"
		}
	]
}
```



### 비교 연산자

| operator |           설명           |
| :------: | :--------------------: |
|   $eq    |         equals         |
|   $gt    |      greater than      |
|   $gte   | greater than or equals |
|   $lt    |       less than        |
|   $lte   |  less than or equals   |
|   $in    |       배열안에 속하는 값       |
|   $nin   |     배열안에 속하지 않는 값      |



### 연산자를 이용하여 값 찾기

```
> db.friends.find({"likes":{$lte:10}}).pretty()		//likes값이 10이하인 document조회
{
	"_id" : ObjectId("58db9317fb016ee9b5910525"),
	"title" : "omg..",
	"content" : "contentcontent",
	"likes" : 4
}
```

```
> db.friends.find({"likes":{$gt:2,$lt:10}}).pretty()		//likes값이 2이상 10이하
{
	"_id" : ObjectId("58db9317fb016ee9b5910525"),
	"title" : "omg..",
	"content" : "contentcontent",
	"likes" : 4
}
```

