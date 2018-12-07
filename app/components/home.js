"use strict";

const home = {
    template: `
    <section class="title">BURGER BURNER</section>

    <section class="instructions">
            <h2 class="instructions-heading">Are you ready to burn??</h2>
            <p class="instructions-text">Find out how far away you need to park in order to burn off those calories you're about to eat!</p>
            <button class="play-btn" ng-click="$ctrl.go();">Burn Those Burgers!!</button>
    </section>
    `,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.go = () => {
            $location.path("/food-selection");
        }

    }]
}

angular.module("App")
    .component("home", home);

