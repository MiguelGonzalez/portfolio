(function() {
    'use strict';

    angular
        .module('app.sports')
        .controller('StatisticsController', StatisticsController);

    StatisticsController.$inject = [
    	'NgMap',
    	'sports.dataservice',
    	'$routeParams'];

    function StatisticsController(
    		NgMap,
    		dataservice,
    		$routeParams) {
        /*jshint validthis: true */
		var vm = this;


		init();

		function init() {
			NgMap.getMap().then(function(map) {
			    vm.map = map;
			});

			dataservice
				.getActivity($routeParams.activityName)
				.then(function(data) {
					data = data.data.data;

					vm.name = data.name;

					var points = data.points;

					var path = [];

					for(var i=0; i<points.length; i++) {
						path[path.length] = [
							parseFloat(points[i].coordinates[1]),
							parseFloat(points[i].coordinates[0])
						];
					}

					vm.center = data.center.lat + ', ' + data.center.lon;

					vm.zoomFactor = getZoomFactor(data.rect);

					vm.path = path;
				});
		}

		function getZoomFactor(rect) {
			var GLOBE_WIDTH = 256;
			var west = rect.minLongitud;
			var east = rect.maxLongitud;

			var north = rect.maxLatitud;
			var south = rect.minLatitud;

			var angle = east - west;
			if (angle < 0) {
			    angle += 360;
			}
			var angle2 = north - south;
			if (angle2 > angle) {
				angle = angle2;
			}

			return Math.round(Math.log(960 * 360 / angle / GLOBE_WIDTH) / Math.LN2);
		}
	}
})();