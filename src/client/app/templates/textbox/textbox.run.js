(function () {
    'use strict';
    var jsonData = null;
    var appconfig = null;
    fillJsonData();

    function fillJsonData() {
        var initInjector = angular.injector(['ng']); //ep.formly.templates.textbox
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
                if (!options.templateOptions.overrideManipulator) {
                    return jsonData[appconfig.theme][options.type];
                } else {
                    return template;
                }
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
            formlyConfig.setType({
                name: 'ep-text-common',
                template: '<ep-text-common options="options"' +
                    ' model-var="model[options.key]"></ep-text-common>',
                defaultOptions: {
                    templateOptions: {
                        labelType: 'inline',
                        overrideManipulator: true
                    }
                }
            });
        }]);


    angular
        .module('ep.formly.templates.textbox')
        .provider('theme', ThemeProvider);

    function ThemeProvider() {
        this.$get = function () {
            return appconfig.theme;
        };
    }

    // angular
    //     .module('ep.formly.templates.textbox').value('theme', appconfig.theme);

})();
