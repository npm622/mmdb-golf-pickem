(function() {
	'use strict';
	
	function Leaderboard($http) {
		var liveData = {
			players : []
		}

		var parseEntry = function(entry) {
			var parsed = {};

			parsed.id = entry.title.$t;

			var keyValues = entry.content.$t.split( "," );
			var i;
			for ( i = 0; i < keyValues.length; i++ ) {
				var key = keyValues[i].substring(0, keyValues[i].indexOf(":")).trim();
				var value = keyValues[i].substring(keyValues[i].indexOf(":") + 1, keyValues[i].length).trim();
				
				parsed[key] = value;
			}

			return parsed;
		}
		
		$http.get('https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values?alt=json').success(function(data){
			var i;
			for ( i = 0; i < data.feed.entry.length; i++ ) {
				var entry = data.feed.entry[i];
				liveData.players.push( parseEntry( entry ) );
			}
		});
		
		return {
			players: liveData.players
		}
	}

	function Entries($http) {
		var liveData = {
			entries : []
		};

		var parseEntry = function(entry) {
			var parsed = {};

			parsed.name = entry.title.$t;

			var contents = entry.content.$t.split( "," );
			var i;
			parsed.picks = [];
			for ( i = 0; i < contents.length; i++ ) {
				parsed.picks.push( contents[i].split( ":" )[1].trim() );
			}

			return parsed;
		}

		$http.get( 'https://spreadsheets.google.com/feeds/list/1UKfT41oI1OQ-GKqFNqtRQmIbZ9_h1_4rbprteJYa1EU/default/public/values?alt=json' ).success( function(data) {
			var i;
			for ( i = 0; i < data.feed.entry.length; i++ ) {
				var entry = data.feed.entry[i];
				liveData.entries.push( parseEntry( entry ) );
			}
		} );

		return {
			entries : liveData.entries,
			entriesByPlayer : function(playerName) {
				var names = [];
				var i;
				for ( i = 0; i < liveData.entries.length; i++ ) {
					var entry = liveData.entries[i];
					var j;
					for ( j = 0; j < entry.picks.length; j++ ) {
						var pick = entry.picks[j];
						if ( pick == playerName ) {
							names.push( entry.name );
						}
					}
				}
				return names;
			}
		};
	}

	function GolfPickemCtrl(Entries, Leaderboard) {
		console.log( 'hello' );
		var vm = this;

		vm.entries = Entries.entries;
		vm.players = Leaderboard.players;

		vm.getPlayerSelectionCount = function(playerName) {
			return Entries.entriesByPlayer( playerName ).length;
		};

		vm.getEntriesWithPlayer = function(playerName) {
			var rs = Entries.entriesByPlayer( playerName );
			return rs;
		}
		
		console.log(vm.players);
	}

	angular.module( 'mmdb.golfPickem', [ 'ui.router', 'ui.bootstrap' ] )

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

	.factory( 'Leaderboard', [ '$http', Leaderboard ] )

	.controller( 'GolfPickemCtrl', [ 'Entries', 'Leaderboard', GolfPickemCtrl ] );

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container\">\n    <div class=\"row spacer\">\n        <div class=\"col-md-3\" ng-repeat=\"entry in golfPickem.entries\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{entry.name}}</h3>\n                </div>\n                <ul class=\"list-group\" ng-repeat=\"pick in entry.picks\">\n                    <li class=\"list-group-item\">\n                        <h4 class=list-group-item-heading\">{{pick}}</h4>\n                        <a uib-popover=\"{{golfPickem.getEntriesWithPlayer(pick)}}\" popover-title=\"Common Entries\" popover-trigger=\"outsideClick\"><em>Selected {{golfPickem.getPlayerSelectionCount(pick)}} time(s).</em></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");}]);
}());
