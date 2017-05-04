(function () {
    'use strict';

    angular
        .module('ep.formly.templates')
        .directive('epTextCommon', epTextAce);

    epTextAce.inject = [];

    function epTextAce() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: EpTextAceController,
            controllerAs: 'vm',
            templateUrl: 'app/templates/ep-text/ep-text-ace.html',
            link: link,
            restrict: 'EA',
            scope: {
                options: '=',
                modelVar: '=',
            }
        };
        return directive;

        function link(scope, element, attrs, controller) {
            // console.log('debug');
        }
    }
    /* @ngInject */
    function EpTextAceController() {
        var vm = this;
    }


    angular
        .module('ep.formly.templates')
        .directive('epTextCommon', function () {
            // Usage:
            //
            // Creates:
            //
            var directive = {
                bindToController: true,
                controller: ['$scope', function ($scope) {
                    var vm = this;
                }],
                controllerAs: 'vm',
                templateUrl: 'app/templates/ep-text/ep-text-ml.html',
                link: link,
                restrict: 'EA',
                scope: {
                    options: '=',
                    modelVar: '=',
                }
            };
            return directive;

            function link(scope, element, attrs, controller) {
                // console.log('debug');
            }
        });

    angular
        .module('ep.formly.templates').decorator('epTextCommonDirective', ['$delegate', 'theme', function name($delegate, theme) {
            switch (theme) {
                case 'ace':
                    return ([$delegate[0]]);
                default:
                    return ([$delegate[1]]);
            }
        }]);

})();
