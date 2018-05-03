(function () {
    'use strict';

    angular.module('app.articles.controllers', [])
        .controller('ArticlesController', ['$scope', '$stateParams', 'ArticlesService', function (
            $scope,
            $stateParams,
            ArticlesService) {
            $scope.articles = [];
            $scope.article = [];

            ArticlesService.getAllArticles().then(function (result) {
                $scope.articles = result.data;
            });

            ArticlesService.getFeaturedArticles().then(function (result) {
                $scope.featuredArticles = result.data;
            });

            if ($stateParams.slug) {
                ArticlesService.getArticleBySlug({slug: $stateParams.slug}).then(function (result) {
                    console.log(result);
                    $scope.article = result;
                });
            }
    }]);
}());
