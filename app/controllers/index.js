(function () {
    var indexControllers = angular.module('indexControllers', ['common']);

    indexControllers.controller('indexController', ['$scope', function ($scope) {
        
    }]);

    indexControllers.controller('menuController', ['$scope', function ($scope) {
        $scope.menuItems = [];
        $scope.menuItems.push({ text: "MD5 Oluştur", url: "#/md5hash" });
        $scope.menuItems.push({ text: "Guid oluştur", url: "#/guid" });
    }]);
    indexControllers.controller('md5Controller', ['$scope', function ($scope) {
        $scope.input = "";
        $scope.output = "";
        $scope.outputUpperCase = "";

        $scope.$watch('input', function (newValue, oldValue) {
            if (!!newValue)
            {
                $scope.output = md5(newValue);
                $scope.outputUpperCase = md5(newValue).toUpperCase();
            }
            else $scope.output = $scope.outputUpperCase = "";
        });
    }]);

    indexControllers.controller('guidController', ['$scope', function ($scope) {
        $scope.input = "";
        var d = guid()
        $scope.output = d;
        $scope.outputUpperCase = d.toUpperCase();

        $scope.newGuid = function () {
            var v = guid();

            $scope.output = v;
            $scope.outputUpperCase = v.toUpperCase();
            //$scope.outputUpperCase = $scope.output.toUpperCase();
        }
    }]);
})();