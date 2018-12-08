"use strict";
function landingAnimation() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {

            anime({

            });

        }
    }

}

angular.module("App").directive("landingAnimation", landingAnimation);