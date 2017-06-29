(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$'];

    function SidebarController($) {

        /*jshint validthis: true */
		var vm = this;

		vm.expanded = isDefaultExpanded();

		vm.expandMenu = expandMenu;

		function expandMenu() {
			vm.expanded = !vm.expanded;
		}

		function isDefaultExpanded() {
			return $(window).width() >= 900;
		}

	}
})();