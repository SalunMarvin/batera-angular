(function () {
    'use strict';

    angular
        .module('app.classified', ['ui.router', 'app.classified.controllers'])
        .config(['$stateProvider', function ($stateProvider) {

            $stateProvider
            .state('classified', {
                    url: '/classificados',
                    views: {
                        'mainView': {
                            templateUrl: 'modules/classified.html',
                            controller: 'ClassifiedController'
                        }
                    }
                }
            );
        }]);
}());