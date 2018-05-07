var express = require('express');
var router = express.Router();
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

/* GET users listing. */
router.use(express.json());       // to support JSON-encoded bodies
router.use(express.urlencoded()); // to support URL-encoded bodies
router.post('/', function(req, res) {
    console.log(req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({login: true}));
    /*
     let name = req.query.name;
    let u = req.query.password;
    let hashedPW = bcrypt.hash(u, 10, function (err, hash) {
        return hash;
    });
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({
        login: true
    });
     * res.setHeader('Acces-Control-Allow-Origin', "*");
    console.log(JSON.stringify(req.body));
    res.json({ login: true });*/
});

module.exports = router;
