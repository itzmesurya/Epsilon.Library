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
            template: '<div class="form-group">' +
                '<label class="col-sm-3 control-label no-padding-right" for="form-field-1"> {{vm.options.templateOptions.label}} </label>' + '<div class="col-sm-9">' +
                '<input type="text" id="form-field-1" id="{{vm.options.id}}" ng-model="vm.modelVar" placeholder="{{vm.options.label}}" class="col-xs-10 col-sm-5" />' +
                '</div>' +
                '</div>',
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
