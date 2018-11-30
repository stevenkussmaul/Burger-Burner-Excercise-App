"use strict";

function Service ($http) {
    const self = this;

    self.getFood = () => {
        return $http({
            url: `https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=406b24c1&appKey=a06e909f350bbd724442d3327180b22d`,
            method: "GET"
        });
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