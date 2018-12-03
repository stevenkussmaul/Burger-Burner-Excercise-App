"use strict";

function animeDirective() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            $element.on("click", () => {
                console.log($element);
                // anime({
                //     targets: '#item0',
                //     translateY: 650,
                //     loop: 1,
                //     autoplay: true,
                //     duration: 2000,
                //     elasticity: 0
                // });
                // anime({
                //     targets: '#item1',
                //     translateY: 550,
                //     loop: 1,
                //     autoplay: true,
                //     duration: 2000,
                //     elasticity: 0
                // });
                // anime({
                //     targets: '#item2',
                //     translateY: 450,
                //     loop: 1,
                //     autoplay: true,
                //     duration: 2000,
                //     elasticity: 0,
                // });
                // anime({
                //     targets: '#item3',
                //     translateY: 350,
                //     loop: 1,
                //     autoplay: true,
                //     duration: 2000,
                //     elasticity: 0
                // });
                // anime({
                //     targets: '#item4',
                //     translateY: 250,
                //     loop: 1,
                //     autoplay: true,
                //     duration: 2000,
                //     elasticity: 0
                // });

                const plateTimeline = anime.timeline({
                    loop: 1
                })

                plateTimeline.add({
                    targets: '#item0',
                    translateY: 650,
                    loop: 1,
                    autoplay: true,
                    duration: 2000,
                    elasticity: 0,
                })
                    .add({
                        offset: '-=3000',
                        targets: '.plate',
                        rotate: ['1', '-1'],
                        translateX: [0.1, -0.1],
                        // direction: 'alternate',
                        loop: true,
                        duration: 210,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['1.5', '-1.5'],
                        translateX: [0.2, -0.2],
                        // direction: 'alternate',
                        loop: true,
                        duration: 205,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['2', '-2'],
                        translateX: [0.3, -0.3],
                        // direction: 'alternate',
                        loop: true,
                        duration: 200,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['2.5', '-2.5'],
                        translateX: [0.4, -0.4],
                        // direction: 'alternate',
                        loop: true,
                        duration: 195,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['3', '-3'],
                        translateX: [0.7, -0.7],
                        // direction: 'alternate',
                        loop: true,
                        duration: 190,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['2.5', '-2.5'],
                        translateX: [0.4, -0.4],
                        // direction: 'alternate',
                        loop: true,
                        duration: 195,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['2', '-2'],
                        translateX: [0.3, -0.3],
                        // direction: 'alternate',
                        loop: true,
                        duration: 200,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['1.5', '-1.5'],
                        translateX: [0.2, -0.2],
                        // direction: 'alternate',
                        loop: true,
                        duration: 205,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['1', '-1'],
                        translateX: [0.1, -0.1],
                        // direction: 'alternate',
                        loop: true,
                        duration: 210,
                        easing: 'easeInOutCirc'
                    })
                    .add({
                        targets: '.plate',
                        rotate: ['0.6', '0.6'],
                        translateX: [0, -0],
                        // direction: 'alternate',
                        loop: true,
                        duration: 210,
                        easing: 'easeInOutCirc'
                    })


            })
        }
    }
}

angular.module("App").directive("animeDirective", animeDirective);