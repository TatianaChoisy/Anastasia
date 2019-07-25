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
var tracksAlbumsRouter = require('./routes/tracksAlbumsRoute');
var tracksPlaylistsRouter = require('./routes/tracksPlaylistsRoute');
var searchRouter = require('./routes/searchRoute');
var genresRouter = require('./routes/genresRoute');
var tameimpalaRouter = require('./routes/tameimpalaRoute');
var currentsRouter = require('./routes/currentsRoute');

var contactRouter = require('./routes/contactRoute');

// En premier paramètre il y a le chemin, et en second le fichier qui traitera la requête

app.use('/signup', signupRouter);
app.use('/signin', signinRouter);

app.use('/albums', albumsRouter);
app.use('/artists', artistsRouter);
app.use('/tracksalbums', tracksAlbumsRouter);
app.use('/tracksplaylists', tracksPlaylistsRouter)
app.use('/playlists', playlistsRouter);

app.use('/search', searchRouter);
app.use('/genres', genresRouter);
app.use('/tameimpala', tameimpalaRouter);
app.use('/currents', currentsRouter);

app.use('/contact', contactRouter);


app.listen(3002);

module.exports = app;


