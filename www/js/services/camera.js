angular.module('starter.controllers')
    .service('camera', function() {
    
    console.log('init service');
    console.log('Camera');
    
    this.TakePicture = function() {
        alert("Camera On");
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    };
    
});