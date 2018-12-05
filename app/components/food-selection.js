"use strict";

const foodSelection = {
    template: `

    <section class="title">BURGER BURNER</section>

    <section class="main-container">

        <section class="left">
            <section class="food-choice" anime-directive ng-repeat="food in $ctrl.listOfFood track by $index">
                <img ng-click="$ctrl.add(food)" src="{{ food.src }}" class="food-photos">
            </section>
            <button class="go-btn" ng-click="$ctrl.goActivity();">Go</button>
        </section>

        <section class="instructions" ng-show="true">
            <h2>Are you ready to burn??</h2>
            <p class="instructions-text">Let's see how far away you need to park in order to burn off those calories you're about to eat!</p>
            <p class="instructions-text-2">Start by adding food to your plate.</p>
            <p class="instructions-text-3">Next, choose your transportation style.</p>
            <button class="play-btn">Burn Those Burgers!!</button>
        </section>

        <section class="right">
            <section class="plate-container">
                <img class="food-item" id="item{{$index}}" ng-repeat="food in $ctrl.plate track by $index" src="{{ food.src}}">
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

        vm.listOfFood = [
            {
                name: "bigmac",
                cal: 500,
                src: "app/images/big-mac.png"
            },
            {
                name: "fries",
                cal: 600,
                src: "app/images/fries.png"
            },
            {
                name: "apple pie",
                cal: 700,
                src: "app/images/apple-pie.png"
            },
            {
                name: "coke",
                cal: 700,
                src: "app/images/coke.png"
            },
            {
                name: "nuggets",
                cal: 700,
                src: "app/images/nuggets.png"
            }
        ];

        vm.goActivity = () => {
            $location.path("/activity-selection");
        };

        // Service.getBigMac().then(function(result) {
        //     vm.bigMacObj = result;
        //     vm.listOfFood[0] = vm.bigMacObj            
        // });

        // Service.getCoke().then(function(result) {
        //     vm.cokeObj = result;
        //     vm.listOfFood[1] = vm.cokeObj            
        // });

        // Service.getFries().then(function(result) {
        //     vm.friesObj = result;
        //     vm.listOfFood[2] = vm.friesObj            
        // });

        // Service.getApplePie().then(function(result) {
        //     vm.ApplePieObj = result;
        //     vm.listOfFood[3] = vm.ApplePieObj            
        // });

        // Service.getNuggets().then(function(result) {
        //     vm.nuggetsObj = result;
        //     vm.listOfFood[4] = vm.nuggetsObj           
        // });

        // vm.listOfFood = [vm.bigMac, vm.coke, vm.fries, vm.pie, vm.nuggets];

        vm.add = (food) => {
            Service.addFood(food)
        }

        vm.plate = Service.getPlate();


    }]

}

angular.module("App")
    .component("foodSelection", foodSelection);

