
	var portfolio = angular.module('portfolio', ['ngRoute']);

	portfolio.config(function($routeProvider) {
		$routeProvider
//route for the home page
	    .when('/', {
	      templateUrl: 'views/_homeView.html',
	    })
	    .when('/about', {
	      templateUrl: 'views/_aboutView.html',
	    })
	    .when('/contact', {
	    	templateUrl: 'views/_contactView.html',
	    });
	});
