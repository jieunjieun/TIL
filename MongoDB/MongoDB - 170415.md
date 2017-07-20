# MongoDB - 170415



### 모델 만들기

```
var Blog = mongoose.model('Blog', blogSchema);
```



### Mongoose 컬렉션의 이름 지정해주기

```
var mySchema = new Schema({..}, { collection: 'data' });
```



### index

```
var animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true } // field level
});

animalSchema.index({ name: 1, type: -1 }); // schema level
```


