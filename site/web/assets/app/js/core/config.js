(function() {
    'use strict';

	angular
		.module('app.core')
		.config(config);

	config.$inject = [
			'$interpolateProvider',
			'$routeProvider',
			'routehelperConfigProvider',
			'$locationProvider'];

	/* @ngInject */
	function config(
			$interpolateProvider,
			$routeProvider,
			routehelperConfigProvider,
			$locationProvider) {

		$interpolateProvider
			.startSymbol('{[{')
			.endSymbol('}]}');

		routehelperConfigProvider.config.$routeProvider = $routeProvider;
		$locationProvider.html5Mode(true);
	}
})();