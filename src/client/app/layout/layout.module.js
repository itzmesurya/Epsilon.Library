(function () {
    'use strict';

    angular.module('ep.formly.layout', [])
        .directive('navbar', function () {
            return {
                templateUrl: 'app/layout/nav-bar.html'
            }
        });
})();
