var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	// .when('/', {
	// 	controller:'BooksController',
	// 	templateUrl: 'views/books.html'
	// })
	// .when('/books', {
	// 	controller:'BooksController',
	// 	templateUrl: 'views/books.html'
	// })
	// .when('/books/details/:id',{
	// 	controller:'BooksController',
	// 	templateUrl: 'views/book_details.html'
	// })
	// .when('/books/add',{
	// 	controller:'BooksController',
	// 	templateUrl: 'views/add_book.html'
	// })
	// .when('/books/edit/:id',{
	// 	controller:'BooksController',
	// 	templateUrl: 'views/edit_book.html'
	// })
	// expositores
	.when('/', {
		controller:'ExpositoresController',
		templateUrl: 'views/expositores/expositores.html'
	})
	.when('/expositores', {
		controller:'ExpositoresController',
		templateUrl: 'views/expositores/expositores.html'
	})
	.when('/expositores/details/:id',{
		controller:'ExpositoresController',
		templateUrl: 'views/expositores/expositor_details.html'
	})
	.when('/expositores/add',{
		controller:'ExpositoresController',
		templateUrl: 'views/expositores/add_expositor.html'
	})
	.when('/expositores/edit/:id',{
		controller:'ExpositoresController',
		templateUrl: 'views/expositores/edit_expositor.html'
	})
	.otherwise({
		redirectTo: '/'
	});


});