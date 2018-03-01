angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  
})

.controller('LightCtrl', function($scope, light) {
    console.log("Light");
    $scope.LightOn = function() {
        console.log("Light On");
    };
    $scope.LightOff = function() {
        console.log("Light Off");
    };
})

.controller('VibrateCtrl', function($scope) {
    console.log("Vibrate");
    $scope.Vibrate = function() {
        console.log("Vibrate On");
    };
});