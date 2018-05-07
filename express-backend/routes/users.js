var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const bcrypt = require('bcrypt');

var con = mysql.createConnection({
    host: "185.223.28.28",
    user: "root",
    password: "04041977Manuela",
    database: "esladminpanel"
    });

/* GET users listing. */
router.post('/', function(req, res) {
    let name = req.query.name;
    let u = req.query.password;
    let hashedPW = bcrypt.hash(u, 10, function (err, hash) {
        return hash;
    });

    res.json({
        login: true
    });
    console.log(req.body)
    /*res.setHeader('Acces-Control-Allow-Origin', "*");
    console.log(JSON.stringify(req.body));
    res.json({ login: true });*/
});

module.exports = router;
