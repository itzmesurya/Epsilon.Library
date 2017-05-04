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
        .run(['formlyConfig', 'formlyValidationMessages', function (formlyConfig,
         formlyValidationMessages) {
            // formlyValidationMessages.addStringMessage('required', 'This field is required');
            formlyConfig.setWrapper([{
                name: 'errorValidator',
                template: [
                    '<formly-transclude></formly-transclude>',
                    '<div ng-messages="fc.$error">',
                    '<p ng-message="minlength">Your {{to.label}} is too short.</p>',
                    '<p ng-message="maxlength">Your {{to.label}} is too long.</p>',
                    '<p ng-message="required">Your {{to.label}} is required.</p>',
                    '</div>'
                ].join(' ')
            }]);
            formlyConfig.templateManipulators.preWrapper.push(function (template, options, scope) {
                if (options.templateOptions && options.templateOptions.overrideManipulator &&
                 !options.templateOptions.overrideManipulator) {
                    return jsonData[appconfig.theme][options.type];
                } else {
                    return template;
                }
            });
            formlyConfig.setType({
                name: 'ep-text-formly',
                templateUrl: 'app/templates/textbox/textbox.html',
                defaultOptions: {
                    templateOptions: {
                        labelType: 'inline',
                        overrideManipulator: true
                    }
                }
                // wrapper: ['errorValidator']
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
                controller: ['$scope', function ($scope) {
                    var control = $scope.fc;
                }],
                defaultOptions: {
                    templateOptions: {
                        labelType: 'inline',
                        overrideManipulator: true
                    }
                },
                wrapper: ['errorValidator']
            });
            formlyConfig.setType({
                name: 'ep-dropdown-menu',
                // template: '<ep-dropdown-menu options="options"' +
                //     ' model-var="model[options.key]"></ep-dropdown-menu>',
                template: '<ep-dropdown-menu ng-model="model[options.key]"' +
                ' options="options"></ep-dropdown-menu>',
                controller: ['$scope', function ($scope) {
                    var control = $scope.fc;
                }],
                defaultOptions: {
                    templateOptions: {
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
            if (appconfig) {
                return appconfig.theme;
            }
            return null;
        };
    }

    // angular
    //     .module('ep.formly.templates.textbox').value('theme', appconfig.theme);

})();
