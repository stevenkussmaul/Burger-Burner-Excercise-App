"use strict";

const results = {
    template: `


    <section class="title">BURGER BURNER</section>

    <section class="results-wrapper">
    
        <section class="distance">
            you have <p>{{ $ctrl.distance }}</p> miles to {{ $ctrl.activity }}
        </section>

        <section class="movement-container">
            <section class="skyline-container">
                <section class="sprite">
                testy test
                </section>
            </section>
        </section>

    </section>

    `,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.distance = Service.getDistance();

    }]
}

angular.module("App")
        .component("results", results);