"use strict";
function landingAnimation() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            let flameOne = ' M 149.788 513 C 141.665 438.839 110.454 422.333 149.788 383 C 110.454 384.333 35.038 547.5 81.148 600 C 35.038 564 53.788 440.25 74.788 415 C 56.268 425.693 5.788 453 -0.212 600 L -0.212 812.25 L 374.788 811.875 L 374.788 600 C 379.914 545.917 290.727 444.146 263.788 415 C 276.63 454.398 306.72 484.547 282.788 513 C 273.632 438.906 257.835 371.457 187.288 350 C 221.953 394.524 265.861 472.872 217.468 600 C 243.538 439.5 154.37 483.124 149.788 433 C 142.837 447.242 149.788 480 149.788 513 Z ';
            let flameTwo = ' M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z ';
            let flameThree = ' M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z ';
            let flameFour = ' M 149.788 513 C 33 515.25 64.962 446.25 46 422 C 54.462 459 35.038 547.5 81.148 600 C 22.5 572.25 31 549.25 11 521 C 7.75 555.25 36.75 576 -0.212 600 L -0.212 812.25 L 374.788 811.875 L 374.788 600 C 379.914 545.917 345.939 500.146 319 471 C 342.25 564.5 273.75 571.5 282.788 513 C 273.632 438.906 180.547 416.457 110 395 C 144.665 439.524 266.25 519.75 208 629 C 234.07 468.5 115.5 496.5 102 448 C 95.049 462.242 149.788 480 149.788 513 Z ';
            let flameBox = ' M 150.212 250 L 114.212 250 L 81.36 250 L 36.212 250 L 0 250 L 0 350 L 375 349.823 L 375 250 L 346.212 250 L 300.212 250 L 264 250 L 217.68 250 L 187.712 250 L 150.212 250 Z ';
            
            let landingTimeline = anime.timeline(); 
            // let showTitle = false;

            let flameLoop = anime({
                targets: '.flame',
                d: [
                    { value: [flameOne, flameTwo], duration: 100 },
                    { value: [flameThree, flameFour], duration: 100 },
                ],
                easing: 'easeInOutElastic',
                direction: 'alternate',
                loop: true
            });

            // document.querySelector('.title').setAttribute()

            landingTimeline
                .add({
                    targets: '.intro--are',
                    top: '-0.8em',
                    scaley: [
                        { value: 10, duration: 1800, delay: 500, easing: 'easeOutExpo' },
                        { value: 1, duration: 900, elasticity: 300 }
                    ],
                    // delay: 2000,
                    duration: 2000,
                    easing: 'easeInOutQuad'
                })
                .add({
                    targets: '.intro--u',
                    top: '-0.8em',
                    // delay: 1000,
                    duration: 500,
                    offset: '-=100',

                    easing: 'easeInOutQuad'
                })
                .add({
                    targets: '.intro--ready',
                    left: '0em',
                    // delay: 1000,
                    duration: 500,
                    offset: '-=100',

                    easing: 'easeInOutQuad'
                })
                .add({
                    targets: '.intro--to',
                    right: '2.5em',
                    // rotate: '1turn',
                    // delay: 1000,
                    duration: 500,
                    offset: '-=200',

                    easing: 'easeInOutQuad'
                })
                .add({
                    targets: '.intro--burn',
                    // left: '0em',
                    top: '1.23em',
                    // scale: [ { value: -2 }, { value: 2 }, { value: 1 } ],
                    // rotate: '1turn',
                    // delay: 1000,
                    duration: 500,
                    offset: '-=100',

                    easing: 'easeInOutQuad'
                })
                .add({
                    targets: '.intro--qs',
                    top: '1.02em',
                    // left: '0em',
                    // fontSize: [ { value: '5em' }, { value: '8em' }, { value: '12.1em' } ],
                    // scale: [ { value: -2 }, { value: 2 }, { value: 1 } ],
                    // rotate: '1turn',
                    // delay: 1000,
                    duration: 500,
                    offset: '-=450',
                    easing: 'easeInOutQuad',
                    // elasticity: 100
                })
                .add({
                    targets: '.intro',
                    opacity: 0,
                    easing: 'easeOutBack',
                    delay: 1000,
                    duration: 2000
                })
                .add({
                    targets: '.flame--upper', 
                    translateY: -350,
                    easing: 'easeInQuad',
                    // delay: 4000,
                    offset: '-=2500',
                    duration: 300
                })
                .add({
                    targets: '.flame--lower', 
                    translateY: -340,
                    fill: '#DD1A08',
                    easing: 'easeInOutQuad',
                    // delay: 4000,
                    offset: '-=2400',
                    duration: 200
                })
                .add({
                    targets: '.flame--upper',
                    fill: '#ff0000',
                    easing: 'easeInQuad',
                    // delay: 4000,
                    offset: '-=2000',
                    duration: 2000
                })
                .add({
                    targets: '.landing--container',
                    backgroundColor: '#ff0000',
                    offset: '-=2400',
                    duration: 1000
                })
                .add({
                    targets: '#home--title',
                    // fontSize: '40px',
                    // padding: '20px 0px 15px 0px',
                    opacity: 1,
                    zIndex: 5,
                    offset: '-=1000',
                    elasticity: 100,
                    duration: 500
                })
                .add({
                    targets: '.instructions',
                    height: '200px',
                    width: '300px',
                    duration: 800,
                    elasticity: 100,
                    offset: '-=300'
                })
                .add({
                    targets: '.instructions__text',
                    opacity: 1,
                    duration: 500,
                    offset: '-=300'

                })
                .add({
                    targets: '.instructions__btn',
                    opacity: 1,
                    height: '30px',
                    width: '85%',
                    fontSize: '16px',
                    duration: 800,
                    elasticity: 100,
                    offset: '-=300'
                });

            

                // .add({
                //     targets: '.flame',
                //     stroke: '#DD1A08',
                //     duration: 1000,
                //     offset: '-=800'
                // })
                
                // flameLoop = false;

                // .add({
                //     targets: 'body',
                //     backgroundColor: '#DD1A08',
                //     duration: 1000
                // })
                // .add({
                //     targets: '#flame',
                //     stroke: '#DD1A08',
                //     duration: 1000,
                //     offset: '-=800'
                // })


                // .add({
                //     targets: 'flameLoop',
                //     loop: false
                // });
                
                // .add(flameLoop = ({loop: false}))
                // .add({
                // });


            // anime({
            //     let flameOne = ' M 149.788 513 C 141.665 438.839 110.454 422.333 149.788 383 C 110.454 384.333 35.038 547.5 81.148 600 C 35.038 564 53.788 440.25 74.788 415 C 56.268 425.693 5.788 453 -0.212 600 L -0.212 812.25 L 374.788 811.875 L 374.788 600 C 379.914 545.917 290.727 444.146 263.788 415 C 276.63 454.398 306.72 484.547 282.788 513 C 273.632 438.906 257.835 371.457 187.288 350 C 221.953 394.524 265.861 472.872 217.468 600 C 243.538 439.5 154.37 483.124 149.788 433 C 142.837 447.242 149.788 480 149.788 513 Z ';
            //     let flameTwo = ' M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z ';
            //     let flameThree = ' M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z ';
            //     let flameFour = ' M 149.788 513 C 33 515.25 64.962 446.25 46 422 C 54.462 459 35.038 547.5 81.148 600 C 22.5 572.25 31 549.25 11 521 C 7.75 555.25 36.75 576 -0.212 600 L -0.212 812.25 L 374.788 811.875 L 374.788 600 C 379.914 545.917 345.939 500.146 319 471 C 342.25 564.5 273.75 571.5 282.788 513 C 273.632 438.906 180.547 416.457 110 395 C 144.665 439.524 266.25 519.75 208 629 C 234.07 468.5 115.5 496.5 102 448 C 95.049 462.242 149.788 480 149.788 513 Z ';

            //         targets: '#flame_01',
            //         d: [
            //             { value: [flameOne, flameTwo], duration: 100 },
            //             { value: [flameThree, flameFour], duration: 100 }, 
            //         ],
            //         easing: 'easeInOutElastic',
            //         direction: 'alternate',
            //         loop: true
            // });

            // var flameTime = anime.timeline();

            // flameTime
            //     .add({
                    // targets: '#flame_01',
                    // translateY: -250,
                    // easing: 'easeOutBack',
                    // delay: 4000,
                    // duration: 2000
            //     });

        // });

    }
};

};

angular.module("App").directive("landingAnimation", landingAnimation);