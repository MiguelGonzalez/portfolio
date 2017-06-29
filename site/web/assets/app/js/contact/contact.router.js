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
        console.log("Get routes");
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'ContactBundle/contact.html', //'app/tpl/contact/contact.html',
                    controller: 'ContactController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();