(function() {
	'use strict';
	
	function Entries($http) {
		var liveData = {
			entries : []
		};
		
		var parseEntry = function(entry) {
			var parsed = {};
			parsed.name = entry.title.$t;
			parsed.content = entry.content.$t;
			return parsed;
		}
		
		$http.get( 'https://spreadsheets.google.com/feeds/list/1UKfT41oI1OQ-GKqFNqtRQmIbZ9_h1_4rbprteJYa1EU/default/public/values?alt=json' ).success( function(data) {
			var i;
			for (i = 0; i < data.feed.entry.length; i++) {
				var entry = data.feed.entry[i];
				console.log(entry);
				liveData.entries.push(parseEntry(entry));
			}
		} );

		return {
			entries : liveData.entries
		};
	}

	function GolfPickemCtrl(Entries) {
		var vm = this;

		console.log( Entries.entries );
		
		vm.entries = Entries.entries;
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
