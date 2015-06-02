(function (){

  angular.module('DOMPIZZA')
    .controller('EventsCtrl', ['$scope', '$location', 'EventsFactory','$routeParams', '$cacheFactory',
    function ($scope, $location, EventsFactory, $routeParams, $cacheFactory){

       var cache = $cacheFactory.get('$http');

      $scope.events = [];

      EventsFactory.get().success( function (response) {
        $scope.events = response.results;
      });
    
      $scope.addEvents = function (eventObj) {
        $scope.events = {};
        EventsFactory.add(eventObj).success( function (results) {
          eventObj.objectId = results.objectId;
          // $scope.events.push(eventObj);
          cache.remove('https://api.parse.com/1/classes/events');
          

        });
      };

      $scope.deleteMe = function (id, index) {
        EventsFactory.del(id).success( function (response) {
          $scope.events.splice(index, 1);
          cache.remove('https://api.parse.com/1/classes/events');
        });
      };


     
    


    }]);
}());