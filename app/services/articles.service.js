(function () {
    'use strict';

    angular.module('app.services').factory('ArticlesService', ['$resource', '$q', 'ConfigService',
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

        $public.getRecentArticles = function (options) {

            var deferred = $q.defer();

            $private.setUrlAPIDefault('recent/');

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

        $public.getFeaturedArticles = function (options) {

            var deferred = $q.defer();

            $private.setUrlAPIDefault('featured/');

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

        $public.getAllArticles = function () {

            var deferred = $q.defer();

            $private.setUrlAPIDefault('all/');

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

        $public.getArticleBySlug = function (options) {
            var deferred = $q.defer();

            $private.setUrlAPIDefault('details/'+options.slug+'/');

            $private.API.query({}).$promise.then(function (result) {
                if (result) {
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
