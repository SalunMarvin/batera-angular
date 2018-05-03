(function () {
    'use strict';

    angular.module('app.classified.controllers', [])
        .controller('ClassifiedController', ['$scope', 'ClassifiedService', function ($scope, ClassifiedService) {
            $scope.classified = [];

            ClassifiedService.getAll().then(function (result) {
                $scope.classified = result.data;
            });
    }]);
}());
