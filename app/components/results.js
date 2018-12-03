"use strict";

const results = {
    template: `

    {{ 2+2 }}
    <section class="distance">
        <p>{{ $ctrl.distance }}</p>
    </section>


    `,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.distance = Service.getDistance();

    }]
}

angular.module("App")
        .component("results", results);