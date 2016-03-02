(function() {
	'use strict';
	
	function Entries($http) {
		var liveData = {
			entries : []
		};
		
		var parseEntry = function(entry) {
			var parsed = {};
			
			parsed.name = entry.title.$t;
			
			var contents = entry.content.$t.split(",");
			var i;
			for ( i = 0; i < contents.length; i++) {
				var keyValue = contents[i].split(":");
				
				var key = keyValue[0].trim();
				var value = keyValue[1].trim();
				
				parsed[key] = value;
			}

			console.log( parsed );
			return parsed;
		}
		
		$http.get( 'https://spreadsheets.google.com/feeds/list/1UKfT41oI1OQ-GKqFNqtRQmIbZ9_h1_4rbprteJYa1EU/default/public/values?alt=json' ).success( function(data) {
			var i;
			for (i = 0; i < data.feed.entry.length; i++) {
				var entry = data.feed.entry[i];
				liveData.entries.push(parseEntry(entry));
			}
		} );

		return {
			entries : liveData.entries
		};
	}

	function GolfPickemCtrl(Entries) {
		var vm = this;

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

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <p>This is the Masters Pick \'Em Page</p>\n    </div>\n    <div class=\"row\">\n        <pre ng-repeat=\"entry in golfPickem.entries\">{{entry}}</pre>\n    </div>\n</div>");}]);
}());
