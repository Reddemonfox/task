angular.module('common').directive('header', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            showSideBar:"="
        },
        templateUrl: 'common/directive/header/header.html',
        link: function(scope, element, attrs, fn) {


        }
    };
});
