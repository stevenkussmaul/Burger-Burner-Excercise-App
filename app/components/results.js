"use strict";

const results = {
    template: `


    <section ng-click="$ctrl.homePage();" class="title">BURGER BURNER</section>

    <section class="results-wrapper">
    
        <section class="distance">

           <p class="results-text"> You have  <br> <span id="miles"> {{ $ctrl.distance }} </span> <br> miles to {{ $ctrl.activitySelection }} to your car! </p>

        </section>

        <section class="distance2">

            <svg viewBox="0 0 500 500">
                <path class="curve-path" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                    <text class="curve-text" width="500">
                        <textPath xlink:href="#curve">
                            Dangerous Curves Ahead!
                        </textPath>
                    </text>
            </svg>
        </section>

        <section class="movement-container">
            <section class="skyline-container">
                <section class="skyline-background">
                    <section id="{{ $ctrl.activitySelection }}">
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
          
        vm.countdown = () => {            
            vm.distanceRounded = (vm.distance-.2);
            vm.distance = Math.round( vm.distanceRounded * 10 ) / 10;
            if (vm.distance <= 0) {
                vm.distance = 0;
                
                $interval.cancel(vm.counter);
                stopAnimate();

                console.log(document.getElementsByClassName("skyline-background"));
                document.getElementsByClassName("skyline-background")[0].style.animation = "none";

            }
            console.log(vm.distance);
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
            const interval = 400; //100 ms of interval for the setInterval()
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
            const interval = 400; //100 ms of interval for the setInterval()
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
            const interval = 400; //100 ms of interval for the setInterval()
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

        // if (vm.distance === 0) {
        //     console.log("yay")
        //     stopAnimate();
        // }
    }]
    
}

angular.module("App")
        .component("results", results);

