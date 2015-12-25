/**
 * Created by victor on 26/12/15.
 */


function sendXHR(options) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType || 'text';
    xhr.open(options.method, options.url, options.async);
    return new Promise((resolve, reject) => {
        xhr.onload = function (event) {
            resolve(this);
        };
        xhr.onerror = function() {
            reject(this);
        };
        xhr.send(options.data);
    });
}

sendXHR({
    method: 'GET',
    url: '/get-string',
    async: true
}).then((data) => {
    console.log(data.responseText);
}).catch((err) => {
    console.log(err);
});