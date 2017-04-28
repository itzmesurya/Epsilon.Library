(function () {
    'use strict';

    angular
        .module('ace')
        .directive('epTextAce', epTextAce);

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
            templateUrl:'app/templates/ace/ep-text-ace/ep-text-ace.html',
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
    function EpTextAceController() {
        var vm = this;
    }
})();
