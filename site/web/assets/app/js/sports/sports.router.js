(function() {
    'use strict';

    angular
        .module('app.sports')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/sports',
                config: {
                    templateUrl: 'assets/app/tpl/sports/sports.html',
                    controller: 'SportsController',
                    controllerAs: 'vm',
                    title: 'sports'
                }
            }
        ];
    }
})();