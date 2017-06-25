(function() {
    'use strict';

	angular
		.module('app.core')
		.config(config);

	config.$inject = ['$interpolateProvider'];

	/* @ngInject */
	function config($interpolateProvider) {
		$interpolateProvider
			.startSymbol('{[{')
			.endSymbol('}]}');
	}
})();