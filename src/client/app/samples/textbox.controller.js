(function () {
    'use strict';

    angular
        .module('ep.formly.samples')
        .controller('textboxTemplate', Templates);

    Templates.$inject = ['$scope', 'logger'];
    /*@ngInject*/
    function Templates($scope, logger) {
        var vm = this;
        vm.submit = function () {
            console.log(vm);
        };

        vm.formModel = {
            'phone': '968-895-4578',
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
                    maxlength: 30,
                    minlength: 10,
                    required: true
                },
                validation: {
                    messages: {
                        required: 'hello'
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
        vm.options = {
            formState: {
                programName: 'Ford Campaigns',
                formName: 'Campaign Detail'
            }
        };
    }
})();
