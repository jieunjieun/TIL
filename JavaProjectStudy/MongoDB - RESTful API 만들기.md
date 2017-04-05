# MongoDB - RESTful API 만들기

먼저 프로젝트 터미널로 프로젝트 파일로 온다음

1. 프로젝트 생성한다.

   `$npm init`

2. 패키지를 설치한다.

   `$npm install --save express mongoose body-parser`

   를 치면 패키지 설치가 되고, package.json파일에 패키지 리스트 추가됨.



## MongoDB 서버 연결

```MongoDB
var mongoose = require('mongoose');

//어쩌구 저쩌구

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});
 
mongoose.connect('mongodb://localhost/mongodb_tutorial');
```

