const   express = require('express'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser');
        path = require('path');

// Define app to express

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes

var signupRouter = require('./routes/signupRoute');
var signinRouter = require('./routes/signinRoute');

var albumsRouter = require('./routes/albumsRoute');


app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.use('/albums', albumsRouter);



app.listen(3002);

module.exports = app;


