(function (){

  angular.module('DOMPIZZA')
    .controller('EventsCtrl', ['$scope', 'EventsFactory','$routeParams',
    function ($scope, EventsFactory, $routeParams){

      EventsFactory.getEvents().success( function(data){
      $scope.event = data.results;

    });

      $scope.addEvents = function (events) {
        EventsFactory.addEvents(events);

      };

     
    


    }]);
}());