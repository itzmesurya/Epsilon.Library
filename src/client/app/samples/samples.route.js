(function () {
    'use strict';

    angular
        .module('ep.formly.samples')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
                state: 'samples',
                config: {
                    absract: true,
                    template: '<ui-view></ui-view>',
                    url: '/samples'
                }
            },
            {
                state: 'samples.textbox',
                config: {
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
                }
            },
            {
                state: 'samples.grid',
                config: {
                    url: '/grid',
                    templateUrl: 'app/samples/grid.html',
                    controller: 'gridController',
                    controllerAs: 'vm',
                    title: 'Grid'
                }
            }
        ];
    }
})();
