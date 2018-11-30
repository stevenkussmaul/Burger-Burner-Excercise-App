"use strict";

const foodSelection = {
    template: `

    <section class="food-list" ng-click="$ctrl.add(food)">
       
    <p> {{ $ctrl.bigMac.name }} </p>
    <p> {{ $ctrl.coke.name }} </p>
    <p> {{ $ctrl.fries.name }} </p>
    <p> {{ $ctrl.pie.name }} </p>
    <p> {{ $ctrl.nuggets.name }} </p>

    </section>
    `,
    bindings: [],
    controller: ["Service", function (Service) {
        const vm = this;

        function bigMacObj(result) {
            vm.bigMacName = result.data.item_name;
            vm.bigMacCal = result.data.nf_calories;
            vm.bigMac = {
                name: vm.bigMacName,
                cal: vm.bigMacCal,
                src: "/img/bigMac.jpg"
            };
            console.log(vm.bigMac);

            vm.listOfFood = [vm.bigMac, vm.coke, vm.fries, vm.pie, vm.nuggets];
            console.log(vm.listOfFood)
            console.log(vm.listOfFood[0].name)
        }
        Service.getBigMac().then(bigMacObj);

        function cokeObj(result) {
            vm.cokeName = result.data.item_name;
            vm.cokeCal = result.data.nf_calories;
            vm.coke = {
                name: vm.cokeName,
                cal: vm.cokeCal,
                src: "/img/coke.jpg"
            };
            console.log(vm.coke);
        }
        Service.getCoke().then(cokeObj);

        function friesObj(result) {
            vm.friesName = result.data.item_name;
            vm.friesCal = result.data.nf_calories;
            vm.fries = {
                name: vm.friesName,
                cal: vm.frieCal,
                src: "/img/fries.jpg"
            };
            console.log(vm.fries);
        }
        Service.getFries().then(friesObj);

        function pieObj(result) {
            vm.pieName = result.data.item_name;
            vm.pieCal = result.data.nf_calories;
            vm.pie = {
                name: vm.pieName,
                cal: vm.pieCal,
                src: "/img/applePie.jpg"
            };
            console.log(vm.pie);
        }
        Service.getApplePie().then(pieObj);

        function nuggetsObj(result) {
            vm.nuggetsName = result.data.item_name;
            vm.nuggetsCal = result.data.nf_calories;
            vm.nuggets = {
                name: vm.nuggetsName,
                cal: vm.nuggetsCal,
                src: "/img/nuggets.jpg"
            };
            console.log(vm.nuggets);

        }

        Service.getNuggets().then(nuggetsObj);

        vm.add = (food) => {
            Service.addFood(food)
        }

    }]

}

angular.module("App")
    .component("foodSelection", foodSelection);

