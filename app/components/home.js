"use strict";

const home = {
    templateUrl: `app/components/home.html`,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.go = () => {
            $location.path("/food-selection"); 
        };
    }]
};

angular
    .module("App")
    .component("home", home);