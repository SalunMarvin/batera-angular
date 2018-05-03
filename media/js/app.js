(function () {
    'use strict';
    
    angular.module('app', [
        'app.services',
        'app.directives.menu',
        'app.directives.footer',
        'app.directives.articles',
        'app.home',
        'app.articles',
        'app.classified',
        'ngResource',
        'bc.Flickity'
    ])
    .config(['$resourceProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function ($resourceProvider, $stateProvider, $urlRouterProvider) {
            $resourceProvider.defaults.stripTrailingSlashes = false;
            $urlRouterProvider.otherwise("/");
        }]);
    angular.module('app.services', []);
})();
