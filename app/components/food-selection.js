"use strict";

const foodSelection = {
    template: `
    <section class="food-list" ng-click="$ctrl.add(food.fields.item_name)" ng-repeat="food in $ctrl.listOfFood">
        <p>{{ food.fields.item_name }}</p>
        <p>{{ food.fields.nf_calories }}</p>

    </section>
    `,
    bindings: [],
    controller: ["Service", function(Service) {
        const vm = this;
        
        function foodList(result) {
            vm.listOfFood = result.data.hits;

            console.log(vm.listOfFood);

            console.log(vm.listOfFood["0"].fields.item_name);
            
        }

        
        Service.getFood().then(foodList);

        vm.add = (food) => {
            Service.addFood(food)
        }
        



    }]
}

angular.module("App")
    .component("foodSelection", foodSelection);