angular.module('common').directive('details', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'common/directive/details/details.html',
        link: function (scope, element, attrs, fn) {
            scope.path = {
                "Products": {
                    "name": "Products",
                    "link": "#"
                }, "Cement Shops": {
                    "name": "Cement Shops",
                    "link": "#"
                }, "vardhman cement": {
                    "name": "vardhman cement",
                    "link": "#",
                    "current": true
                }
            };
            scope.reviews = [{
                name: "Vikas Rawat",
                rating: 4.5,
                comment: "asdf asdf wr sadf t er sdf adsf sr w  sd dv sag qe efSD FADS GER E f FAS FS DF ASD GSDRH RA VAD GRD"
            },
                {
                    name: "Vikas Rawat",
                    rating: 4.5,
                    comment: "asdf asdf wr sadf t er sdf adsf sr w  sd dv sag qe efSD FADS GER E f FAS FS DF ASD GSDRH RA VAD GRD"
                }
            ];
        }
    };
});
