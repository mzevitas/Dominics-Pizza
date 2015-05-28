(function () {

   var app = angular.module('DOMPIZZA', ['ngRoute', 'ngCookies'])
        .constant('PARSE_HEADERS', {
            headers: {
                'X-Parse-Application-Id': '6IeYZZXsnHTu4d32gx3EgFRCrUCIO4NQ6zjcfqQH',
                'X-Parse-REST-API-Key': 'gfFP7THIViyzghcBLWplBPjmn31ES7cZGWhM5UuV',
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
                templateUrl: 'scripts/events/events.html',
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
