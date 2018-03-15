angular.module('starter.controllers')
    .service('vibration', function() {
    console.log('init service');
    
    this.Vibrate = function(ms) {
        alert("Vibrate On");
        navigator.vibrate(ms);
    };
});