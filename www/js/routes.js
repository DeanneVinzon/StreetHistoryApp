angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.cameraTabDefaultPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/cameraTabDefaultPage.html',
        controller: 'cameraTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cartTabDefaultPage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/cartTabDefaultPage.html',
        controller: 'cartTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('streetHistory2', {
    url: '/streetcdo',
    templateUrl: 'templates/streetHistory2.html',
    controller: 'streetHistory2Ctrl'
  })

  .state('historicalPlaces', {
    url: '/historicalplaces',
    templateUrl: 'templates/historicalPlaces.html',
    controller: 'historicalPlacesCtrl'
  })

  .state('options', {
    url: '/option',
    templateUrl: 'templates/options.html',
    controller: 'optionsCtrl'
  })

  .state('addAStory', {
    url: '/addastory',
    templateUrl: 'templates/addAStory.html',
    controller: 'addAStoryCtrl'
  })

  .state('editHistory', {
    url: '/edithistory',
    templateUrl: 'templates/editHistory.html',
    controller: 'editHistoryCtrl'
  })

  .state('deleteHistory', {
    url: '/deletehistory',
    templateUrl: 'templates/deleteHistory.html',
    controller: 'deleteHistoryCtrl'
  })

  .state('aboutMe', {
    url: '/aboutme',
    templateUrl: 'templates/aboutMe.html',
    controller: 'aboutMeCtrl'
  })

$urlRouterProvider.otherwise('/streetcdo')

  

});