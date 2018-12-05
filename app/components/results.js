"use strict";

const results = {
    template: `


    <section ng-click="$ctrl.goHome();" class="title">BURGER BURNER</section>

    <section class="results-wrapper">
    
        <section class="distance">

           <p class="results-text"> You have {{ $ctrl.distance }} miles to {{ $ctrl.activitySelection }}! </p>

        </section>

        <section class="movement-container">
            <section class="skyline-container">
                <section class="skyline-background">
                    <section id="sprite">
                    </section>
                </section>
            </section>
        </section>

    </section>

    `,
    controller: ["Service", "$location", "$interval", function (Service, $location, $interval) {
        const vm = this;
        vm.distance = Service.getDistance();
        vm.activitySelection = Service.getActivity();
          
        vm.countdown = () => {            
            vm.distanceRounded = (vm.distance-.2);
            vm.distance = Math.round( vm.distanceRounded * 100 ) / 100;
            if (vm.distance <= 0) {
                vm.distance = 0;
                
                $interval.cancel(vm.counter);
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


        function animateScript() {

            var position = 320; //start position for the image slicer
            const interval = 400; //100 ms of interval for the setInterval()
            const diff = 320; //diff as a variable for position offset

            tID = setInterval(() => {

                document.getElementById("sprite").style.backgroundPosition =
                    `-${position}px 0px`;

                if (position < 3200) {
                    position = position + diff;
                }
                //we increment the position by 320 each time
                else {
                    position = 320;
                }
                //reset the position to 320px, once position exceeds 3200px

            }, interval); //end of setInterval
        } //end of animateScript()

        animateScript();
    }]
}

angular.module("App")
        .component("results", results);

