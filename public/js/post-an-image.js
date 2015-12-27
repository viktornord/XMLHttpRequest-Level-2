/**
 * Created by victor on 25/12/15.
 */

controller = (controller => {
    var progressBar = document.querySelector('#progressbar');

    controller.postImage = function() {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'arraybuffer';
        xhr.onerror = handleError(xhr);

        xhr.onload = handleImage(xhr);

        xhr.open('GET', document.querySelector('#fileurl').value, true);
        xhr.send();

    };

    function handleImage(context) {
        return (function(event) {
            if (this.readyState === 4 && this.status === 200) {
                var formData = new FormData();
                formData.append('ownFile', new File([this.response], document.querySelector('#filename').value));
                this.open('POST', '/post-image', true);
                this.onprogress = handleProgress(this);
                this.onload = function(event) {
                    alert('Image have been sent!');
                };
                this.send(formData);
            }
        }).bind(context)
    }

    function handleProgress(context) {
        return (function(event) {
            if (event.lengthComputable) {
                progressBar.value = (event.loaded / event.total) * 100;
                progressBar.textContent = progressBar.value;
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
