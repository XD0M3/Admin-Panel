var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mysql = require('mysql');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const puppeteer = require('puppeteer');

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
        if (result.length > 0) {
            bcrypt.compare(op['passwort'], result[0].passwort, function (err, res) {
                ress.setHeader("Access-Control-Allow-Origin", "*");
                if (res) {
                    console.log(res);
                    console.log("Password Matches!");
                    ress.json({ loginSuccesfull: true, rank: result[0].rank, avatar: result[0].avatar_url });
                } else {
                    console.log("Passwort doesnt match!");
                    ress.json({ loginSuccesfull: false });
                }
            });
        } else {
            ress.setHeader("Access-Control-Allow-Origin", "*");
            ress.json({ loginSuccesfull: false });
        }
        
    }); 
});

app.get('/cups', function (rq, res) {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://play.eslgaming.com/leagueoflegends/eu-west/tournaments', { waitUntil: 'networkidle2' });
        let hmtl = await page.content();
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("My-Test-Header", "1234");
        var o = hmtl.split('<div class=\"league-list cups\">');
        o = o[1];
        //o = o.split('</div>')[0];
        res.send(o);

        console.log("test");
        await browser.close();
    })();
    
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
