module.exports = function(app, user){


app.get('/', function(req,res){
    res.render('main')
});

app.get('/insert', function(req,res){
    var user = new user();
    user.name = req.body.name;
    user.school = req.body.school;

    user.save(function(err){
        if(err){
            console.error(err);
            res.json({result : 0});
            return;
        }
        else{
            res.json({result : 1});
        }
    });
});








}
