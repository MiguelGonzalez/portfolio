(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = [];

    function SidebarController() {

        /*jshint validthis: true */
		var vm = this;

		vm.expanded = false;

		vm.expandMenu = expandMenu;

		function expandMenu() {
			vm.expanded = !vm.expanded;
		}

	}
})();