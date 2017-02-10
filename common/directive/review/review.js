angular.module('common').directive('review', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            reviews:"="
        },
        templateUrl: 'common/directive/review/review.html',
        link: function(scope, element, attrs, fn) {
        }
    };
});
