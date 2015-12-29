/**
 * Created by victor on 25/12/15.
 */

var fs = require('fs');

module.exports = {
    init
};


function init() {
    fs.exists('uploads', function (exists) {
        !exists && fs.mkdirSync('uploads')
    });
}