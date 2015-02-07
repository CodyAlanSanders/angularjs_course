(function() { //wrapping it in a closure
	var app = angular.module('gemStore', []);
	
	//Name the controller and then anonymous function
	app controller('StoreController', function(){
		this.product = gem;
	});
	
	//gem variable
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '...'
	}
	
})();  //end closure
