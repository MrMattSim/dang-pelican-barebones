var a = angular.module("drawApp", [], function($interpolateProvider) {
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        }
    );

var datafactory = a.factory('datafactory', function($http, $q) {
    return {
        getData : function() {

            /*
            var deferred = $q.defer();

            $http.get('nest_tree.json').success(function(data) {
                deferred.resolve(data);
            }).error(function(){
                console.log('error loading nest_tree.json');
                deferred.reject();
            });

            return deferred.promise;
            */

        }
    }
});

function drawController($scope,datafactory) {
    $scope.initialize = function() {
    }
}

// the first few arguments of the list should correspond to the Angular-namespace stuff to feed to controller
var c = a.controller("drawController", ["$scope", "datafactory", drawController]);

