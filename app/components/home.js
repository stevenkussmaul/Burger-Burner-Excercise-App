"use strict";

const home = {
    template: `
    <section class="title">BURGER BURNER</section>

    <section class="instructions">
            <h2 class="instructions-heading">Are you ready to burn??</h2>
            <p class="instructions-text">Find out how far away you need to park in order to burn off those calories you're about to eat!</p>
            <button class="play-btn" ng-click="$ctrl.go();">Burn Those Burgers!!</button>
    </section>
    <?xml version="1.0" standalone="no"?><svg id="flame" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" width="375" height="812"><defs><clipPath id="_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0)"><g style="isolation:isolate"><path id="flame_01" d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="rgb(255,0,0)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></g></svg>
    <?xml version="1.0" standalone="no"?><svg id="flame_yellow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" width="375" height="812"><defs><clipPath id="_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0)"><g style="isolation:isolate"><path id="flame_01" d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="#DD1A08" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(255,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></g></svg>
    `,
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.go = () => {
            $location.path("/food-selection");
        }
        let flameOne = ' M 149.788 513 C 141.665 438.839 110.454 422.333 149.788 383 C 110.454 384.333 35.038 547.5 81.148 600 C 35.038 564 53.788 440.25 74.788 415 C 56.268 425.693 5.788 453 -0.212 600 L -0.212 812.25 L 374.788 811.875 L 374.788 600 C 379.914 545.917 290.727 444.146 263.788 415 C 276.63 454.398 306.72 484.547 282.788 513 C 273.632 438.906 257.835 371.457 187.288 350 C 221.953 394.524 265.861 472.872 217.468 600 C 243.538 439.5 154.37 483.124 149.788 433 C 142.837 447.242 149.788 480 149.788 513 Z ';
        let flameTwo = ' M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z ';
        let flameThree = ' M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z ';
        let flameFour = ' M 149.788 513 C 33 515.25 64.962 446.25 46 422 C 54.462 459 35.038 547.5 81.148 600 C 22.5 572.25 31 549.25 11 521 C 7.75 555.25 36.75 576 -0.212 600 L -0.212 812.25 L 374.788 811.875 L 374.788 600 C 379.914 545.917 345.939 500.146 319 471 C 342.25 564.5 273.75 571.5 282.788 513 C 273.632 438.906 180.547 416.457 110 395 C 144.665 439.524 266.25 519.75 208 629 C 234.07 468.5 115.5 496.5 102 448 C 95.049 462.242 149.788 480 149.788 513 Z ';
        var flameAnimate = anime({
            
            targets: '#flame_01',
            d: [
                { value: [flameOne, flameTwo], duration: 100 },
                { value: [flameThree, flameFour], duration: 100 }, 
            ],
            easing: 'easeInOutElastic',
            direction: 'alternate',
            loop: true
          });
        
        var flameTime = anime.timeline();
        
        flameTime
          .add({
              targets: '#flame_01',
              translateY: -250,
              easing: 'easeOutBack',
              delay: 4000,
              duration: 2000
          });

    }]
}

angular.module("App")
    .component("home", home);

