/**
 * Created by victor on 25/12/15.
 */

var controller = {
    insertImage(data) {
        var imgTag = document.createElement('img');
        imgTag.onload = function(e) {
            console.log(this.src);
            window.URL.revokeObjectURL(this.src);
        };
        imgTag.style.width = '150px';
        imgTag.src = window.URL.createObjectURL(data);
        document.querySelector('#image').appendChild(imgTag);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Array.prototype.forEach.call(document.querySelectorAll('.sendQuery'), button => {
        button.addEventListener('click', function() {
            controller[this.getAttribute('data-get-func')]();
        });
    });
});