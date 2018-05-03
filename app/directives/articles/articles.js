(function () {
    'use strict';

    angular.module('app.directives.articles', [])
        .directive('articles', function() {
            return {
                restrict: 'E',
                scope: {
                    options: '='
                },
                templateUrl: 'app/directives/articles/articles.html',
                controller: ArticlesDirectiveController,
            }
        });
})();
ArticlesDirectiveController.$inject = ['$scope', 'ArticlesService'];

function ArticlesDirectiveController ($scope, ArticlesService) {
    $scope.articles = [];
    $scope.featuredArticles = [];

    ArticlesService.getRecentArticles().then(function (result) {
        $scope.articles = result.data;
    });

    ArticlesService.getFeaturedArticles().then(function (result) {
        $scope.featuredArticles = result.data;
    });
}