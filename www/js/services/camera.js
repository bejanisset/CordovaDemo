angular.module('starter.controllers')
    .service('camera', function() {
    console.log('init service');
    this.TakePicture = function(ms) {
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