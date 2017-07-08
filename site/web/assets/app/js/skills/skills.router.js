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
                url: '/skills',
                config: {
                    templateUrl: 'assets/app/tpl/skills/skills.html',
                    controller: 'SkillsController',
                    controllerAs: 'vm',
                    title: 'skills'
                }
            }
        ];
    }
})();