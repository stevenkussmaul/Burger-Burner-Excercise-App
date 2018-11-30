"use strict";

const foodSelection = {
    template: `
    <section ng-repeat="food in $ctrl.listOfFood">
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


        



    }]
}

angular.module("App")
    .component("foodSelection", foodSelection);