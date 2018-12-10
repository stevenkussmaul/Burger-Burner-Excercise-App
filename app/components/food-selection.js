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

    `,
    bindings: [],
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;
        vm.buttonShow = false;

    //    vm.listOfFood = Service.getFoodItems()
    //         .then((response) => {
    //             console.log(response.data)
    //             vm.listOfFood = response.data})
    //         .catch((err) => {
    //             console.log(err)
    //             console.log("bad API request");
    //         })

        vm.listOfFood = [
            {
                name: "bigmac",
                cal: 563,
                src: "app/images/big-mac.png"
            },
            {
                name: "fries",
                cal: 510,
                src: "app/images/fries.png"
            },
            {
                name: "apple pie",
                cal: 230,
                src: "app/images/apple-pie.png"
            },
            {
                name: "coke",
                cal: 150,
                src: "app/images/coke.png"
            },
            {
                name: "nuggets",
                cal: 440,
                src: "app/images/nuggets.png"
            }
        ];



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
            if (vm.plate.length === 5) {
                setTimeout(function () {
                    $location.path("/activity-selection"), 2000
                })
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

