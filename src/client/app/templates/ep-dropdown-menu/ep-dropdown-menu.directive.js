(function () {
    'use strict';

    angular
        .module('ep.formly.templates')
        .directive('epDropdownMenu', epDropdownMenuAce);

    epDropdownMenuAce.inject = ['$scope', 'theme'];

    function epDropdownMenuAce() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: EpDropdownMenuAceController,
            controllerAs: 'vm',
            templateUrl: 'app/templates/ep-dropdown-menu/ep-dropdown-menu-ace.html',
            link: link,
            restrict: 'EA',
            scope: {
                options: '=',
                modelVar: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {}
    }
    /* @ngInject */
    function EpDropdownMenuAceController($scope, theme) {
        var vm = this;
    }
    angular
        .module('ep.formly.templates')
        .directive('epDropdownMenu', function () {
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
                templateUrl: 'app/templates/ep-dropdown-menu/ep-dropdown-menu-ml.html',
                link: link,
                restrict: 'EA',
                scope: {
                    options: '=',
                    modelVar: '='
                }
            };
            return directive;

            function link(scope, element, attrs) {}
        });

    angular
        .module('ep.formly.templates').decorator('epDropdownMenuDirective',
         ['$delegate', 'theme', function name($delegate, theme) {
            switch (theme) {
                case 'ace':
                    return ([$delegate[0]]);
                default:
                    return ([$delegate[1]]);
            }
        }]);

})();
