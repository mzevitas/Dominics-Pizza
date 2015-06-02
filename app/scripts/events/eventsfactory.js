(function() {

    angular.module('DOMPIZZA')
        .factory('EventsFactory', ['$http', '$location', 'PARSE_URI', '$cookieStore', 'PARSE_HEADERS',
            function($http, $location, PARSE_URI, $cookieStore, PARSE_HEADERS) {


                // var user = UserFactory.user();

                var getEvents = function() {
                    return $http.get(PARSE_URI + 'classes/events', PARSE_HEADERS);
                      
                    };
                    
              

                var addEvents = function(eventObj) {
                    
                    return $http.post(PARSE_URI + 'classes/events', eventObj, PARSE_HEADERS);
                };

                var deleteEvents = function(id) {
                    return $http.delete(PARSE_URI + 'classes/events/' + id, PARSE_HEADERS);
                };

                return {
                    get: getEvents,
                    add: addEvents,
                    del: deleteEvents
                };

            }
        ]);
}());
