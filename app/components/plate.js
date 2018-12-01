"use strict";

const plate = {
    template: `
    <section class="right">
        <section ng-repeat="food in $ctrl.plate track by $index" class="plate-container">
            <p class="plate_item">{{ food }}</p>
        </section>
            <section class="plate"></section>
    </section>
`,
    controller: ["Service", function (Service) {
        const vm = this;
        vm.plate = Service.getPlate();
    }]
}

angular
    .module("App")
    .component("plate", plate)