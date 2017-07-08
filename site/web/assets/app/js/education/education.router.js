(function() {
    'use strict';

    angular
        .module('app.education')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/education',
                config: {
                    templateUrl: 'assets/app/tpl/education/education.html',
                    controller: 'EducationController',
                    controllerAs: 'vm',
                    title: 'education'
                }
            }
        ];
    }
})();