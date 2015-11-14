(function() {

    angular.module('DOMPIZZA')
        .factory('PhotoFactory', ['$http', '$location', 'PARSE_URI', '$cookieStore', 'PARSE_HEADERS',
            function($http, $location, PARSE_URI, $cookieStore, PARSE_HEADERS) {


                // var user = UserFactory.user();

                var getPhotos = function() {
                    return $http.get(PARSE_URI + 'classes/photos', PARSE_HEADERS);

                };



                var addPhotos = function(photoObj) {

                    return $http.post(PARSE_URI + 'classes/photos', photoObj, PARSE_HEADERS)
                        .success(function() {
                            $location.path('/dashboardevents');

                        });
                };

                var deletePhotos = function(id) {
                    return $http.delete(PARSE_URI + 'classes/photos/' + id, PARSE_HEADERS);
                };

                return {
                    get: getPhotos,
                    add: addPhotos,
                    del: deletePhotos
                };

            }
        ]);
}());
