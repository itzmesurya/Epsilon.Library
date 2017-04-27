(function () {
    'use strict';
    var jsonData = null;
    fillJsonData();

    function fillJsonData() {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http');
        $http.get('/src/client/app/templates/templates.json').then(function (response) {
            jsonData = response.data;
        });
    }
    angular
        .module('ep.formly.templates.textbox')
        .run(['formlyConfig', function (formlyConfig) {
            formlyConfig.templateManipulators.preWrapper.push(function (template, options, scope) {
                return jsonData[options.data.theme][options.type];
            });
            formlyConfig.setType({
                name: 'ep-text',
                template: '<div></div>',
                defaultOptions: {
                    templateOptions: {
                        labelType: 'inline'
                    }
                }
            });
        }]);
})();
