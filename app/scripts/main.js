(function () {

   var app = angular.module('DOMPIZZA', ['ngRoute', 'ngCookies','angular-carousel'])
        .constant('PARSE_HEADERS', {
            headers: {
                'X-Parse-Application-Id': '6IeYZZXsnHTu4d32gx3EgFRCrUCIO4NQ6zjcfqQH',
                'X-Parse-REST-API-Key': 'gfFP7THIViyzghcBLWplBPjmn31ES7cZGWhM5UuV',
                'Content-Type': 'application/json'
            }
        })
       .constant('PARSE_URI', 'https://api.parse.com/1/')
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
                controller: 'PhotoCtrl'
            });

            $routeProvider.when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'PageCtrl'
            });
            $routeProvider.when('/login', {
                templateUrl: 'scripts/users/login.html',
                controller: 'UserCtrl'
            });
            $routeProvider.when('/addevents', {
                templateUrl: 'scripts/events/addevents.html',
                controller: 'EventsCtrl'
            });
            $routeProvider.when('/dashboardevents', {
                templateUrl: 'scripts/events/dashboardevents.html',
                controller: 'EventsCtrl'
            });
            $routeProvider.when('/addphotos', {
                templateUrl: 'scripts/photo/addPhoto.html',
                controller: 'PhotoCtrl'
            });
           


        });

    app.controller('PageCtrl', function () {
        //console.log("Page Controller here.");
    });


}());
