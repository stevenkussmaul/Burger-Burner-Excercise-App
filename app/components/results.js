"use strict";

const results = {
    template: `

    
    <section class="buttons">
        <button>view 1</button>
        <button>view 2</button>
        <button>view 2</button>
    </section>


    `,
    bindings: [],
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;


    }]
}

angular.module("App")
        .component("results", results);

