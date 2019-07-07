const   express = require('express'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser');
        path = require('path'),
        cors = require('cors');

// Define app to express

const app = express();

app.use(cors());

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
var artistsRouter = require('./routes/artistsRoute');
var playlistsRouter = require('./routes/playlistsRoute');

var genresRouter = require('./routes/genresRoute');

app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.use('/albums', albumsRouter);
app.use('/artists', artistsRouter);
app.use('/playlists', playlistsRouter);

app.use('/genres', genresRouter);



app.listen(3002);

module.exports = app;


