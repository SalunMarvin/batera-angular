(function () {
    'use strict';

    function UserAuthService ($rootScope)  {

        var $public = {},
            $private = {user: ''};

        $public.setUserAuth = function (result) {
            $private.user = result;

            var oUser = result;

            if(oUser){
                $rootScope.UserAuthService = {
                    firstName: oUser.firstName,
                    referenceCode: oUser.referenceCode,
                    franchise: oUser.franchise,
                    influxCode: oUser.influxCode,
                    email: oUser.email,
                    userInformation: oUser.userInformation,
                    role: oUser.role
                };
            }
        };

        $public.getUserAuth = function () {
            return angular.fromJson(localStorage.getItem('UserAuth'));
        };

        $public.getToken = function () {
            var oUserAuth = angular.fromJson(localStorage.getItem('UserAuth'));
            return oUserAuth ? oUserAuth.token: '';
        };

        return $public;
    }

    angular.module('app.services').factory('UserAuthService', UserAuthService);

    UserAuthService.$inject = ['$rootScope'];
}());
