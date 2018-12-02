"use strict";

const activitySelection = {
    template: `
        <section ng-click="$ctrl.walking($ctrl.calorieTotal)" class="walking">Walking</section>
        <section ng-click="$ctrl.bearCrawl($ctrl.calorieTotal)" class="bear-crawl">Bear Crawling</section>
        <section ng-click="$ctrl.hopping($ctrl.calorieTotal)" class="hopping">Hopping</section>
    `,
    bindings: [],
    controller: ["$location", "Service", function ($location, Service) {
        const vm = this;
        // get or define calorie total variable (from service)
        vm.calorieTotal = Service.calorieTotal(); // get plate calorie total from service
        vm.walkingCalories;  
        vm.bearcrawlCalories;
        vm.hoppingCalories;
        // ng-click to call function for each activity choice
        vm.walking = (calorieTotal) => {
            vm.walkingCalories = 80; 
            let distance = calorieTotal/vm.walkingCalories;
            console.log(distance);
            return distance;
            // route to final page
            // $location.path('/path/to/final-screen');
        };
        vm.bearCrawl = (calorieTotal) => {
            vm.bearcrawlCalories = 200;
            let distance = calorieTotal/vm.bearcrawlCalories;
            console.log(distance);
            return distance;
            // route to final page
            // $location.path('/path/to/final-screen');
        };
        vm.hopping = (calorieTotal) => {
            vm.hoppingCalories = 300;
            let distance = calorieTotal/vm.hoppingCalories;
            console.log(distance);
            return distance;
            // route to final page
            // $location.path('/path/to/final-screen');
        };
    }]


}

angular
    .module("App")
    .component("activitySelection", activitySelection);