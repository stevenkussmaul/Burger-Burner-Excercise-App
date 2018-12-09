"use strict";

const home = {
    templateUrl: `app/components/home.html`,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.go = () => {
            $location.path("/food-selection"); // shouldn't this go in the service?
        };
    }]
};

angular
    .module("App")
    .component("home", home);