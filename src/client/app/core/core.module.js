(function () {
    'use strict';

    angular
        .module('ep.formly.core', [
             // 'epExceptionLogger',
            'blocks.logger',
            'blocks.router',
            /* 3rd-party modules */
            'ui.router',
            'formly',
            'ngSanitize',
            'ngMessages'
        ]);

})();
