angular.module('common').directive('subHeader', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'common/directive/sub-header/sub-header.html',
        link: function (scope, element, attrs, fn) {
            scope.headerList = {
                'Overview': {name: "Overview", active: true},
                'Profile': {name: 'Profile', active: false},
                'About': {name: 'About', active: false},
                'Portfolio': {name: 'Portfolio', active: false},
                'Reviews': {name: 'Reviews', active: false}
            };
            scope.onSelect = function (item) {
                for(var i in scope.headerList){
                    scope.headerList[i].active = false;
                }
                scope.headerList[item].active = true;
            };
        }
    };
});
