angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  
})

.controller('LightCtrl', function($scope, light) {
    console.log("Light");
    $scope.LightOn = function() {
        alert("Light On");
        window.plugins.flashlight.switchOn();
    };
    $scope.LightOff = function() {
        alert("Light Off");
        window.plugins.flashlight.switchOff();
    };
})

.controller('VibrateCtrl', function($scope) {
    console.log("Vibrate");
    $scope.Vibrate = function() {
        alert("Vibrate On");
        navigator.vibrate(3000);
    };
});