(function() {
	'use strict';
	
	function Entries($http) {
		var stubbedData = [ {
			name : 'nick',
			pick1 : 'jordan spieth',
			pick2 : 'phil mickelson'
		}, {
			name : 'deanne',
			pick1 : 'adam scott',
			pick2 : 'bubba watson'
		} ];

		var liveData = {
			feed : null
		};
		$http.get( 'https://spreadsheets.google.com/feeds/list/1UKfT41oI1OQ-GKqFNqtRQmIbZ9_h1_4rbprteJYa1EU/default/public/values?alt=json' ).success( function(data) {
			liveData.feed = data.feed;
		} );

		return {
			stubbed : stubbedData,
			live : liveData
		};
	}

	function GolfPickemCtrl(Entries) {
		var vm = this;

		console.log( Entries.live );
		
		vm.stubbed = Entries.stubbed;
	}

	angular.module( 'mmdb.golfPickem', [ 'ui.router' ] )

	.config( function config($stateProvider) {
		$stateProvider.state( 'golfPickem', {
			url : '/golfPickem',
			templateUrl : 'mmdb-golf-pickem.tmpl.html',
			controller : 'GolfPickemCtrl',
			controllerAs : 'golfPickem',
			data : {
				pageTitle : 'golf pickem'
			}
		} );
	} )

	.factory( 'Entries', [ '$http', Entries ] )

	.controller( 'GolfPickemCtrl', [ 'Entries', GolfPickemCtrl ] );

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <p>This is the Masters Pick \'Em Page</p>\n    </div>\n    <div class=\"row\">\n        <pre>{{golfPickem.stubbed}}</pre>\n    </div>\n</div>");}]);
}());
