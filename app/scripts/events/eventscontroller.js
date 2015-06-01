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

      $scope.deleteMe = function (id, index) {
        EventsFactory.deleteEvent(id).success( function (response) {
           $scope.events.splice(index, 1);
        });
      };




     
    


    }]);
}());