"use strict";

const plate = {
    templateUrl: "app/components/plate.html",
    controller: ["Service", function (Service) {
        const vm = this;
        // vm.plate = Service.getPlate();
    }]
}

angular
    .module("App")
    .component("plate", plate)