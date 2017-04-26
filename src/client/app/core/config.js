(function() {
    'use strict';

    var core = angular.module('ep.formly.core');

    //=== Toastr ===
    core.config(toastrConfig);

    toastrConfig.$inject = ['toastr'];
    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    //===/Toastr ===

    //=== Config ===
    var config = {
        appErrorPrefix: '[Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Epsilon.Formly',
        imageBasePath: '/images/photos/',
        unknownPersonImageSource: 'unknown_person.jpg'
    };

    core.value('config', config);
    //===/Config ===
    core.config(configure);

    configure.$inject = ['$compileProvider', '$logProvider',
                         'routerHelperProvider'];
    /* @ngInject */
    function configure ($compileProvider, $logProvider,
                         routerHelperProvider) {
        $compileProvider.debugInfoEnabled(false);
    }
})();
