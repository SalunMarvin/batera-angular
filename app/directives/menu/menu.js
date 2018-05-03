(function () {
    'use strict';

    angular.module('app.directives.menu', [])
        .directive('menu', function() {
            return {
                restrict: 'E',
                scope: {
                    options: '='
                },
                templateUrl: 'app/directives/menu/menu.html'
            }
        });
})();
