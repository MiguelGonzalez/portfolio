(function () {
    'use strict';

    angular
        .module('app.sports')
        .factory('sports.dataservice', dataservice);

    dataservice.$inject = [
			'$http'];

    /* @ngInject */
    function dataservice(
    		$http) {

        var service = {
            getActivity: getActivity
        };

        return service;

        function getActivity(activityName) {
            return $http({
                    method: 'GET',
                    url: '/sports/' + activityName + '/data'
                });
        }
    }
})();