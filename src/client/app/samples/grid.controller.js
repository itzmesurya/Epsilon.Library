(function () {
    'use strict';

    angular
        .module('ep.formly.samples')
        .controller('gridController', GridController);

    GridController.$inject = ['$scope'];

    function GridController($scope) {
        var vm = this;
        activate();

        function activate() {}

        vm.submit = function () {};

        vm.formModel = {

        };

        vm.userFields = [];
        vm.options = {
            formState: {

            }
        };
    }
})();
