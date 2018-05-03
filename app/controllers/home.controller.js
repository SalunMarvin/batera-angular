(function () {
    'use strict';

    angular.module('app.home.controllers', [])
        .controller('HomeController', ['$scope', 'ArticlesService', 'BannerService', function ($scope, ArticlesService, BannerService) {
            $scope.articles = [];
            $scope.featuredArticles = [];

            ArticlesService.getRecentArticles().then(function (result) {
                $scope.articles = result.data;
            });

            ArticlesService.getFeaturedArticles().then(function (result) {
                $scope.featuredArticles = result.data;
            });

            $scope.myCustomOptions = {
                cellAlign: 'center',
                imagesLoaded: true,
                contain: true,
                initialIndex: 1,
                wrapAround: true,
                setGallerySize: true
            };

            $scope.banners = [];

            BannerService.getAllBanners().then(function (result) {
                $scope.banners = result.data;
                console.log($scope.banners[2].mainImage);
            });


    }]);
}());
