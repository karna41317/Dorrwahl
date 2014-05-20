
'use strict';
angular.module('dorrwahl', ['ngRoute','ngAnimate', 'ngTouch']).
		config(['$routeProvider', function($routeProvider) {
			$routeProvider.
					when('/', {templateUrl: 'pages/home.html', controller: 'HomeCtrl', activetab: 'home'}).
					when('/glasin', {templateUrl: 'pages/glasin.html', controller: 'GlasinCtrl', activetab: 'glasin'}).//active tab is activeSmall:part == 'privacy'
					when('/visio', {templateUrl: 'pages/visio.html', controller: 'VisioCtrl', activetab: 'visio'}).
					when('/leverans', {templateUrl: 'pages/vilkor.html', controller: 'LeveransCtrl', activetab: 'leverans'}).
					when('/priser', {templateUrl: 'pages/priser.html', controller: 'PriserCtrl', activetab: 'priser'}).
					when('/contact', {templateUrl: 'pages/contact.html', controller: 'ContactCtrl', activetab: 'contact'}).
					otherwise({redirectTo: '/'});
		  }]).
		controller('HomeCtrl', function($scope) {
		  
		  	}).
		controller('GlasinCtrl', function($scope) {
		  return $scope.hello = 'hello';
		}).
		controller('VisioCtrl', function($scope) {
		  return $scope.hello = 'hello';
		}).
		controller('LeveransCtrl', function($scope) {
		  return $scope.hello = 'hello';
		}).
		controller('PriserCtrl', function($scope) {
		  return $scope.hello = 'hello';
		}).
		controller('ContactCtrl', function($scope) {
		  return $scope.hello = 'hello';
		}).
		run(['$rootScope', '$http', '$browser', '$timeout', "$route", function($scope, $http, $browser, $timeout, $route) {
			$scope.$on("$routeChangeSuccess", function(scope, next, current) {
			  $scope.part = $route.current.activetab;
			});

			// save the 'Contact Us' form
			$scope.save = function() {
			  $scope.loaded = true;
			  $scope.process = true;
			  $http.post('sendemail.php', $scope.message).success(function() {
				$scope.success = true;
				$scope.process = false;
			  });
			};
		  }]).
		config(['$locationProvider', function($location) {
			$location.hashPrefix('!');
		  }]);

/*
.directive('bgSplitter', function() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        orientation: '@'
      },      
      template: '<div class="split-panes {{orientation}}" ng-transclude></div>',
      controller: function ($scope) {
        $scope.panes = [];
        
        this.addPane = function(pane){
          if ($scope.panes.length > 1) 
            throw 'splitters can only have two panes';
          $scope.panes.push(pane);
          return $scope.panes.length;
        };
      },
      link: function(scope, element, attrs) {
        var handler = angular.element('<div class="split-handler"></div>');
        var pane1 = scope.panes[0];
        var pane2 = scope.panes[1];
        var vertical = scope.orientation == 'vertical';
        var pane1Min = pane1.minSize || 0;
        var pane2Min = pane2.minSize || 0;
        var drag = false;
        
        pane1.elem.after(handler);
        
        element.bind('mousemove', function (ev) {
          if (!drag) return;
          
          var bounds = element[0].getBoundingClientRect();
          var pos = 0;
          
          if (vertical) {

            var height = bounds.bottom - bounds.top;
            pos = ev.clientY - bounds.top;

            if (pos < pane1Min) return;
            if (height - pos < pane2Min) return;

            handler.css('top', pos + 'px');
            pane1.elem.css('height', pos + 'px');
            pane2.elem.css('top', pos + 'px');
      
          } else {

            var width = bounds.right - bounds.left;
            pos = ev.clientX - bounds.left;

            if (pos < pane1Min) return;
            if (width - pos < pane2Min) return;

            handler.css('left', pos + 'px');
            pane1.elem.css('width', pos + 'px');
            pane2.elem.css('left', pos + 'px');
          }
        });
    
        handler.bind('mousedown', function (ev) { 
          ev.preventDefault();
          drag = true; 
        });
    
        angular.element(document).bind('mouseup', function (ev) {
          drag = false;
        });
      }
    };
  })
  .directive('bgPane', function () {
    return {
      restrict: 'E',
      require: '^bgSplitter',
      replace: true,
      transclude: true,
      scope: {
        minSize: '='
      },
      template: '<div class="split-pane{{index}}" ng-transclude></div>',
      link: function(scope, element, attrs, bgSplitterCtrl) {
        scope.elem = element;
        scope.index = bgSplitterCtrl.addPane(scope);
      }
    };
  });
*/