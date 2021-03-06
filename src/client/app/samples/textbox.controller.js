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

        vm.formModel = {
            'phone': '998-458-1245',
            'email': 'test@test.com'
        };

        vm.userFields = [{
                key: 'testVal',
                id: 'testVal',
                type: 'ep-text-formly',
                templateOptions: {
                    label: 'testVal',
                    maxlength: 30,
                    minlength: 10,
                    required: true
                },
                validation: {
                    messages: {
                        required: 'testVal is required'
                    }
                }
            },
            {
                key: 'phone',
                id: 'phone',
                type: 'ep-text-common',
                templateOptions: {
                    label: 'Phone',
                    required: true,
                    maxlength: 30,
                    minlength: 10
                },
                validation: {
                    messages: {
                        required: '\"Phone is required\"',
                        pattern: '\"Invalid Phone Expected Format : xxx-xxx-xxxx\"'
                    }
                }
            },
            {
                key: 'email',
                type: 'ep-text-common',
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
            logger.info('Activated Textbox');
        }
    }
})();
