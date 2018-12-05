"use strict";

const activitySelection = {
    template: `
        <section ng-click="$ctrl.homePage();"  class="title">BURGER BURNER</section>
        <section class="exercise-container">
            <section ng-click="$ctrl.walking($ctrl.calorieTotal);" class="walking">Walk</section>
            <section ng-click="$ctrl.bearCrawl($ctrl.calorieTotal);" class="bear-crawl">Bear Crawl</section>
            <section ng-click="$ctrl.skipping($ctrl.calorieTotal);" class="skipping">Skip</section>
        </section>
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

        vm.homePage = () => {
            Service.goHome();
        }

    }]


}

angular
    .module("App")
    .component("activitySelection", activitySelection);