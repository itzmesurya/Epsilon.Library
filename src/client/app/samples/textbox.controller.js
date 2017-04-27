(function () {
    'use strict';

    angular
        .module('ep.formly.samples')
        .controller('textboxTemplate', Templates);

    Templates.$inject = ['$scope', 'logger'];
    /*@ngInject*/
    function Templates($scope, logger) {
        var vm = this;
        vm.submit = function (data) {
            if (vm.myform.$invalid) {
                angular.forEach(vm.myform.$error, function (field) {
                    angular.forEach(field, function (errorField) {
                        errorField.$setTouched();
                    });
                });
            }
            console.log(data);
            console.log(vm.myForm);
        };

        vm.userFields = [{
                key: 'phone',
                id: 'phone',
                type: 'ep-text',
                templateOptions: {
                    label: 'Phone',
                    required: true,
                    maxlength: 30,
                    minlength: 10,
                    validationType: 'number'
                },
                validation: {
                    messages: {
                        required: '\"Phone is required\"',
                        pattern: '\"Invalid Phone Expected Format : xxx-xxx-xxxx\"'
                    },
                    errorExistsAndShouldBeVisible: true
                },
                data: {
                    somePropertyToTriggerTheManipulator: true,
                    theme: 'ace'
                }
            },
            {
                key: 'email',
                type: 'ep-text',
                templateOptions: {
                    label: 'Email',
                    required: true,
                    validationType: 'email'
                },
                validation: {
                    messages: {
                        required: '\"Email is required\"',
                        pattern: '\"Invalid Phone Expected Format : xxx-xxx-xxxx\"'
                    }
                },
                data: {
                    somePropertyToTriggerTheManipulator: true,
                    theme: 'ml'
                }
            }
        ];
        vm.actualFormFields = angular.copy(vm.userFields);
        vm.options = {
            formState: {
                programName: 'Ford Campaigns',
                formName: 'Campaign Detail'
            }
        };

        activate();

        function activate() {
            logger.info('Activated Textbox Validations');
        }
    }
})();
