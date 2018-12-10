"use strict";

function Service ($http, $q, $location) {
    const self = this;

    // const API_Key_Steven = "a06e909f350bbd724442d3327180b22d"
    // const API_ID_Steven = "406b24c1"

    // const API_Key_Christina = "351815a6f3a11f22a457ea5541ee668b"
    // const API_ID_Christina = "65a4ae7f"


    // const API_Key_Andy = "cde9ecce359832533378e10a19e686d1"
    // const API_Key_Andy_2 = "c18ae83e69b94a5a398054f4418f681b"
    // const API_ID_Andy = "fcb77a4d"

    // const API_Key_Betsy = "d3995095c3be44e58b5ff665f5acba04"
    // const API_ID_Betsy = "d22fcc12"

    // const API_ID = API_ID_Steven
    // const API_Key = API_Key_Steven


    // const ID_bigMac = "513fc9e73fe3ffd40300109f";
    // const ID_coke = "69240416cbc5de1fef6defb3";
    // const ID_fries = "513fc9e73fe3ffd403001121";
    // const ID_applePie = "513fc9e73fe3ffd40300109a";
    // const ID_nuggets = "513fc9e73fe3ffd4030010a8";

    // const API_version_2 = false;

    // if (API_version_2) {

    // //call to API_v2.0
    //     self.getBigMac = () => {

    //         return $http({
    //             url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_bigMac}`,
    //             method: "GET",
    //             headers: {
    //                 "x-app-id": API_ID,
    //                 "x-app-key": API_Key
    //             }
    //         }).then((result) => {
    //             self.bigMacData = result;
    //             self.bigMacName = result.data.foods[0].food_name;
    //             self.bigMacCal = result.data.foods[0].nf_calories;
    //             self.bigMac = {
    //                 name: self.bigMacName,
    //                 cal: self.bigMacCal,
    //                 src: "app/images/big-mac.png"
    //             }
    //             console.log(result);
    //             console.log(self.bigMac);
    //             console.log(self.bigMacName);
    //             console.log(self.bigMacCal);
                
    //             return self.bigMac;

    //         })
    //     }

    //     //call to API_v2.0
    //     self.getCoke = () => {

    //         return $http({
    //             url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_coke}`,
    //             method: "GET",
    //             headers: {
    //                 "x-app-id": API_ID,
    //                 "x-app-key": API_Key
    //             }
    //             }).then((result) => {
    //                     self.cokeData = result;
    //                     self.cokeName = result.data.foods[0].food_name;
    //                     self.cokeCal = result.data.foods[0].nf_calories;
    //                     self.coke = {
    //                         name: self.cokeName,
    //                         cal: self.cokeCal,
    //                         src: "app/images/coke.png"
    //                     }
    //                     return self.coke;
    //                 })
    //     }

    //     //call to API_v2.0
    //     self.getFries = () => {

    //         return $http({
    //             url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_fries}`,
    //             method: "GET",
    //             headers: {
    //                 "x-app-id": API_ID,
    //                 "x-app-key": API_Key
    //             }
    //             }).then((result) => {
    //                     self.friesData = result;
    //                     self.friesName = result.data.foods[0].food_name;
    //                     self.friesCal = result.data.foods[0].nf_calories;
    //                     self.fries = {
    //                         name: self.friesName,
    //                         cal: self.friesCal,
    //                         src: "app/images/fries.png"
    //                     }
    //                     return self.fries;
    //                 })

    //     }

    //     //call to API_v2.0
    //     self.getApplePie = () => {

    //         return $http({
    //             url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_applePie}`,
    //             method: "GET",
    //             headers: {
    //                 "x-app-id": API_ID,
    //                 "x-app-key": API_Key
    //             }
    //             }).then((result) => {
    //                     self.applePieData = result;
    //                     self.applePieName = result.data.foods[0].food_name;
    //                     self.applePieCal = result.data.foods[0].nf_calories;
    //                     self.applePie = {
    //                         name: self.applePieName,
    //                         cal: self.applePieCal,
    //                         src: "app/images/apple-pie.png"
    //                     }
    //                     return self.applePie;
    //                 })

    //     }

    //     //call to API_v2.0
    //     self.getNuggets = () => {

    //         return $http({
    //             url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_nuggets}`,
    //             method: "GET",
    //             headers: {
    //                 "x-app-id": API_ID,
    //                 "x-app-key": API_Key
    //             }
    //             }).then((result) => {
    //                     self.nuggetsData = result;
    //                     self.nuggetsName = result.data.foods[0].food_name;
    //                     self.nuggetsCal = result.data.foods[0].nf_calories;
    //                     self.nuggets = {
    //                         name: self.nuggetsName,
    //                         cal: self.nuggetsCal,
    //                         src: "app/images/nuggets.png"
    //                     }
    //                     return self.nuggets;
    //                 })
    //     }

    // } else if (false) {

    //     //call to API_v1_1
    //     self.getBigMac = () => {
    //         return $http({
    //             url: `https://api.nutritionix.com/v1_1/item?id=${ID_bigMac}&appId=${API_ID}&appKey=${API_Key}`,
    //             method: "GET",
    //         }).then((result) => {
    //             self.bigMacName = result.data.item_name;
    //             self.bigMacCal = result.data.nf_calories;
    //             self.bigMac = {
    //                 name: self.bigMacName,
    //                 cal: self.bigMacCal,
    //                 src: "app/images/big-mac.png"
    //             }
    //             console.log(self.bigMac);
                
    //         return self.bigMac;
    
    //         })
    //     }

    //     //call to API_v1_1
    //     self.getCoke = () => {
    //         return $http({
    //             url: `https://api.nutritionix.com/v1_1/item?id=${ID_coke}&appId=${API_ID}&appKey=${API_Key}`,
    //             method: "GET",
    //         }).then((result) => {
    //             self.cokeName = result.data.item_name;
    //             self.cokeCal = result.data.nf_calories;
    //             self.coke = {
    //                 name: self.cokeName,
    //                 cal: self.cokeMacCal,
    //                 src: "app/images/coke.png"
    //             }
    //             console.log(self.coke);
                
    //         return self.coke;
    
    //         })
    //     }

    //     self.getFries = () => {
    //         return $http({
    //             url: `https://api.nutritionix.com/v1_1/item?id=${ID_fries}&appId=${API_ID}&appKey=${API_Key}`,
    //             method: "GET",
    //         }).then((result) => {
    //             self.friesName = result.data.item_name;
    //             self.friesCal = result.data.nf_calories;
    //             self.fries = {
    //                 name: self.friesName,
    //                 cal: self.friesCal,
    //                 src: "app/images/fries.png"
    //             }
    //             console.log(self.fries);
                
    //         return self.fries;
    
    //         })
    //     }

    //     self.getApplePie = () => {
    //         return $http({
    //             url: `https://api.nutritionix.com/v1_1/item?id=${ID_applePie}&appId=${API_ID}&appKey=${API_Key}`,
    //             method: "GET",
    //         }).then((result) => {
    //             self.applePieName = result.data.item_name;
    //             self.applePieCal = result.data.nf_calories;
    //             self.applePie = {
    //                 name: self.applePieName,
    //                 cal: self.applePieCal,
    //                 src: "app/images/apple-pie.png"
    //             }
    //             console.log(applePie);
                
    //         return self.applePie;
    
    //         })
    //     }

    //     self.getNuggets = () => {
    //         return $http({
    //             url: `https://api.nutritionix.com/v1_1/item?id=${ID_nuggets}&appId=${API_ID}&appKey=${API_Key}`,
    //             method: "GET",
    //         }).then((result) => {
    //             self.nuggetsName = result.data.item_name;
    //             self.nuggetsCal = result.data.nf_calories;
    //             self.nuggets = {
    //                 name: self.nuggetsName,
    //                 cal: self.nuggetsCal,
    //                 src: "app/images/nuggets.png"
    //             }
    //             console.log(self.nuggets);
                
    //         return self.nuggets;
    
    //         })
    //     }


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
            for (let i=0; i < self.plate.length; i++) {
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

    self.getDistance = () => {
        return self.distance;
      };

    self.getWalking = (calorieTotal) => {
        self.walkingCalories = 80; 
        self.distance = Math.round(calorieTotal/self.walkingCalories);
        console.log(Math.round(self.distance));
        self.activityChoice = "walk";
        console.log(self.activityChoice);
        return self.distance;
    }

    self.getBearCrawl = (calorieTotal) => {
        self.bearCrawlCalories = 200;
        self.distance = Math.round(calorieTotal/self.bearCrawlCalories);
        console.log(self.distance);
        self.activityChoice = "crawl";
        console.log(self.activityChoice);
        // $location.path("/results");
        return self.distance;
    };

    self.getSkipping = (calorieTotal) => {
        self.skippingCalories = 300;  //300 calories burned per mile of skipping
        self.distance = Math.round(calorieTotal/self.skippingCalories);
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
    .service("Service",Service)