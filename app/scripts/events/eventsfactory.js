(function (){

  angular.module('DOMPIZZA')
    .factory('EventsFactory', ['$http', '$location', 'PARSE_URI', '$cookieStore', 'PARSE_HEADERS',
      function ($http, $location, PARSE_URI, $cookieStore, PARSE_HEADERS) {



        var getEvents = function () {
          return $http.get(PARSE_URI + 'classes/events', PARSE_HEADERS);
        };

        var addEvents = function (song) {
          $http.post(PARSE_URI + 'classes/events', song, PARSE_HEADERS)
            .success( function () {

            $location.path('/events');      

          });


        };

      return {
          getEvents: getEvents,
          addEvents: addEvents     
           }

      }
    ]);
}());