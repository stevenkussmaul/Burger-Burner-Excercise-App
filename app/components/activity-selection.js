"use strict";

const activitySelection = {
    template: `
        <section ng-click="$ctrl.walking($ctrl.calorieTotal);" class="walking">Walking</section>
        <section ng-click="$ctrl.bearCrawl($ctrl.calorieTotal);" class="bear-crawl">Bear Crawling</section>
        <section ng-click="$ctrl.skipping($ctrl.calorieTotal);" class="skipping">Skipping</section>
    `,
    bindings: [],
    controller: ["$location", "Service", function ($location, Service) {
        const vm = this;
        // get or define calorie total variable (from service)
        vm.calorieTotal = Service.calorieTotal(); // get plate calorie total from service
        
        vm.walking = (calorieTotal) => {
            Service.getWalking(calorieTotal);
            $location.path("/results");
        }

        vm.bearCrawl = (calorieTotal) => {
            Service.getBearCrawl(calorieTotal);
            $location.path("/results");
        }

        vm.skipping = (calorieTotal) => {
            Service.getSkipping(calorieTotal); //gets total distance needed while doing this activity
            $location.path("/results");
        }

        // vm.walkingCalories;  
        // vm.bearcrawlCalories;
        // vm.hoppingCalories;
        // // ng-click to call function for each activity choice    
        // vm.walking = (calorieTotal) => {
        //     vm.walkingCalories = 80; 
        //     let distance = calorieTotal/vm.walkingCalories;
        //     console.log(distance);
        //     $location.path("/results");
        //     return distance;
        // };
        // vm.bearCrawl = (calorieTotal) => {
        //     vm.bearcrawlCalories = 200;
        //     let distance = calorieTotal/vm.bearcrawlCalories;
        //     console.log(distance);
        //     $location.path("/results");
        //     return distance;
        // };
        // vm.skipping = (calorieTotal) => {
        //     vm.skippingCalories = 300;  //300 calories burned per mile of skipping
        //     let distance = calorieTotal/vm.skippingCalories;
        //     console.log(distance);
        //     $location.path("/results");
        //     return distance;
        // };
    }]


}

angular
    .module("App")
    .component("activitySelection", activitySelection);