# MongoDB - basic

### DataBase를 생성해보자 : use

JieunBase라는 데이터베이스 생성

```MongoDB
> use JieunBase
switched to db JieunBase
```

### 현재 사용중인 데이터베이스 확인 : db

```
> db
JieunBase
```

### Document 추가해보기 : insert

```
> db.JieunBase.insert({"name":"jieun","school":"dsm"});
WriteResult({ "nInserted" : 1 })
```

### 데이터베이스 리스트 확인 : show dbs

```
> show dbs
JieunBase  0.000GB
admin      0.000GB
local      0.000GB
```

### 데이터베이스 제거 : db.dropDatabase()

```
> use JieunBase
switched to db JieunBase
> db.dropDatabase();
{ "dropped" : "JieunBase", "ok" : 1 }
```

### Collection 생성하기 : db.createCollection()

db.createCollection(name,[options])

1.

```
> use haha             //haha데이터베이스에 friends컬렉션 생성(옵션x)
switched to db haha
> db.createCollection("friends")
{ "ok" : 1 }
```
2.

```
> db.createCollection("sleep",{     //haha데이터베이스에 sleep컬렉션
... capped: true,					//을 옵션과 함께 생성
... autoIndexId: true,
... size: 500,
... max: 100
... })
{
	"note" : "the autoIndexId option is deprecated and will be removed in a future release",
	"ok" : 1
}
```

3.

```
> db.test.insert({"school":"dsm"})			//createCollection()
WriteResult({ "nInserted" : 1 })			//함수 없이 컬렉션 생성

```

### collection 리스트 확인

```
> show collections
Study
friends
sleep
test
```

### collection 제거: db.컬렉션이름.drop()

```
> db.sleep.drop()
true
```

### Document추가: db.컬렉션이름.insert()

```
> db.sleep.insert([
... {"name":"go","school":"dsm"},
... {"name":"U","school":"yego"}
... ]);
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

### 컬렉션의 도큐먼트 리스트 확인: db.collname.find()

```
> db.sleep.find()
{ "_id" : ObjectId("58db8988f04160a787a7436b"), "name" : "go", "school" : "dsm" }
{ "_id" : ObjectId("58db8988f04160a787a7436c"), "name" : "U", "school" : "yego" }
```

### Document 제거: db.collname.remove(criteria, justOne)

```
> db.sleep.remove({"name":"U"})
WriteResult({ "nRemoved" : 1 })
> db.sleep.find()
{ "_id" : ObjectId("58db8988f04160a787a7436b"), "name" : "go", "school" : "dsm" }
```

