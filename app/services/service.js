"use strict";

function Service($http, $q, $location) {
    const self = this;

    self.getFoodItems = () => {
        return $http({
            url: "/food",
            method: "GET",
        })
    }


    // self.getListOfFood = () => {
    //     console.log(foodItems);
    //     return self.listOfFood;
    // }


    self.plate = [];
    self.addFood = (food) => {
        self.plate.push(angular.copy(food));
        console.log(angular.element(document.querySelector('#item0'))); // trying to find a way to adjust sizing by the food choice... adding sizing to #item[i] if food.src === *ANDY*
    }
    self.getPlate = () => {
        return self.plate;
    }

    self.deleteFood = (index) => {
        console.log(index);
        self.plate.splice(index, 1);
        console.log(self.plate);
    }

    // method to get calorie total to be used in activity-selection.js
    self.sum = 0;
    self.calorieTotal = () => {
        // cycle through array to get calories and add all together
        if (self.sum === 0) {
            for (let i = 0; i < self.plate.length; i++) {
                console.log(self.plate[i].cal);

                self.sum = self.sum + self.plate[i].cal; // is this correct??
                console.log(self.sum);
            }
        }
        return self.sum;
    }

    self.walkingCalories;
    self.bearCrawlCalories;
    self.skippingCalories;
    self.distance = 0;
    self.activityChoice;

    self.getActivity = () => {
        return self.activityChoice;
    }

    self.getCalories = () => {
        return self.sum;
    }

    self.getDistance = () => {
        return self.distance;
    };

    self.getWalking = (calorieTotal) => {
        self.walkingCalories = 80;
        self.distance = Math.round(calorieTotal / self.walkingCalories);
        console.log(Math.round(self.distance));
        self.activityChoice = "walk";
        console.log(self.activityChoice);
        return self.distance;
    }

    self.getBearCrawl = (calorieTotal) => {
        self.bearCrawlCalories = 200;
        self.distance = Math.round(calorieTotal / self.bearCrawlCalories);
        console.log(self.distance);
        self.activityChoice = "crawl";
        console.log(self.activityChoice);
        // $location.path("/results");
        return self.distance;
    };

    self.getSkipping = (calorieTotal) => {
        self.skippingCalories = 300;  //300 calories burned per mile of skipping
        self.distance = Math.round(calorieTotal / self.skippingCalories);
        console.log(self.distance);
        self.activityChoice = "skip";
        console.log(self.activityChoice);
        return self.distance;
    };

    self.goHome = () => {
        console.log("YAY")
        self.plate = [];
        self.activityChoice = null;
        $location.path("/food-selection");
    }


}


angular.module("App")
    .service("Service", Service)