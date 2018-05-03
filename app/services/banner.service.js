(function () {
    'use strict';

    angular.module('app.services').factory('BannerService', ['$resource', '$q', 'ConfigService',
        function ($resource, $q, ConfigService)  {

        var $public = {},
            $private = {};

        angular.extend(this, new AbstractService($public, $private, $resource, $q));

        $private.setUrlAPIDefault = function (afterURL) {
            afterURL = afterURL || '';

            $private.API = $resource(ConfigService.getUrlApi() + '/articles/' + afterURL,
                {},
                ConfigService.defaultOptionsResource());
        };

        $public.getAllBanners = function () {
            var deferred = $q.defer();

            $private.setUrlAPIDefault('banners/');

            $private.API.query({}).$promise.then(function (result) {
                if (result.data) {
                    deferred.resolve(result);
                } else {
                    deferred.reject(result);
                }
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        };

        return $public;
    }]);
}());
