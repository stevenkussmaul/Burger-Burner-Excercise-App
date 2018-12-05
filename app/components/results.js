"use strict";

const results = {
    template: `


    <section class="title">BURGER BURNER</section>

    
    

    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" width="375" height="812"><defs><clipPath id="_clipPath_oiZVaB5pHT5RuL76F3deahTYlMWnkv87"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oiZVaB5pHT5RuL76F3deahTYlMWnkv87)"><g style="isolation:isolate"><path d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="rgb(255,0,0)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/><path d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="rgb(255,0,0)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g><g style="isolation:isolate"/><g style="isolation:isolate"/></g></svg>

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