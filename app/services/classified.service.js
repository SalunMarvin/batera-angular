(function ()
    {
        'use strict';
        angular.module('app.services').factory('ClassifiedService',
        ['$resource', '$q', 'ConfigService', function ($resource, $q, ConfigService)
            {
                var $public = {},
                    $private = {};

                angular.extend(this, new AbstractService($public, $private, $resource, $q));

                $private.setUrlAPIDefault = function (afterURL) {
                    afterURL = afterURL || '';
                    $private.API = $resource(ConfigService.getUrlApi() + '/classified/' + afterURL,
                        {},
                        ConfigService.defaultOptionsResource());
                };

                return $public;
            }
        ]);
    }()
);