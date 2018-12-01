"use strict";

function Service ($http) {
    const self = this;

    const Api_Key_Steve = "a06e909f350bbd724442d3327180b22d"
    const App_ID_Steve = "406b24c1"

    const API_Key_Christina = "351815a6f3a11f22a457ea5541ee668b"
    const API_ID_Christina = "65a4ae7f"

    const API_Key_Betsy = "d3995095c3be44e58b5ff665f5acba04"
    const API_ID_Betsy = "d22fcc12"


    self.getBigMac = () => {
        return $http({
            url: `https://api.nutritionix.com/v1_1/item?id=513fc9e73fe3ffd40300109f&appId=${API_ID_Betsy}&appKey=${API_Key_Betsy}`,
            method: "GET"
        });
    }

    self.getCoke = () => {
        return $http({
            url: `https://api.nutritionix.com/v1_1/item?id=69240416cbc5de1fef6defb3&appId=${API_ID_Betsy}&appKey=${API_Key_Betsy}`,
            method: "GET"
        });
    }

    self.getFries = () => {
        return $http({
            url: `https://api.nutritionix.com/v1_1/item?id=513fc9e73fe3ffd403001121&appId=${API_ID_Betsy}&appKey=${API_Key_Betsy}`,
            method: "GET"
        });
    }

    self.getApplePie = () => {
        return $http({
            url: `https://api.nutritionix.com/v1_1/item?id=513fc9e73fe3ffd40300109a&appId=${API_ID_Betsy}&appKey=${API_Key_Betsy}`,
            method: "GET"
        });
    }

    self.getNuggets = () => {
        return $http({
            url: `https://api.nutritionix.com/v1_1/item?id=513fc9e73fe3ffd4030010a8&appId=${API_ID_Betsy}&appKey=${API_Key_Betsy}`,
            method: "GET"
        });
    }

    self.plate = [];
    self.addFood = (food) => {
        self.plate.push(angular.copy(food));
        console.log(self.plate);
    }
    self.getPlate = () => {
        return self.plate;
    }
// method to add calories together to be used in activity.js
    self.calorieTotal = () => {
        self.sum = 1000;
        console.log(self.sum);
        return self.sum;
        // for (let i=0; i < self.plate.length; i++) {
        //     // cycle through array to get calories and add all together
        //     sum += self.plate[i].cal; // is this correct??
        //     console.log(sum);
        //     return sum;
        // }
    }
}


angular.module("App")
    .service("Service",Service)

    // .then(function(data) {
    //     self.Payload = data.data;            
    //         // console.log(response);
    //         console.log(self.Payload);
    //         return self.Payload;
    //     // return self.testVar;
    //     });