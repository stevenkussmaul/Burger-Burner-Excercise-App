"use strict";

angular.module("App", ["ngRoute"])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
        .when("/", {
            template: "<food-selection></food-selection>"
        })
        .when("/activity-selection", {
            template: "<activity-selection></activity-selection>"
        })
        .when("/results", {
            template: "<results></results>"
        })
        .when("/foodSelection", {
            template: "<results></results>"
        })
        .otherwise("/", {
            template: "<food-selection></food-selection>"
        });
    }]);