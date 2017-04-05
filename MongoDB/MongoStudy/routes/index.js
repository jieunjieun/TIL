// module.exports = function(app, Book){
    
//     app.get('/api/books', function(req,res){
//         res.end();
//     });

//     app.get('/api/books/:book_id', function(req,res){
//         res.end();
//     });

//     app.get('/api/books/author/:author', function(req,res){
//         res.end();
//     });

//     app.post('/api/books', function(req,res){
//         var book = new Book();
//         book.title = req.body.name;
//         book.author = req.body.author;
//         book.published_date = new Date(req.body.published_date);
        
//         book.save(function(err){
//             if(err){
//                 console.error(err);
//                 res.json({result:0});
//                 return;
//             }
//             res.json({result:1});
//         });
// });

//     app.put('/api/books/:book_id', function(req,res){
//         res.end();
//     });

//     app.delete('/api/books/:book_id', function(req,res){
//         res.end();
//     });

    
// }
// routes/index.js
 
module.exports = function(app, Book)
{
    // GET ALL BOOKS
    app.get('/api/books', function(req,res){
        res.end();
    });
 
    // GET SINGLE BOOK
    app.get('/api/books/:book_id', function(req, res){
        res.end();
    });
 
    // GET BOOK BY AUTHOR
    app.get('/api/books/author/:author', function(req, res){
        res.end();
    });
 
    // CREATE BOOK
   app.post('/api/books', function(req, res){
    var book = new Book({
        
    });
    book.title = req.body.name;
    book.author = req.body.author;
    book.published_date = req.body.published_date;
 
    book.save(function(err){
        if(err){
            console.error(err);
            return res.json({result: 0});
        }
 
        res.json({result: 1});
 
    });
});

 
    // UPDATE THE BOOK
    app.put('/api/books/:book_id', function(req, res){
        res.end();
    });
 
    // DELETE BOOK
    app.delete('/api/books/:book_id', function(req, res){
        res.end();
    });
 
}
