# MongoDB - basic5

### Index?

Index란 데이터 쿼리를 효율적으로 할 수 있게 해줌.Index가 없으면 데이터베이스에 있는 데이터를 찾기 위해서 컬렉션의 데이터들을 일일이 하나하나씩 조회해야하는 불편함이 있음. 자료가 적으면 몰라도 자료가 많아지면 자료 찾는데 걸리는 시간이 많이듬.



Document에 index를 걸게 되면 내가 설정한 데이터의 키 값으로 B-Tree라는 것을 만듬.(포인터 값들로 이루어짐) 그리고 그 트리를  통해 데이터를 효율적으로 찾아감.



### Index의 종류

1. Non-Unique Index

   가장 대표적인 B-Tree Index

   Single-key Index, Compond-key Index 가능

   ​	Single-key Index = 단일 field로 구성된 인덱스

   ​	Compound-key Index = 여러개의 field로 구성된 인덱스

   `db.Study.createIndex({field : 1}) //Study는 Collection임 `



2. Unique Index

   Index의 Field가 유일한 속성 값을 가진 Index

   `db.Study.createIndex({field : 1}, {unique : true})`



3. Sparse Index

   대부분의 Field값이 Null이고 드물게 Data를 가지고 있는 경우 효율적인 Index

   `db.Study.createIndex({field : 1}, {sparse : true})`



4. Background Index

   처음부터 생성하지 않고, System 자원이 충분할 때 생성 작업을 수행하는 Index

   `db.Study.createIndex({field : 1}, {background : true})`



5. Covered Index

   Index만으로 Data를 검색하여 Document 추출이 가능한 Index

   특별히 따로 생성하는 방법은 없고 Index내의 Field로만 찾을 경우 수행됨

   == RDBMS 의 Fast Index Scan



6. GeoMetry Index

   직선, 곡선,  다각형 등의 기하학 구조에서 사용되는 2D Index - B-Tree의 구조를 갖지 않음



7. GeoSpartial Index

   좌표로 구성된 2D Index

   [http://docs.mongodb.org/manual/applications/geospatial-indexes/]



8. Multikey Index

   Array Field에 대한 Index

   일반 Index와 정의하는 방법은 같지만, 해당 field가 배열인 경우 Multikey Index로 생성됨



9. Text Index

   Document 내의 String으로 된 내용에서의 검색을 편하게 해주는 Index

   `db.Study.createIndex({comments : "text"})`



10. Hashed Index

    Field값을 Hash로 처리한 인덱스. Equal 연산은 가능. Range 연산은 지원X , Multikey 적용X

    `db.Study.createIndex({field : "hashed"})`