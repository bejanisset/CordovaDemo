angular.module('starter.controllers')
    .service('camera', function() {
    
    console.log('init service');
    console.log('Camera');
    
    this.TakePicture = function() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
        
    };
    
});