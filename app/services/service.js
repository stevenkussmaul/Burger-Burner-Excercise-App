"use strict";

function Service ($http, $q) {
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

    // const API_ID = API_ID_Christina
    // const API_Key = API_Key_Christina


    // const ID_bigMac = "513fc9e73fe3ffd40300109f";
    // const ID_coke = "69240416cbc5de1fef6defb3";
    // const ID_fries = "513fc9e73fe3ffd403001121";
    // const ID_applePie = "513fc9e73fe3ffd40300109a";
    // const ID_nuggets = "513fc9e73fe3ffd4030010a8";

    // //testing function
    // // self.getBigMac = () => {
    // //     self.bigMac = {
    // //         name: "big mac",
    // //         cal: 540,
    // //         src: "/img/bigMac.jpg"
    // //     }
    // //     return self.bigMac;

    // // }

    // //call to API_v2.0
    // self.getBigMac = () => {

    //     return $http({
    //         url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_bigMac}`,
    //         method: "GET",
    //         headers: {
    //             "x-app-id": API_ID,
    //             "x-app-key": API_Key
    //         }

    //     }).then((result) => {
    //         self.bigMacData = result;
    //         self.bigMacName = result.data.foods[0].food_name;
    //         self.bigMacCal = result.data.foods[0].nf_calories;
    //         self.bigMac = {
    //             name: self.bigMacName,
    //             cal: self.bigMacCal,
    //             src: "/img/bigMac.jpg"
    //         }
    //         console.log(result);
    //         console.log(self.bigMac);
    //         console.log(self.bigMacName);
    //         console.log(self.bigMacCal);
            
    //         return self.bigMac;

    //     })

    // }


    // //call to API_v1_1
    // self.getBigMac = () => {
    //     return $http({
    //         url: `https://api.nutritionix.com/v1_1/item?id=513fc9e73fe3ffd40300109f&appId=${API_ID}&appKey=${API_Key}`,
    //         method: "GET",
    //     }).then((result) => {
    //         self.bigMacName = "big mac" //result.data.item_name;
    //         self.bigMacCal = 1000 //result.data.nf_calories;
    //         self.bigMac = {
    //             name: vm.bigMacName,
    //             cal: vm.bigMacCal,
    //             src: "/img/bigMac.jpg"
    //         }
    //         console.log(self.bigMac);
            
    //     return self.bigMac;

    //     })
    // }

    // //call to API_v2.0
    // self.getCoke = () => {

    //     return $http({
    //         url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_coke}`,
    //         method: "GET",
    //         headers: {
    //             "x-app-id": API_ID,
    //             "x-app-key": API_Key
    //         }
    //         }).then((result) => {
    //                 self.cokeData = result;
    //                 self.cokeName = result.data.foods[0].food_name;
    //                 self.cokeCal = result.data.foods[0].nf_calories;
    //                 self.coke = {
    //                     name: self.cokeName,
    //                     cal: self.cokeCal,
    //                     src: "/img/coke.jpg"
    //                 }
    //                 return self.coke;
    //             })
    // }

    // //call to API_v2.0
    // self.getFries = () => {

    //     return $http({
    //         url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_fries}`,
    //         method: "GET",
    //         headers: {
    //             "x-app-id": API_ID,
    //             "x-app-key": API_Key
    //         }
    //         }).then((result) => {
    //                 self.friesData = result;
    //                 self.friesName = result.data.foods[0].food_name;
    //                 self.friesCal = result.data.foods[0].nf_calories;
    //                 self.fries = {
    //                     name: self.friesName,
    //                     cal: self.friesCal,
    //                     src: "/img/fries.jpg"
    //                 }
    //                 return self.fries;
    //             })

    // }

    //  //call to API_v2.0
    //  self.getApplePie = () => {

    //     return $http({
    //         url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_applePie}`,
    //         method: "GET",
    //         headers: {
    //             "x-app-id": API_ID,
    //             "x-app-key": API_Key
    //         }
    //         }).then((result) => {
    //                 self.applePieData = result;
    //                 self.applePieName = result.data.foods[0].food_name;
    //                 self.applePieCal = result.data.foods[0].nf_calories;
    //                 self.applePie = {
    //                     name: self.applePieName,
    //                     cal: self.applePieCal,
    //                     src: "/img/ApplePie.jpg"
    //                 }
    //                 return self.applePie;
    //             })

    // }

    // //call to API_v2.0
    // self.getNuggets = () => {

    //     return $http({
    //         url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${ID_nuggets}`,
    //         method: "GET",
    //         headers: {
    //             "x-app-id": API_ID,
    //             "x-app-key": API_Key
    //         }
    //         }).then((result) => {
    //                 self.nuggetsData = result;
    //                 self.nuggetsName = result.data.foods[0].food_name;
    //                 self.nuggetsCal = result.data.foods[0].nf_calories;
    //                 self.nuggets = {
    //                     name: self.nuggetsName,
    //                     cal: self.nuggetsCal,
    //                     src: "/img/nuggets.jpg"
    //                 }
    //                 return self.nuggets;
    //             })
    // }


    self.plate = [];
    self.addFood = (food) => {
        self.plate.push(angular.copy(food));
        console.log(self.plate);
    }
    self.getPlate = () => {
        return self.plate;
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
    self.ActivityChoice;

    self.getActivity = () => {
        return self.activityChoice;
    }

    self.getDistance = () => {
        return self.distance;
      };

    self.getWalking = (calorieTotal) => {
        self.walkingCalories = 80; 
        self.distance = calorieTotal/self.walkingCalories;
        console.log(self.distance);
        self.activityChoice = "Walking";
        console.log(self.activityChoice);
        return self.distance;
    }

    self.getBearCrawl = (calorieTotal) => {
        self.bearCrawlCalories = 200;
        self.distance = calorieTotal/self.bearCrawlCalories;
        console.log(self.distance);
        self.activityChoice = "Crawling";
        console.log(self.activityChoice);
        // $location.path("/results");
        return self.distance;
    };

    self.getSkipping = (calorieTotal) => {
        self.skippingCalories = 300;  //300 calories burned per mile of skipping
        self.distance = calorieTotal/self.skippingCalories;
        console.log(self.distance);
        self.activityChoice = "Skipping";
        console.log(self.activityChoice);
        return self.distance;
    };

    self.goHome = () => {
        $location.path("/");
    }


}


angular.module("App")
    .service("Service",Service)