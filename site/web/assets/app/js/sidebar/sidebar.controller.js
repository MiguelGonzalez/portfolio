(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$', '$route'];

    function SidebarController($, $route) {

        /*jshint validthis: true */
		var vm = this;

		vm.expanded = isDefaultExpanded();

		vm.isCurrent = isCurrent;
		vm.expandMenu = expandMenu;

		function expandMenu() {
			vm.expanded = !vm.expanded;
		}

		function isDefaultExpanded() {
			return $(window).width() >= 900;
		}

		function isCurrent(route) {
			if($route.current === undefined) {
				return false;
			}

			return $route.current.title === route;
		}
	}
})();