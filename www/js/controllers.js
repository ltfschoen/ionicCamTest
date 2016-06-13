angular.module('starter.controllers', [])

.controller('CamCtrl', ['$scope',
function($scope) {

  console.log("Status: in CamCtrl");
  var pictureSource, destinationType;

  ionic.Platform.ready(function() {
    console.log("Status: Ionic platform ready to load camera types");
    // Error handling
    if (!navigator.camera) {
      console.log("Error: No navigator camera detected (in ionic.Platform.ready)");
      return; 
    }
    pictureSource = navigator.camera.PictureSourceType.CAMERA;
    destinationType = navigator.camera.DestinationType.FILE_URI;
  });

  function setCameraOptions(srcType, destinationType) {
    var options = {
      // i.e. 20, 50, and 100
      quality: 50,
      destinationType: destinationType,
      sourceType: srcType,
      allowEdit: true,
      encodingType: navigator.camera.EncodingType.JPEG,
      mediaType: navigator.camera.MediaType.PICTURE,
      targetWidth: 10,
      targetHeight: 10,
      cameraDirection: 0, // Back = 0
      correctOrientation: true,
      saveToPhotoAlbum: false
    }
    console.log("Status: setCameraOptions returning: " + JSON.stringify(options) );
    return options;
  };

  // Take picture
  $scope.takePicture = function() {
    console.log("Status: $scope.takePicture detected camera button click");
    var cameraOptions = setCameraOptions(pictureSource, destinationType);

    // Error handling
    if (!navigator.camera) {
      console.log("Error: No navigator camera detected (in $scope.takePicture)"); 
      return;
    }

    navigator.camera.getPicture(
      // Success
      function cameraSuccess(imageURI) {
        console.log("Camera success with image obtained: ", imageURI);
        $scope.$apply(function () {
            $scope.mypicture = imageURI;
            console.log("$scope.mypicture: " + $scope.mypicture);
        });
      },
      // Failure
      function cameraError(err) {
        console.log("Unable to obtain picture error: ", JSON.stringify(err) );
      },
      // Options
      cameraOptions
    );
  };

}]);
