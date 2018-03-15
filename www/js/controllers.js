angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  
})


.controller('VibrateCtrl', function($scope, vibration) {
    console.log("Vibrate");
    $scope.vibration = vibration;
})
    
.controller('CameraCtrl', function($scope, camera) {
    $scope.camera = camera;
    
});