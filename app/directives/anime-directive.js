"use strict";

function animeDirective() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            $element.on("click", () => {
                console.log($element);
                var elementOne = $element[0].parentElement.nextElementSibling.children[0].children[1];
                setTimeout(
                    function () {
                        console.log("timeout ran");
                        var element = $element[0].parentElement.nextElementSibling.children[0].children[0];
                        var angElement = angular.element(element);
                        angElement.addClass("no-animation");
                    }, 2000);

                function plateWobble() {
                    const timeline = anime.timeline({
                        loop: 1,
                        autoplay: true,
                        delay: 2000
                    })
                        .add({
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
                            // direction: 'alternate',
                            loop: true,
                            easing: 'easeInOutCirc'
                        })
                        .add({
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
                            // direction: 'alternate',
                            loop: true,
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'
                        })


                        .add({
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
                            // direction: 'alternate',
                            loop: true,
                            offset: 1000,
                            easing: 'easeInOutCirc'
                        })
                    timeline.add({
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
                        // direction: 'alternate',
                        loop: true,
                        offset: 1500,
                        easing: 'easeInOutCirc'
                    })

                }
                plateWobble();
            })
        }
    }

}

angular.module("App").directive("animeDirective", animeDirective);