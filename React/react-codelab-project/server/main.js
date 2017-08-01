import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import session from 'express-session';

// 몽고 연결
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {console.log('connected to mongodb server');});
mongoose.connect('mongodb://localhost/codelab');

app.use(session({
    secret : 'Codelab1$1$234',
    resave : false,
    saveUninitialized : true
}));

app.use(morgan('dev'));
app.use(bodyParser.json());

const devPort = 4000;

const app = express();
const port = 3000;

app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/hello', (req,res) => {
    return res.send('hello world');
});

app.listen(port, () => {
    console.log('express is listening on port');
});

if(process.env.NODE_ENV == 'development'){
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    Server.listen(
        devPort, () =>{
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );


}

