angular.module('common').directive('portfolio', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        templateUrl: 'common/directive/portfolio/portfolio.html',
        link: function(scope, element, attrs, fn) {
            scope.data = [
                {
                    name: "KL House",
                    address: "Meerut, Residence",
                    description: "  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf",
                    images: [1,2,3,4,5,6]
                },
                {
                    name: "Alcott Showroom",
                    address: "Meerut, Commercial",
                    description: "  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf  sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf sadf sdf asdf asdf sadf sdaf asdf sdf asdf sadf adsf asdf adsf",
                    images: [1,2,3,4,5,6]
                }
            ];

        }
    };
});
