const express       = require('express');
const logger        = require('morgan');
const bodyParser    = require('body-parser');
const path = require('path');

require('dotenv').config();

global.__basedir = __dirname;

const http = require('http');
const app = express();
const cookieParser = require('cookie-parser');

app.use('/resources/uploads/users', express.static(path.join(__dirname, '/resources/static/assets/uploads/users')));

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mobileAuth = require('./routes/auth.routes');
const mobilePerson = require('./routes/person.routes');

app.use('/api/v1/auth', mobileAuth);
app.use('/api/v1/person', mobilePerson);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

module.exports = app;