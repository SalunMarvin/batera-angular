(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('ConfigService', ['urlAPI', 'UserAuthService', function (urlAPI, UserAuthService) {

            var $public = {};
            var $private = {};

            $private.urlApi = urlAPI;
            $private.sizePagination = 20;

            $public.getUrlApi = function () {
                return $private.urlApi;
            };

            $public.setUrlApi = function (value) {
                $private.urlApi = value;
            };

            $public.defaultOptionsResource = function () {
                var token = UserAuthService.getToken() ? 'Token '+UserAuthService.getToken() : '';

                return {
                    'get':    {method:'GET', headers:{'Accept': 'application/json', 'Authorization': token}},
                    'save':   {method:'POST', headers:{'Content-Type': 'application/json', 'Authorization': token}},
                    'post':   {method:'POST', headers:{'Content-Type': 'application/json', 'Authorization': token}},
                    'auth':   {method:'POST', headers:{'Content-Type': 'application/json'}},
                    'query':  {method:'GET', headers:{'Accept': 'application/json', 'Authorization': token}},
                    'update':  {method:'PUT', headers:{'Content-Type': 'application/json', 'Authorization': token}},
                    'delete': {method:'DELETE', headers:{'Accept': 'application/json', 'Authorization': token}}
                };
            };

            return $public;
    }]);
}());
