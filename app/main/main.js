'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('home/Card');

  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabsController.html',
      // controller: 'SomeCtrl as ctrl'
    })

     .state('tabsController.card', {
       url: '/Card',
       views: {
         'tab1': {
           templateUrl: 'main/templates/card.html',
           controller: 'cardCtrl as ctrl'
         }
       }
     })

  .state('tabsController.w_Card', {
    url: '/w_card',
    views: {
     //'tab1': {
     //  templateUrl: 'main/templates/w_Card.html',
     //  controller: 'w_CardCtrl'
     // },
      'tab2': {
        templateUrl: 'main/templates/w_Card.html',
        controller: 'w_CardCtrl as ctrl'
      }
    }
  })

  /*The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pendingCards'
      2) Using $state.go programatically:
        $state.go('tabsController.pendingCards');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /home/tab1/pending
      /home/tab2/pending
  */
  .state('tabsController.pendingCards', {
    url: '/pending',
    views: {
      'tab2': {
        templateUrl: 'main/templates/pendingCards.html',
        controller: 'pendingCardsCtrl as ctrl'
      }
    }
  })

  .state('tabsController.completed', {
    url: '/completed',
    views: {
      'tab3': {
        templateUrl: 'main/templates/completed.html',
        controller: 'completedCtrl as ctrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab0': {
        templateUrl: 'main/templates/profile.html',
        controller: 'profileCtrl as ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'main/templates/tabsController.html',
    abstract: true
  })

  .state('profile', {
    url: '/profile1',
    templateUrl: 'main/templates/profile.html',
    controller: 'profileCtrl as ctrl'
  });

});
