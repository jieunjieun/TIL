## MongoDB소개

* NoSQL

  RDBMS의 한계를 극복하기 위해 만들어진 형태의 데이터 저장소

  Not Only SQL

  ​

* Document

  RDMS의 레코드와 비슷한 개념

  Key-value pair으로 이루어져 있음

  ```
  {
    "username":"jieun",
    "age":"18"
    }
  ```

  ​

* Collection

  Document의 그룹

  RDMS의 과 비슷한 개념


|    RDBMS     |      MongoDB       |
| :----------: | :----------------: |
|    TABLE     |     COLLECTION     |
|     ROW      |      DOCUMENT      |
|    COLUMN    |       FIELD        |
| PRIMARY KEY  |  OBJECT_ID FIELD   |
| RELATIONSHIP | EMBEDDED & LINKING |



## MongoDB 설치 - osx

1. 다운로드

https://www.mongodb.com/download-center

```terminal
$ cd ~/Download
$ tar xzf mongodb-osx-x86_64_3.4.3.tgz
$ sudo mv mongodb-osz-x86_64-3.4.3 /usr/local/mongodb
```

2. 폴더 설정

   ```
   $ sudo mkdir -p /data/db
   $ whoami
   username
   $ sudo chown username /data/db
   ```

3. PATH 추가

   ```
   $ cd ~
   $ pwd/Users/username
   $ touch .bash_profile
   $ vim .bash_profile

   export MONGO_PATH=/usr/local/mongodb
   export PATH=$PATH:$MONGO_PATH/bin
   ```

   +터미널 재시작

   ```
   $ mongo -version
   MongoDB shell version: 3.4.3
   ```

4. MongoDB 시작

   ```
   $ mongod
   ```

   ​

5. Mongo

   터미널 하나 더 켜서

   ```
   $ mongo
   ```

   ​