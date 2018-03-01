angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  
})

.controller('LightCtrl', function($scope, light) {
    console.log("Light");
    $scope.LightOn = function() {
        console.log("Light On");
        window.plugins.flashlight.switchOn();
    };
    $scope.LightOff = function() {
        console.log("Light Off");
        window.plugins.flashlight.switchOff();
    };
})

.controller('VibrateCtrl', function($scope) {
    console.log("Vibrate");
    $scope.Vibrate = function() {
        console.log("Vibrate On");
    };
});