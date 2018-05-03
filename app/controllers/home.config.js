(function () {
    'use strict';

    angular
        .module('app.home', ['ui.router', 'app.home.controllers'])
        .config(['$stateProvider', function ($stateProvider) {

            $stateProvider
            .state('home', {
                    url: '',
                    views: {
                        'mainView': {
                            templateUrl: 'modules/home.html',
                            controller: 'HomeController'
                        }
                    }
                }
            );
        }]);
}());