"use strict";

const foodSelection = {
    template: `

    
    <section class="buttons">
        <button>view 1</button>
        <button>view 2</button>
        <button>view 2</button>
    </section>

    <section class="selection-plate-container">
        <section class="left" ng-repeat="food in $ctrl.listOfFood track by $index">
            <p> {{ food.name }} </p>
            <button ng-click="$ctrl.add(food)">Add {{food.name}} to plate</button>
        </section>

        <section class="right">
            <section ng-repeat="food in $ctrl.plate track by $index" class="plate-container">
                <p class="plate_item">{{ food.name}}</p>
            </section>

            <section class="plate">
            </section>
        </section>
    </section>


    `,
    bindings: [],
    controller: ["Service", function (Service) {
        const vm = this;

        vm.listOfFood = [];

        
        Service.getBigMac().then(function(result) {
            vm.bigMacObj = result;
            vm.listOfFood[0] = vm.bigMacObj            
        });

        Service.getCoke().then(function(result) {
            vm.cokeObj = result;
            vm.listOfFood[1] = vm.cokeObj            
        });

        Service.getFries().then(function(result) {
            vm.friesObj = result;
            vm.listOfFood[2] = vm.friesObj            
        });

        Service.getApplePie().then(function(result) {
            vm.ApplePieObj = result;
            vm.listOfFood[3] = vm.ApplePieObj            
        });

        Service.getNuggets().then(function(result) {
            vm.nuggetsObj = result;
            vm.listOfFood[4] = vm.nuggetsObj           
        });

        // console.log(test)

        // function cokeObj(result) {
        //     vm.cokeName = result.data.item_name;
        //     vm.cokeCal = result.data.nf_calories;
        //     vm.coke = {
        //         name: vm.cokeName,
        //         cal: vm.cokeCal,
        //         src: "/img/coke.jpg"
        //     };
        //     console.log(vm.coke);
        // }
        // Service.getCoke().then(cokeObj);

        // function friesObj(result) {
        //     vm.friesName = result.data.item_name;
        //     vm.friesCal = result.data.nf_calories;
        //     vm.fries = {
        //         name: vm.friesName,
        //         cal: vm.frieCal,
        //         src: "/img/fries.jpg"
        //     };
        //     console.log(vm.fries);
        // }
        // Service.getFries().then(friesObj);

        // function pieObj(result) {
        //     vm.pieName = result.data.item_name;
        //     vm.pieCal = result.data.nf_calories;
        //     vm.pie = {
        //         name: vm.pieName,
        //         cal: vm.pieCal,
        //         src: "/img/applePie.jpg"
        //     };
        //     console.log(vm.pie);
        // }
        // Service.getApplePie().then(pieObj);

        // function nuggetsObj(result) {
        //     vm.nuggetsName = result.data.item_name;
        //     vm.nuggetsCal = result.data.nf_calories;
        //     vm.nuggets = {
        //         name: vm.nuggetsName,
        //         cal: vm.nuggetsCal,
        //         src: "/img/nuggets.jpg"
        //     };
        //     console.log(vm.nuggets);
        // }
        // Service.getNuggets().then(nuggetsObj);

        vm.listOfFood = [vm.bigMac, vm.coke, vm.fries, vm.pie, vm.nuggets];

        vm.add = (food) => {
            Service.addFood(food)
        }

        vm.plate = Service.getPlate();


    }]

}

angular.module("App")
    .component("foodSelection", foodSelection);

