"use strict";

const results = {
    template: `


    <section ng-click="$ctrl.goHome();" class="title">BURGER BURNER</section>

    <section class="results-wrapper">
    
        <section class="distance">


           <p> you have <p>{{ $ctrl.distance }}</p> miles to {{ $ctrl.activitySelection }}! </p>

           <p></p>

        </section>

        <section class="movement-container">
            <section class="skyline-container">
                <section class="sprite">

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




    }]
}

angular.module("App")
        .component("results", results);

