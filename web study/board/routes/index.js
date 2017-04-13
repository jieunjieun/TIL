module.exports = function(app, Book){
    app.get('/api/books', function(req,res){
        var book = new Book();
        book.title = req.body.name;
        book.author = req.body.author;
        book.published_date = new Date(req.body.published_date);

        book.save(function(err){
            if(err){
                console.log(err);
                res.json({result : 0});
                return;
            }
            res.json({result : 1});
        });
    });

    app.get('/api/books/:book_id', function(req,res){
        Book.find(function(err, books){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(books);
        })
    });

    app.get('/api/books/author/:author', function(req,res){
        res.end();
    });

    app.post('/api/books', function(req,res){
        res.end();
    })
    app.post('/api/books/:book_id', function(req,res){
        res.end();
    });



}