(function () {

    angular
        .module('ml')
        .directive('epTextMl', epTextMl);



    function epTextMl() {
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
            template: '<div class="form-group is-empty">' +
                '<label for="{{vm.config.templateOptions.label}}" class="col-md-2 control-label">{{vm.config.templateOptions.label}}</label>' +
                '<div class="col-md-10">' +
                '<input type="text" class="form-control" id=\"{{options.id}}\" ng-model=\"vm.modelVar\" placeholder="{{vm.config.templateOptions.label}}">' +
                '</div>' +
                '</div>',
            link: link,
            restrict: 'EA',
            scope: {
                config: '=',
                modelVar:'='
            }
        };
        return directive;

        function link(scope, element, attrs) {}
    }
    
})();
