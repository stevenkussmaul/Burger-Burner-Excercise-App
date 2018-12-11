"use strict";
function animeDirective($window) {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {

            // dictates the click event, attached to whichever element is assigned this directive (in food-selection)
            $element.on("click", () => {
                // sets element with the class of plate to the variable plate
                const plate = document.querySelector(".plate");
                // sets plate's first attribute value (count) to count
                const count = plate.attributes[0].value;
                // cycles 0-count and runs plateWobble(0 - count)
                for (let i = 0; i <= count; i++) {
                    plateWobble(i);
                }

                function plateWobble(count) {
                    var screenWidth = $window.innerWidth;

                    if (screenWidth <= 767) { // animations for mobile
                        // array of animations
                        const animations = [
                            {
                                targets: '#item0',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['0.9', '-0.9'], duration: 200 },
                                    { value: ['1.1', '-1.1'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.7', '-0.7'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.3', '-0.3'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "70px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item1',
                                rotate: [
                                    { value: ['0.6', '-0.6'], duration: 210 },
                                    { value: ['0.8', '-0.8'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "130px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item2',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "195px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item3',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "260px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item4',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "320px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item5',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "380px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            }
                        ];

                        anime({
                            targets: '.plate',
                            rotate: [
                                { value: ['0.4', '-0.4'], duration: 210 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['1.2', '-1.2'], duration: 185 },
                                { value: ['1', '-1'], duration: 190 },
                                { value: ['0.8', '-0.8'], duration: 195 },
                                { value: ['0.6', '-0.6'], duration: 200 },
                                { value: ['0.4', '-0.4'], duration: 205 },
                                { value: ['0.2', '-0.2'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            easing: 'easeInOutCirc',
                            delay: 550
                        });
                        anime(animations[count]);
                        plate.attributes[0].value++;
                    } else if (screenWidth > 768 && screenWidth <= 1224) { // animations for tablet
                        const tabletAnimations = [
                            {
                                targets: '#item0',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['0.9', '-0.9'], duration: 200 },
                                    { value: ['1.1', '-1.1'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.7', '-0.7'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.3', '-0.3'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "20px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item1',
                                rotate: [
                                    { value: ['0.6', '-0.6'], duration: 210 },
                                    { value: ['0.8', '-0.8'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "120px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item2',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "220px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item3',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "320px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item4',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "420px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item5',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "520px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            }
                        ];

                        anime({
                            targets: '.plate',
                            rotate: [
                                { value: ['0.4', '-0.4'], duration: 210 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['1.2', '-1.2'], duration: 185 },
                                { value: ['1', '-1'], duration: 190 },
                                { value: ['0.8', '-0.8'], duration: 195 },
                                { value: ['0.6', '-0.6'], duration: 200 },
                                { value: ['0.4', '-0.4'], duration: 205 },
                                { value: ['0.2', '-0.2'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            easing: 'easeInOutCirc',
                            delay: 550
                        });
                        anime(tabletAnimations[count]);
                        plate.attributes[0].value++;
                    } else if (screenWidth >= 1224) { //animations for desktop
                        const tabletAnimations = [
                            {
                                targets: '#item0',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['0.9', '-0.9'], duration: 200 },
                                    { value: ['1.1', '-1.1'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.7', '-0.7'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.3', '-0.3'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "85px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item1',
                                rotate: [
                                    { value: ['0.6', '-0.6'], duration: 210 },
                                    { value: ['0.8', '-0.8'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.3', '-1.3'], duration: 185 },
                                    { value: ['1.1', '-1.1'], duration: 190 },
                                    { value: ['0.9', '-0.9'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "150px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item2',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "220px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item3',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "290px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item4',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "360px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            },
                            {
                                targets: '#item5',
                                rotate: [
                                    { value: ['0.5', '-0.5'], duration: 210 },
                                    { value: ['0.7', '-0.7'], duration: 205 },
                                    { value: ['1', '-1'], duration: 200 },
                                    { value: ['1.2', '-1.2'], duration: 195 },
                                    { value: ['1.4', '-1.4'], duration: 185 },
                                    { value: ['1.2', '-1.2'], duration: 190 },
                                    { value: ['1', '-1'], duration: 195 },
                                    { value: ['0.8', '-0.8'], duration: 200 },
                                    { value: ['0.6', '-0.6'], duration: 205 },
                                    { value: ['0.4', '-0.4'], duration: 210 }
                                ],
                                translateX: [
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.7, -0.7], duration: 210 },
                                    { value: [0.4, -0.4], duration: 210 },
                                    { value: [0.3, -0.3], duration: 210 },
                                    { value: [0.2, -0.2], duration: 210 },
                                    { value: [0.1, -0.1], duration: 210 },
                                    { value: [0, -0], duration: 210 }
                                ],
                                bottom: "430px",
                                duration: 210,
                                offset: 500,
                                easing: 'easeInOutCirc'
                            }
                        ];

                        anime({
                            targets: '.plate',
                            rotate: [
                                { value: ['0.4', '-0.4'], duration: 210 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['1.2', '-1.2'], duration: 185 },
                                { value: ['1', '-1'], duration: 190 },
                                { value: ['0.8', '-0.8'], duration: 195 },
                                { value: ['0.6', '-0.6'], duration: 200 },
                                { value: ['0.4', '-0.4'], duration: 205 },
                                { value: ['0.2', '-0.2'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            easing: 'easeInOutCirc',
                            delay: 550
                        });
                        anime(tabletAnimations[count]);
                        plate.attributes[0].value++;
                    }
                };

            })
        }
    }
}



angular.module("App").directive("animeDirective", animeDirective);