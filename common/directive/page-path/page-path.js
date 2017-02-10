angular.module('common').directive('pagePath', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            path:"="
        },
        templateUrl: 'common/directive/page-path/page-path.html',
        link: function(scope, element, attrs, fn) {


        }
    };
});
