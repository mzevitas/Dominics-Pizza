(function (){

  angular.module('DOMPIZZA')
    .controller('PhotoCtrl', ['$scope', '$location', 'PhotoFactory','$routeParams', '$cacheFactory',
    function ($scope, $location, PhotoFactory, $routeParams, $cacheFactory){

       var cache = $cacheFactory.get('$http');

      $scope.photos = [];

      PhotoFactory.get().success( function (response) {
        $scope.photos = response.results;
      });
    
      $scope.addPhotos = function (photoObj) {
        $scope.photos = {};
        PhotoFactory.add(photoObj).success( function (results) {
          photoObj.objectId = results.objectId;
          // $scope.events.push(eventObj);
          cache.remove('https://api.parse.com/1/classes/photos');
          

        });
      };

      $scope.deleteMe = function (id, index) {
        PhotoFactory.del(id).success( function (response) {
          $scope.photos.splice(index, 1);
          cache.remove('https://api.parse.com/1/classes/photos');
        });
      };


     
    


    }]);
}());