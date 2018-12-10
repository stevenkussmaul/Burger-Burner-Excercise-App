"use strict";

const results = {
    template: `


    <section ng-click="$ctrl.homePage();" class="title">BURGER BURNER</section>

    <section class="results-wrapper">
        <section class="progress-bar-container">
            <section class="results-plate">
                <img class="results-item" ng-repeat="food in $ctrl.plate track by $index" src="{{ food.src}}">
            </section>
            <section class="progress-bar">
                <span id="progress" ></span>
            </section>
        </section>
    
        <section class="distance">
           <p class="results-text"> You have <br> <span id="miles"> {{ $ctrl.distance }} </span> <br> miles to {{ $ctrl.activitySelection }} to your car! </p>
        </section>

        <section ng-show="$ctrl.buttonShow" class="btn-container">
            <button ng-click="$ctrl.homePage();" class="restart-btn">Restart</button>
        </section>

        <section class="results-container">
            <section class="movement-container">
                <section class="skyline-container">
                    <section class="skyline-background">
                        <section id="{{ $ctrl.activitySelection }}">
                        </section>
                    </section>
                </section>
            </section>
        </section>

    </section>
    `,
    controller: ["Service", "$location", "$interval", function (Service, $location, $interval) {
        const vm = this;
        vm.totalDistance = Service.getDistance();
        vm.activitySelection = Service.getActivity();
        vm.calorieSum = Service.getCalories();
        console.log(vm.calorieSum);
        vm.buttonShow = false;
        vm.decrementDistance = vm.totalDistance;
        
          
        vm.countdown = () => {      
            vm.element = document.getElementById("progress");  
            vm.decrementDistance = (vm.decrementDistance-.5);
            vm.distance = Math.round( vm.decrementDistance * 10 ) / 10;
            vm.width = ((vm.distance / vm.totalDistance)*100); 
            if (vm.distance <= 0) {
                vm.element.style.width = (100 - vm.width) + '%'; 
                vm.distance = 0;
                $interval.cancel(vm.counter);
                stopAnimate();
                document.getElementsByClassName("skyline-background")[0].style.animation = "none";
                document.getElementsByClassName("results-text")[0].innerHTML = "";
                document.getElementsByClassName("distance")[0].setAttribute("class", "completed");
                document.getElementsByClassName("completed")[0].setAttribute("id", "final-text");
                setTimeout(function(){document.getElementsByClassName("completed")[0].innerHTML = `Congratulations! You burned off all the calories you ate!`}, 1000);
                vm.buttonShow = true;
            } else { 
                vm.element.style.width = (100 - vm.width) + '%'; 
                console.log(vm.width);
                // vm.distanceRounded--;
                } 

        }

        vm.counter = $interval(function (){
            vm.countdown();
        }, 500) 

        var tID; //we will use this variable to clear the setInterval()

        function stopAnimate() {
            clearInterval(tID);
        } //end of stopAnimate()

    
        function animateSkip() {

            var position = 160; //start position for the image slicer
            const interval = 200; //100 ms of interval for the setInterval()
            const diff = 160; //diff as a variable for position offset

            tID = setInterval(() => {

                document.getElementById("skip").style.backgroundPosition =
                    `-${position}px 0px`;

                if (position < 3200) {
                    position = position + diff;
                }
                //we increment the position by 320 each time
                else {
                    position = 160;
                }
                //reset the position to 320px, once position exceeds 3200px

            }, interval); //end of setInterval
        } //end of animateScript()

        function animateCrawl() {

            var position = 240; //start position for the image slicer
            const interval = 200; //100 ms of interval for the setInterval()
            const diff = 240; //diff as a variable for position offset

            tID = setInterval(() => {

                document.getElementById("crawl").style.backgroundPosition =
                    `-${position}px 0px`;

                if (position < 2880) {
                    position = position + diff;
                }
                //we increment the position by 320 each time
                else {
                    position = 240;
                }
                //reset the position to 320px, once position exceeds 3200px

            }, interval); //end of setInterval
        } //end of animateScript()

        function animateWalk() {

            var position = 160; //start position for the image slicer
            const interval = 200; //100 ms of interval for the setInterval()
            const diff = 160; //diff as a variable for position offset

            tID = setInterval(() => {

                document.getElementById("walk").style.backgroundPosition =
                    `-${position}px 0px`;

                if (position < 3840) {
                    position = position + diff;
                }
                //we increment the position by 320 each time
                else {
                    position = 160;
                }
                //reset the position to 320px, once position exceeds 3200px

            }, interval); //end of setInterval
        } //end of animateScript()

        if (vm.activitySelection === "walk") {
            animateWalk();

        } else if (vm.activitySelection === "crawl") {
            animateCrawl();

        } else if (vm.activitySelection === "skip") {
            animateSkip();
  
        };

        vm.homePage = () => {
            Service.goHome();
        }


        vm.plate = Service.getPlate();
        

       

       
    }]
    
}

angular.module("App")
        .component("results", results);

