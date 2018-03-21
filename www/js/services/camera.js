angular.module('starter.controllers')
    .service('camera', function() {
    
    console.log('init service');
    console.log('Camera');
    
    this.TakePicture = function() {
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.DATA_URL });
        function onSuccess(imageData) {
            var image =  document.getElementById('myImage') ;
            image.style.display = "block";
            image.src = "data:image/jpeg;base64," + imageData;
        }
        function onFail(message) {
            alert (' a échoué car: '+ message);
        }
    };
});