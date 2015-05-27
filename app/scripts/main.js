(function () {

   var app = angular.module('DOMPIZZA', ['ngRoute', 'ngCookies'])
        .constant('PARSE_HEADERS', {
            headers: {
                'X-Parse-Application-Id': '',
                'X-Parse-REST-API-Key': '',
                'Content-Type': 'application/json'
            }
        })
       .config( function ($routeProvider) {


            $routeProvider.when('/', {
                templateUrl: 'views/home.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/about', {
                templateUrl: 'views/about.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/menu', {
                templateUrl: 'views/menu.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/events', {
                templateUrl: 'views/blog.html',
                controller: 'EventsCtrl'
            });
            $routeProvider.when('/gallery', {
                templateUrl: 'views/gallery.html',
                controller: 'PageCtrl'
            });

           
            $routeProvider.when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'PageCtrl'
            });
           


        });

    app.controller('PageCtrl', function () {
        //console.log("Page Controller here.");
    });


}());
