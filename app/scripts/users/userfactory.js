(function () {

  angular.module('DOMPIZZA')
    .factory('UserFactory', ['PARSE_HEADERS', 'PARSE_URI', '$http', '$cookieStore', '$location',
      function (PARSE_HEADERS, PARSE_URI, $http, $cookieStore, $location) {



          var currentUser = function () {
          return $cookieStore.get('currentUser');
        }

        // Check User Status
      // var checkLoginStatus = function () {
      //   var user = currentUser();
      //   if (user) {
      //     PARSE_HEADERS.headers['X-PARSE-Session-Token'] = user.sessionToken;
      //   }
      // };

      var checkUser = function (user) {
          var user = $cookieStore.get('currentUser');
          if(user) {
            $('#user').html('Welcome back ' + user.name);
            $location.path('/dashboardevents');
          } else {
            $('#user').html('Please Log In');
            $location.path('/login');
          }
        };



      

        var login = function (user) {
          var params = 'username='+user.username+'&password='+user.password;
          $http.get(PARSE_URI + 'login?'+params, PARSE_HEADERS)
            .success( function (data) {
              $cookieStore.put('currentUser', data);
              return checkUser();
          });
        };

        var logout = function () {
          $cookieStore.remove('currentUser');
          return checkUser;
        $location.path('/login');
        };

        

       

        return {
          login:    login,
          logout:   logout,
          checkUser: checkUser,
          currentUser: currentUser
          // checkLoginStatus: checkLoginStatus
        }

      }
  ]);

}());