(function () {
    'use strict';

    angular
        .module('ep.formly.templates.textbox')
        .run(['formlyConfig', function (formlyConfig) {
            formlyConfig.setType({
                name: 'ep-text',
                templateUrl: 'app/templates/textbox/textbox.html',
                defaultOptions: {
                    templateOptions: {
                        labelType: 'inline'
                    }
                }
            });
        }]);
})();
