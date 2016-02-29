
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('wellnessApp', ['ngAnimate', 'ui.router'])

    // configuring our routes
    // =============================================================================
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        // route to show our basic form (/form)
            .state('form', {
                url: '/form',
                templateUrl: 'form.html',
                controller: 'formController'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('form.profile', {
                url: '/profile',
                templateUrl: 'form-profile.html'
            })

            // url will be /form/interests
            .state('form.mood', {
                url: '/mood',
                templateUrl: 'form-mood.html'
            });
            //
            //// url will be /form/payment
            //.state('form.confirmation', {
            //    url: '/confirmation',
            //    templateUrl: 'form-confirmation.html'
            //});

        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/form/profile');
    })


// our controller for the form
    // =============================================================================
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};
        $scope.galleryData = {};

        // function to process the form
        $scope.processForm = function() {
            window.targetPageParamsAll = function() {
                var profile = {};
                var params = {};
				if ($scope.formData.mood != '') {
                	profile.mood = $scope.formData.mood;
					
				} 
				params.profile = profile;	
				
                params.name = $scope.formData.name;
                params.mbox3rdPartyId = $scope.formData.name;
                params.mboxSession = $scope.formData.name;
                return params;
            };
            mboxUpdate('wellnessImageMbox');
        };


    });




