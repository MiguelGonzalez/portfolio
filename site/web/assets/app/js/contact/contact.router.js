(function() {
    'use strict';

    angular
        .module('app.contact')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'assets/app/tpl/contact/contact.html',
                    controller: 'ContactController',
                    controllerAs: 'vm',
                    title: 'contact'
                }
            }
        ];
    }
})();