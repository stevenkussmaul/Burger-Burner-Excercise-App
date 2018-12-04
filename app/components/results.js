"use strict";

const results = {
    template: `


    <section class="title">BURGER BURNER</section>

    <section class="results-wrapper">
    
        <section class="distance">
           <p> you have <p>{{ $ctrl.distance }}</p> miles to {{ $ctrl.activitySelection }}! </p>

           <p></p>

        </section>

        <section class="movement-container">
            <section class="skyline-container">
                <section class="sprite">

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