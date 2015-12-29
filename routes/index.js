var express = require('express');
var fs = require('fs');
var Busboy = require('busboy');
var util = require('util');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'XMLHttpRequest Level 2'});
});


router.get('/get-string', (req, res, next) => {
    res.send('I am just a string');
});

router.get('/get-image', (req, res, next) => {
    new Promise((resolve, reject) => {
        fs.readFile('storage/mushroom.jpg', (err, fileContents) => {
           err ? reject(err) : resolve(fileContents);
        });
    }).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.end();
    });
});
router.get('/get-audio', (req, res, next) => {
    new Promise((resolve, reject) => {
        fs.readFile('storage/beep-02.mp3', (err, fileContents) => {
           err ? reject(err) : resolve(fileContents);
        });
    }).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.end();
    });
});

router.post('/post-image', (req, res, next) => {
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        file.pipe(fs.createWriteStream(`uploads/${filename}-${Date.now()}.jpg`));
    });
    busboy.on('finish', function() {
        console.log('Done parsing form!');
        res.writeHead(303, { Connection: 'close', Location: '/' });
        res.end();
    });
    req.pipe(busboy);
});

module.exports = router;
