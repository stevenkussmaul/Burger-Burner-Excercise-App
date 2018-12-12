"use strict";

const foodSelection = {
    template: `

    <section ng-click= "$ctrl.homePage();" class="title">BURGER BURNER</section>
    
    <h2 class="click-hint">Click to add / delete items</h2>

    <button class="go-btn" ng-show="$ctrl.buttonShow" ng-click="$ctrl.goActivity();">I'm Full</button>

    <section class="main-container">
        
        <section class="left">
            <section class="food-choice" anime-directive ng-repeat="food in $ctrl.listOfFood track by $index">
                <img ng-click="$ctrl.add(food)" src="{{food.src}}" class="food-photos">
            </section>
        </section>

        <section class="right">
            <section class="plate-container">
                <img class="food-item" id="item{{$index}}" ng-repeat="food in $ctrl.plate track by $index" src="{{food.src}}" ng-click="$ctrl.delete($index);">
            </section>

            <section count="0" class="plate">
                <img class="plate-image" src="app/images/plate.png">
            </section>
        </section>
      
    </section>
    <section landing-animation class="landing--container">
    <?xml version="1.0" standalone="no"?><svg class="flame--upper" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" preserveAspectRatio="none" width="375" height="812"><defs><clipPath id="_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0)"><g style="isolation:isolate"><path class="flame flame--upper__path" d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="#DD1A08" vector-effect="non-scaling-stroke" stroke-width="1" stroke="#DD1A08" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></g></svg>
    <?xml version="1.0" standalone="no"?><svg class="flame--lower" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 375 812" preserveAspectRatio="none" width="375" height="812"><defs><clipPath id="_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0"><rect width="375" height="812"/></clipPath></defs><g clip-path="url(#_clipPath_oyAhxijvcyQw9XHLW2oajDuHLX0lvUF0)"><g style="isolation:isolate"><path class="flame flame--lower__path" d=" M 156.36 600 C 148.238 525.839 80.667 479.333 120 440 C 80.667 441.333 51.333 540 81.36 600 C 75.256 574.584 32 571.333 44.52 540.64 C 26 551.333 12.667 561.333 0 600 L 0 812.25 L 375 811.875 L 375 600 C 341.272 596.781 326.322 576.844 330.12 540.16 C 300.667 571.333 301.333 580 293.4 600 C 284.244 525.906 218.667 530 256.44 441.92 C 234.679 486.601 205.333 472.667 217.68 600 C 187.333 481.333 240 375 187.5 350 C 213.333 411.333 100.667 419.333 156.36 600 Z " fill="#ff0000" vector-effect="non-scaling-stroke" stroke-width="1" stroke="#ff0000" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/></g></g></svg>

    </section>
    `,
    bindings: [],
    controller: ["Service", "$location", "$timeout", function (Service, $location, $timeout) {
        const vm = this;
        vm.buttonShow = false;

       vm.listOfFood = Service.getFoodItems()
            .then((response) => {
                console.log(response.data)
                vm.listOfFood = response.data})
            .catch((err) => {
                console.log(err)
                console.log("bad API request");
            })

        // vm.listOfFood = [
        //     {
        //         name: "bigmac",
        //         cal: 563,
        //         src: "app/images/big-mac_final.png"
        //     },
        //     {
        //         name: "fries",
        //         cal: 510,
        //         src: "app/images/fries_final.png"
        //     },
        //     {
        //         name: "sundae",
        //         cal: 230,
        //         src: "app/images/sundae_final.png"
        //     },
        //     {
        //         name: "coke",
        //         cal: 150,
        //         src: "app/images/coke_final.png"
        //     },
        //     {
        //         name: "nuggets",
        //         cal: 440,
        //         src: "app/images/nuggets_final.png"
        //     }
        // ];

        vm.goActivity = () => {
            $location.path("/activity-selection");
        };

        vm.add = (food) => {

            if (vm.plate >= 0) {
                vm.buttonShow = true;
            }

            Service.addFood(food);
            vm.plate = Service.getPlate();
            console.log(vm.plate.length);
            if (vm.plate.length === 6) {
                $timeout(function () {
                    $location.path("/activity-selection")
                }, 1000)
            }
        }

        vm.delete = (index) => {
            Service.deleteFood(index);
        }

        vm.plate = Service.getPlate();

        vm.homePage = () => {
            Service.goHome();
        }
        vm.goActivity = () => {
            $location.path("/activity-selection");
        };

    }]

}

angular.module("App")
    .component("foodSelection", foodSelection);

