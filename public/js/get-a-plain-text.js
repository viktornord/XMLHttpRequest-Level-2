
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

// You can also do get query by using fetch
// This is much simpler, isn't it?

fetch('/get-string')
    .then(response => response.text())
    .then(responseText => console.log(responseText))
    .catch(err => console.log(err));