(function (angular) {
    var module = angular.module('common', []);

    module.directive('selectOnClick', ['$window', function ($window) {
        // Linker function
        return function (scope, element, attrs) {
            element.bind('click', function () {
                if (!$window.getSelection().toString()) {
                    this.setSelectionRange(0, this.value.length)
                }
            });
        };
    }]);
}(angular));