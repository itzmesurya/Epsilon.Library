(function () {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr', '$injector'];
    /* @ngInject */
    function logger($log, toastr, $injector) {
        // var $http = $injector.get('$http');
        var service = {
            showToasts: true,

            error: error,
            info: info,
            success: success,
            warning: warning,

            // straight to console; bypass toastr
            log: $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            var $epGenericDataService = $injector.get('$epGenericDataService');
            toastr.error(message, title);
            $log.error('Error: ' + message, data);
            // $epGenericDataService.setErrorLogging({
            //     'DealerId': '',
            //     'Module': 'OLCA',
            //     'Method': 'Error from UI',
            //     'CurrentFile': '',
            //     'Description': data.exception.stack,
            //     'UserName': data.exception.user,
            //     'PackageName': 'RoutesData2',
            //     'Parameters': ''
            // }).$promise.then(function (data) {
            //     // do something with the data returned from the DB
            // });
        }

        function info(message, data, title) {
            toastr.info(message, title);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toastr.success(message, title);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toastr.warning(message, title);
            $log.warn('Warning: ' + message, data);
        }
    }
}());
