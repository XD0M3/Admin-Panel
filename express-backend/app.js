var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

var con = mysql.createConnection({
    host: "185.223.28.28",
    user: "root",
    password: "04041977Manuela",
    database: "esladminpanel"
});
var logger = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3001);
app.use(bodyParser.text());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login', function (req, ress) {
    var op = JSON.parse(req.body);
    console.log("Connected!");
    con.query("SELECT * FROM user WHERE name ='" + op['name'] + "';", function (err, result, fields) {
        bcrypt.compare(op['passwort'], result[0].passwort, function (err,res) {
            ress.setHeader("Access-Control-Allow-Origin", "*");
            if (res) {
                console.log("Password Matches!");
                ress.json({loginSuccesfull: true});
            } else {
                console.log("Passwort doesnt match!");
                ress.json({ loginSuccesfull: false });
            }
            
        });
    });
    


    
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001);

module.exports = app;
