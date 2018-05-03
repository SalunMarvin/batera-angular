(function () {
    'use strict';

    angular
        .module('app.articles', ['ui.router', 'app.articles.controllers'])
        .config(['$stateProvider', function ($stateProvider) {

            $stateProvider
            .state('articles', {
                    url: '/artigos',
                    views: {
                        'mainView': {
                            templateUrl: 'modules/articles.html',
                            controller: 'ArticlesController'
                        }
                    }
                })
            .state('detalhes', {
                    url: '/artigos/detalhes/:slug',
                    views: {
                        'mainView': {
                            templateUrl: 'modules/post.html',
                            controller: 'ArticlesController'
                        }
                    }
                });
        }]);
}());