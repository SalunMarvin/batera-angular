(function () {
    'use strict';

    angular.module('app.directives.footer', [])
        .directive('footer', function() {
            return {
                restrict: 'E',
                scope: {
                    options: '='
                },
                templateUrl: 'app/directives/footer/footer.html'
            }
        });
})();
