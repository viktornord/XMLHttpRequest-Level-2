/**
 * Created by victor on 25/12/15.
 */

controller = ((controller) => {
    controller.getAudioBlob = function() {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = handleBlob(xhr);
        xhr.onerror = handleError(xhr);
        xhr.open('GET', '/get-audio', true);
        xhr.send();
    };

    function handleBlob(context) {
        return (function (event) {
            if (this.readyState === 4 && this.status === 200) {
                alert(this.response);
                controller.insertAudio(this.response);
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

fetch('/get-audio')
    .then(response => response.blob())
    .then(responseBody => console.log(responseBody))
    .catch(err => console.log(err));