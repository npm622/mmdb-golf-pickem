(function() {
	'use strict';

	function Leaderboard($http) {
		var liveData = {
			currentRound : "",
			cutLine : "",
			players : []
		};
// https://docs.google.com/spreadsheets/d/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/edit?usp=sharing
		$http.get( 'https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/od6/public/values?alt=json' ).success( function(data) {
			console.log( data );
		} );
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
			playerCount : function(playerName) {
				var count = 0;
				var i;
				for ( i = 0; i < liveData.entries.length; i++ ) {
					var entry = liveData.entries[i];
					var j;
					for ( j = 0; j < entry.picks.length; j++ ) {
						var pick = entry.picks[j];
						if ( pick == playerName ) {
							count++;
						}
					}
				}
				return count;
			}
		};
	}

	function GolfPickemCtrl(Entries, Leaderboard) {
		console.log('hello');
		var vm = this;

		vm.entries = Entries.entries;

		vm.getPlayerSelectionCount = function(playerName) {
			return Entries.playerCount( playerName );
		};
		
		vm.players = Leaderboard.players
		console.log(vm.players);
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

	.factory( 'Leaderboard', [ '$http', Leaderboard ] )

	.controller( 'GolfPickemCtrl', [ 'Entries', 'Leaderboard', GolfPickemCtrl ] );

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <p>This is the Masters Pick \'Em Page</p>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\" ng-repeat=\"entry in golfPickem.entries\">\n            <div class=\"panel panel-brand\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{entry.name}}</h3>\n                </div>\n                <ul class=\"list-group\" ng-repeat=\"pick in entry.picks\">\n                    <li class=\"list-group-item\">\n                        <h4 class=list-group-item-heading\">{{pick}}</h4>\n                        <a href=\"#\" class=\"list-group-item-text\">\n                            <em>Selected {{golfPickem.getPlayerSelectionCount(pick)}} time(s).</em>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");}]);
}());
