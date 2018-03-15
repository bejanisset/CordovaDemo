angular.module('starter.controllers')
    .service('camera', function() {
    console.log('init service');
    this.TakePicture = function(ms) {
        camera.getPicture();
    };
    
});