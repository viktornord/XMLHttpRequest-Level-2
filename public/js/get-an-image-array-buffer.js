/**
 * Created by victor on 25/12/15.
 */

controller = ((controller) => {
    controller.getImageArrayBuffer = function() {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.onload = handleBuffer(xhr);
        xhr.onerror = handleError(xhr);
        xhr.open('GET', '/get-image', true);
        xhr.send();
    };

    function handleBuffer(context) {
        return (function (event) {
            if (this.readyState === 4 && this.status === 200) {
                alert(this.response);
                controller.insertImage(new Blob([this.response]));
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

// Again You can do get query by using fetch


fetch('/get-image')
    .then(response => response.arrayBuffer())
    .then(responseBody => console.log(responseBody))
    .catch(err => console.log(err));