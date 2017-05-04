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
            templateUrl: 'app/templates/materiallab/ep-text-ml/ep-text-ml.html',
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
