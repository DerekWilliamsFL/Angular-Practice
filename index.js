var app = angular.module('priceTracker', []);

app.controller('MainCtrl', function($scope) {

	$scope.books = 
	[
		{
			name: 'Cat in the Hat',
			price: 30,
			description: 'The story centers on a tall anthropomorphic cat, who wears a red and white-striped hat and a red bow tie. The Cat shows up at the house of Sally and her brother one rainy day when their mother is away.',
		},
		{
			name: 'Horton hears a Who',
			price: 25,
			description: 'The book tells the story of Horton the Elephant, who while splashing in a pool, hears a small speck of dust talking to him.,'
		}
	],

	$scope.orderTotal = function() {

		var order = order + this.price;
		return order;
	}

});
