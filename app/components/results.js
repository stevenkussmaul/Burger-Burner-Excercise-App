"use strict";

const results = {
    template: `


    <section class="title">BURGER BURNER</section>

    <section class="results-wrapper">
    
        <section class="distance">
           <p class="results-text"> You have {{ $ctrl.distance }} miles to {{ $ctrl.activitySelection }}! </p>

        </section>

        <section class="movement-container">
            <section class="skyline-container">
                <section class="skyline-background">
                    <section class="sprite">
                    </section>
                </section>
            </section>
        </section>

    </section>

    `,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.distance = Service.getDistance();
        vm.activitySelection = Service.getActivity();

        // vm.timer = Service.getTimeRemaining();



    }]
}

angular.module("App")
        .component("results", results);