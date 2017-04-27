(function () {
    'use strict';
    var jsonData = null;
    var appconfig = null;
    fillJsonData();

    function fillJsonData() {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get('$http');
        var $window = initInjector.get('$window');
        $http.get('/src/client/app/templates/templates.json').then(function (response) {
            jsonData = response.data;
        });

        $http.get($window.location.origin + '/appconfig').then(function (response) {
            appconfig = response.data;
        });
    }
    angular
        .module('ep.formly.templates.textbox')
        .run(['formlyConfig', function (formlyConfig) {
            formlyConfig.templateManipulators.preWrapper.push(function (template, options, scope) {
                return jsonData[appconfig.theme][options.type];
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
