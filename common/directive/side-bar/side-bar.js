angular.module('common').directive('sideBar', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            showSideBar: "="
        },
        templateUrl: 'common/directive/side-bar/side-bar.html',
        link: function(scope, element, attrs, fn) {
            // scope.showSideBar = true;

        }
    };
});
