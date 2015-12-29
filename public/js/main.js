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
    },
    insertAudio(data) {
        var sourceTag = document.createElement('source');
        sourceTag.onload = function(e) {
            console.log(this.src);
            window.URL.revokeObjectURL(this.src);
        };
        sourceTag.src = window.URL.createObjectURL(data);
        var audioTag = document.createElement('audio');
        audioTag.setAttribute('controls', '');
        audioTag.appendChild(sourceTag);
        document.querySelector('#audio').appendChild(audioTag);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Array.prototype.forEach.call(document.querySelectorAll('.sendQuery'), button => {
        button.addEventListener('click', function() {
            controller[this.getAttribute('data-get-func')]();
        });
    });
});