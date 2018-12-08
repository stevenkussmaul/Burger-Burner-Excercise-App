"use strict";

const results = {
    template: `


    <section ng-click="$ctrl.homePage();" class="title">BURGER BURNER</section>

    <section class="results-wrapper">

        <section class="progress-bar blue stripes">
            <span style="width: 40%"></span>
        </section>
    
        <section class="distance">
           <p class="results-text"> You have <br> <span id="miles"> {{ $ctrl.distance }} </span> <br> miles to {{ $ctrl.activitySelection }} to your car! </p>
        </section>

        <section ng-show="$ctrl.buttonShow" class="btn-container">
            <button ng-click="$ctrl.homePage();" class="restart-btn">Restart</button>
        </section>
        <img class="car" src="app/images/sprite_car.png">
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
        vm.distance = Service.getDistance();
        vm.activitySelection = "walk";
        vm.activitySelection = Service.getActivity();
        vm.buttonShow = false;
          
        vm.countdown = () => {            
            vm.distanceRounded = (vm.distance-.5);
            vm.distance = Math.round( vm.distanceRounded * 10 ) / 10;
            if (vm.distance === 1) {
                document.getElementsByClassName("car")[0].style.animation = "slide 1s forwards";
                // vm.distanceRounded = (vm.distance-.5);
                // vm.distance = Math.round( vm.distanceRounded * 10 ) / 10;
                
            } 
            if (vm.distance <= 0) {
                vm.distance = 0;
                
                $interval.cancel(vm.counter);
                stopAnimate();
                document.getElementsByClassName("skyline-background")[0].style.animation = "none";
                document.getElementsByClassName("results-text")[0].innerHTML = "";
                document.getElementsByClassName("distance")[0].setAttribute("class", "completed");
                document.getElementsByClassName("completed")[0].setAttribute("id", "final-text");
                setTimeout(function(){document.getElementsByClassName("completed")[0].innerHTML = "Congratulations! You burned off all the calories you ate"}, 1000);
                vm.buttonShow = true;    
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

       

       
    }]
    
}

angular.module("App")
        .component("results", results);

