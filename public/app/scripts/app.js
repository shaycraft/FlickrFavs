(function() {
	var app = angular.module('flickrfavs', ['ngRoute',
        'ngResource',
        'nq.controllers',
        'nq.services',
        'nq.directives']);

	/*app.config(function($routeProvider, $locationProvider){
        $routeProvider
            .when("/main", {
                templateUrl: "app/views/main.html",
                controller: "mainCtrl"
            })
            .when("/upload", {
                templateUrl: "app/views/upload.html",
                controller: "uploadCtrl"
            })
            .otherwise({redirectTo:"/main"});
    });*/

	angular.module('nq.directives', []);
    angular.module('nq.controllers', []);
    angular.module('nq.services', []);
})();