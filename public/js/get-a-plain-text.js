var uIntBuffArr;

controller = (controller => {
    controller.getString = function() {
        var xhr = new XMLHttpRequest();
        xhr.onload = handleString(xhr);
        xhr.onerror = handleError(xhr);
        xhr.open('GET', '/get-string', true);
        xhr.send();
    };

    function handleString(context) {
        return (function (event) {
            if (this.readyState === 4 && this.status === 200) {
                var pTag = document.createElement('p');
                pTag.innerText = this.responseText;
                document.querySelector('#text').appendChild(pTag);
            }
        }).bind(context);
    }

    function handleError(context) {
        return (function (error) {
            console.log(error);
            console.log(this);
        }).bind(context);
    }

    return controller;
})(controller || {});


function sendXHR(options) {
    var xhr = new XMLHttpRequest();
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

//Example of the xhr wrapped with promise

sendXHR({
    method: 'GET',
    url: '/get-string',
    async: true,
    data: null
}).then((data) => {
    console.log(data.responseText);
}).catch((err) => {
    console.log(err);
});