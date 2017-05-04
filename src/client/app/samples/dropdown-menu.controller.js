(function () {
    'use strict';

    angular
        .module('ep.formly.samples')
        .controller('dropdownmenuTemplate', Templates);

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
        };
        vm.formModel = {
            menu: [{
                    name: 'About Coupon Library'
                },
                {
                    name: 'Dealer / Retailer Profile'
                },
                {
                    name: 'Coupon Selector'
                },
                {
                    name: 'Summary Area'
                },
                {
                    name: 'Transaction Log'
                },
                {
                    name: 'Contact Us'
                },
                {
                    name: 'Manage Adminstration User'
                },
                {
                    name: 'Add/ Edit Coupon'
                },
                {
                    name: 'Manage Remainder Services'
                },
                {
                    name: 'Manager Library API'
                },
                {
                    name: 'Enrollment Report'
                }
            ]
        };
        vm.userFields = [{
                key: 'menu',
                id: 'Menu',
                type: 'ep-dropdown-menu',
                templateOptions: {
                    label: '<span>Mega</span><span class="caret"></span>',
                    bodyClass: 'full-width p-l-10 p-b-20 p-t-20',
                    dropdownClass: 'dropdown-toggle nav-link',
                    bodyTemplate: '<ul style="list-style: none; columns:3">' +
                        '<li  class="p-t-10 p-b-15" ng-repeat="x in model[options.key]">' +
                        '<a href="#" class="btn-primary-hover">' +
                        '<i class="zmdi zmdi-chevron-right m-r-5">' +
                        '</i>{{x.name}}</a></li></ul>'
                }
            },
            {
                key: 'Notification',
                id: 'Notification',
                type: 'ep-dropdown-menu',
                templateOptions: {
                    label: '<span class="badge mini status danger"></span>' +
                        '<i class="zmdi zmdi-notifications"></i>',
                    bodyClass: 'dropdown-lg-menu dropdown-menu-left dropdown-alt',
                    dropdownClass: 'col-sm-6',
                    bodyTemplate: '<li class="dropdown-menu-header">' +
                        '<ul class="card-actions icons  left-top">' +
                        '<li class="withoutripple">' +
                        '<a href="javascript:void(0)" class="withoutripple">' +
                        '<i class="zmdi zmdi-settings"></i>' +
                        '</a>' +
                        '</li>' +
                        '</ul>' +
                        '<h5>NOTIFICATIONS</h5>' +
                        '<ul class="card-actions icons right-top">' +
                        '<li><a href="javascript:void(0)">' +
                        '<i class="zmdi zmdi-check-all"></i>' +
                        '</a></li></ul></li><li><div class="card">' +
                        '<a href="javascript:void(0)" class="pull-right ' +
                        'dismiss" data-dismiss="close">' +
                        '<i class="zmdi zmdi-close"></i></a>' +
                        '<div class="card-body"><ul class="list-group ">' +
                        '<li class="list-group-item ">' +
                        '<span class="pull-left"><img src="assets/img/profiles/11.jpg" ' +
                        'alt="" class="img-circle max-w-40 m-r-10 "></span>' +
                        '<div class="list-group-item-body">' +
                        '<div class="list-group-item-heading">Dakota Johnson</div>' +
                        '<div class="list-group-item-text">Do you ' +
                        'want to grab some sushi for lunch?</div>' +
                        '</div></li></ul></div></div></li><li><div class="card">' +
                        '<a href="javascript:void(0)" class="pull-right dismiss" ' +
                        'data-dismiss="close">' +
                        '<i class="zmdi zmdi-close"></i>' +
                        '</a><div class="card-body"><ul class="list-group ">' +
                        '<li class="list-group-item ">' +
                        '<span class="pull-left"><img src="assets/img/profiles/07.jpg" alt=""' +
                        ' class="img-circle max-w-40 m-r-10 "></span>' +
                        '<div class="list-group-item-body">' +
                        '<div class="list-group-item-heading">Todd Cook</div>' +
                        '<div class="list-group-item-text">Let\'s schedule ' +
                        'a meeting with our design team at 10am.</div>' +
                        '</div></li></ul></div></div></li><li><div class="card">' +
                        '<a href="javascript:void(0)" class="pull-right ' +
                        'dismiss" data-dismiss="close">' +
                        '<i class="zmdi zmdi-close"></i>' +
                        '</a><div class="card-body"><ul class="list-group ">' +
                        '<li class="list-group-item ">' +
                        '<span class="pull-left"><img src="assets/img/profiles/05.jpg" ' +
                        'alt="" class="img-circle max-w-40 m-r-10 "></span>' +
                        '<div class="list-group-item-body">' +
                        '<div class="list-group-item-heading">Jennifer Ross</div>' +
                        '<div class="list-group-item-text">We\'re looking to ' +
                        'hire two more protypers to our team.</div>' +
                        '</div></li></ul></div></div></li>' +
                        '<li class="dropdown-menu-footer">' +
                        '<a href="javascript:void(0)">' +
                        'All notifications </a></li>'
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
            logger.info('Activated Dropdown Menu');
        }
    }
})();
