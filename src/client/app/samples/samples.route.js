(function () {
        'use strict';

        angular
            .module('ep.formly.samples')
            .config(router);

        router.$inject = ['$stateProvider', '$urlRouterProvider'];
            /* @ngInject */
            function router($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/samples/textbox');
                $stateProvider.state('samples', {
                    absract: true,
                    template: '<ui-view class="shuffle-animation"></ui-view>',
                    url: '/samples'
                }).
                state('samples.textbox', {
                    url: '/textbox',
                    templateUrl: 'app/samples/textbox.html',
                    controller: 'textboxTemplate',
                    controllerAs: 'vm',
                    title: 'Textbox',
                    settings: {
                        nav: 6,
                        menu: {
                            cssState: 'active'
                        },
                        mini: {
                            content: '<i class="ace-icon fa fa-list-alt"></i>',
                            buttonColor: 'purple',
                        },
                        icon: 'list-alt'
                    }
                });
            }
        })();
