angular.module('common').directive('profile', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        templateUrl: 'common/directive/profile/profile.html',
        link: function (scope, element, attrs, fn) {
            scope.user = {
                name: "Vikas Rawat",
                designation: 'Principle Architect',
                phone: "+91 - 8800 178 211",
                email: "mailme.justdoit@gmail.com",
                education: {
                    "B.Arch": "SALD, S.M.V.D.U. - J&K",
                    "M.Des": "IIT Delhi",
                    "Total Experience": "20 Years",
                    "Corporate Experience": "10 Years"
                }
            };

        }
    };
});
