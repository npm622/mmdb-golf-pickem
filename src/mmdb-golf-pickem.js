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
			parsed.picks = [];
			for ( i = 0; i < contents.length; i++) {
				parsed.picks.push(contents[i].split(":")[1].trim());
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
			entries : liveData.entries,
			playerCount : function(playerName) {
				var count = 0;
				var i;
				var j;
				for (i = 0; i < liveData.entries.length; i++) {
					var entry = liveData.entries[i];
					for (j = 0; j < entry.picks; j++) {
						var pick = entry.picks[j];
						if (pick == playerName) {
							count++;
						}
					}
				}
				return count;
			}
		};
	}

	function GolfPickemCtrl(Entries) {
		var vm = this;

		vm.entries = Entries.entries;
		
		vm.getPlayerSelectionCount = function(playerName) {
			return Entries.playerCount(playerName);
		};
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

	 @@templateCache
}());
