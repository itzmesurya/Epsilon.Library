(function () {
    'use strict';

    angular
        .module('ep.formly.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['$timeout'];

    function Shell($timeout) {
        var vm = this;
    }
})();
