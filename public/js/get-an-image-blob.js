/**
 * Created by victor on 25/12/15.
 */

controller = ((controller) => {
    controller.getImageBlob = function() {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = handleBlob(xhr);
        xhr.onerror = handleError(xhr);
        xhr.open('GET', '/get-image', true);
        xhr.send();
    };

    function handleBlob(context) {
        return (function (event) {
            if (this.readyState === 4 && this.status === 200) {
                alert(this.response);
                controller.insertImage(this.response);
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
