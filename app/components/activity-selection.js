"use strict";

const activitySelection = {
    template: `
        <section ng-click="$ctrl.homePage();"  class="title">BURGER BURNER</section>
        <h2 class="activity-header">Choose an activity</h2>
        <section class="exercise-container">
<<<<<<< HEAD
            <section ng-click="$ctrl.walking($ctrl.calorieTotal);" class="walking">
            <p class="walk-text">Walk</p></section>
            <section ng-click="$ctrl.bearCrawl($ctrl.calorieTotal);" class="bear-crawl">
            <p class="crawl-text">Crawl</p></section>
            <section ng-click="$ctrl.skipping($ctrl.calorieTotal);" class="skipping">
            <p class="skip-text">Skip</p></section>
=======
            <section ng-click="$ctrl.walking($ctrl.calorieTotal);" class="walking">Walk</section>
            <section ng-click="$ctrl.bearCrawl($ctrl.calorieTotal);" class="bear-crawl">Crawl</section>
            <section ng-click="$ctrl.skipping($ctrl.calorieTotal);" class="skipping">Skip</section>
>>>>>>> master
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