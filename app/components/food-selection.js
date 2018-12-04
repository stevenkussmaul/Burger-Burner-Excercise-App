"use strict";

const foodSelection = {
    template: `

    
    <section class="buttons">
        <button>view 1</button>
        <button>view 2</button>
        <button>view 2</button>
    </section>

    <section class="main-container">
        <section class="left">
            <section anime-directive ng-repeat="food in $ctrl.listOfFood track by $index">
                <p> {{ food.name }} </p>
                <button ng-click="$ctrl.add(food)">Add {{food.name}} to plate</button>
            </section>
            <button ng-click="$ctrl.goActivity();">Go</button>
        </section>

        <section class="right">
            <section class="plate-container">
                <p class="food-item" id="item{{$index}}" ng-repeat="food in $ctrl.plate track by $index" class="plate_item">{{ food.name}}</p>
            </section>


        <section count="0" class="plate">
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
                src: "hello"
            },
            {
                name: "fries",
                cal: 600,
                src: "hello"
            },
            {
                name: "doublecheeseburger",
                cal: 700,
                src: "hello"
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

