var express = require('express');
var fs = require("fs");
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
    fs.readFile("./views/index.html",function(err, data){
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/html"});//注意这里 
        res.write(data); 
        res.end(); 
    });
});

module.exports = router;
