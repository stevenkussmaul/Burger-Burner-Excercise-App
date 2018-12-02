"use strict";

angular.module("App", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "food-selection.js"
        })
        .when("/exercise-select", {
            templateUrl : "exercise.js"
        })
        .when("/results", {
            templateUrl : "results.js"
        })
        .otherwise("/", {
            templateUrl : "food-selection.js"
        });
    });