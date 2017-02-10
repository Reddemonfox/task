angular.module('common').directive('overview', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'common/directive/overview/overview.html',
        link: function(scope, element, attrs, fn) {
            scope.minimumProjectBudget = {
                name:"Rs. 50 Lakh",
                value: 50
            };
            scope.advanceParment = true;
            scope.siteCharger = true;
        }
    };
});
