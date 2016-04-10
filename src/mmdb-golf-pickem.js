(function() {
	'use strict';

	function GoogleSheetsScraper($http) {
		var results = {
			entries : [],
			selections : [],
			players : []
		};

		var leaderboardUrl = 'https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values?alt=json';
		var entriesUrl = 'https://spreadsheets.google.com/feeds/list/1UKfT41oI1OQ-GKqFNqtRQmIbZ9_h1_4rbprteJYa1EU/default/public/values?alt=json';

		var parseEntriesEntry = function(entry) {
			var parsed = {};

			parsed.name = entry.title.$t;

			var contents = entry.content.$t.split( "," );
			parsed.picks = [];
			for ( var i = 0; i < contents.length; i++ ) {
				parsed.picks.push( contents[i].split( ":" )[1].trim() );
			}

			return parsed;
		}

		var parseLeaderboardEntry = function(entry) {
			var parsed = {};

			parsed.id = entry.title.$t;

			var keyValues = entry.content.$t.split( "," );
			for ( var i = 0; i < keyValues.length; i++ ) {
				var key = keyValues[i].substring( 0, keyValues[i].indexOf( ":" ) ).trim();
				var value = keyValues[i].substring( keyValues[i].indexOf( ":" ) + 1, keyValues[i].length ).trim();

				parsed[key] = value;
			}

			return parsed;
		}

		$http.get( entriesUrl ).success( function(data) {
			for ( var i = 0; i < data.feed.entry.length; i++ ) {
				results.entries.push( parseEntriesEntry( data.feed.entry[i] ) );
			}

			for ( var i = 0; i < results.entries.length; i++ ) {
				var entry = results.entries[i];

				for ( var j = 0; j < entry.picks.length; j++ ) {
					var foundMatch = false;
					for ( var k = 0; k < results.selections.length; k++ ) {
						if ( entry.picks[j] === results.selections[k].name ) {
							results.selections[k].pickedBy.push( entry.name );
							foundMatch = true;
						}
					}

					if ( !foundMatch ) {
						var player = {};
						player.name = entry.picks[j];
						player.pickedBy = [];
						player.pickedBy.push( entry.name );

						results.selections.push( player );
					}
				}
			}
		} );

		$http.get( leaderboardUrl ).success( function(data) {
			for ( var i = 0; i < data.feed.entry.length; i++ ) {
				results.players.push( parseLeaderboardEntry( data.feed.entry[i] ) );
			}
		} );

		return {
			entries : results.entries,
			selections : results.selections,
			players : results.players
		}
	}

	function GolfPickemCtrl(GoogleSheetsScraper) {
		var vm = this;

		// data
		vm.entries = GoogleSheetsScraper.entries;
		vm.players = GoogleSheetsScraper.players;
		vm.selections = GoogleSheetsScraper.selections;

		// view logic
		vm.ENTRIES = 'entries';
		vm.SCOREBOARD = 'scoreboard';

		vm.display = vm.SCOREBOARD;

		vm.isDisplayActive = function(displayInQuestion) {
			return vm.display === displayInQuestion;
		}
	}

	function PickemEntriesCtrl() {
		var vm = this;

		// view logic
		vm.BY_ENTRANT = "by_entrant";
		vm.BY_PLAYER = "by_player";

		vm.display = vm.BY_ENTRANT;

		vm.isDisplayActive = function(displayInQuestion) {
			return vm.display === displayInQuestion;
		}
	}

	function Scoreboard() {
		return {
			entriesByPlayer : {}
		};
	}

	function ScoreboardCtrl(Scoreboard, EntriesByEntrant) {
		var vm = this;

		vm.displayRoundScore = function(r) {
			var pipesRegex = /\|(.*?)\|/;
			var match = pipesRegex.exec( r );
			return match[1];
			;
		}

		vm.getEntriesWithPlayer = function(playerName) {
			return EntriesByEntrant.entriesByPlayer( playerName, vm.entries );
		}
		
		vm.isSelectedPlayer = function(playerName) {
			return vm.getEntriesWithPlayer(playerName).length > 0;
		}
	}

	function EntriesByEntrant() {
		return {
			entriesByPlayer : function(playerName, entries) {
				var names = [];
				for ( var i = 0; i < entries.length; i++ ) {
					var entry = entries[i];
					for ( var j = 0; j < entry.picks.length; j++ ) {
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

	function EntriesByEntrantCtrl(EntriesByEntrant) {
		var vm = this;

		vm.getPlayerSelectionCount = function(playerName) {
			return EntriesByEntrant.entriesByPlayer( playerName, vm.entries ).length;
		};

		vm.getEntriesWithPlayer = function(playerName) {
			return EntriesByEntrant.entriesByPlayer( playerName, vm.entries );
		}
	}

	function EntriesByPlayerCtrl() {
		var vm = this;
	}

	angular.module( 'mmdb.golfPickem', [ 'ui.router', 'ui.bootstrap' ] )

	.provider( 'golfPickemConfig', function(/* INPUT */) {
		// this.input = INPUT;

		this.$get = function() {
			return this;
		}
	} )

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

	.factory( 'GoogleSheetsScraper', [ '$http', GoogleSheetsScraper ] )

	.factory( 'EntriesByEntrant', [ EntriesByEntrant ] )

	.factory( 'Scoreboard', [ Scoreboard ] )

	.controller( 'GolfPickemCtrl', [ 'GoogleSheetsScraper', GolfPickemCtrl ] )

	.controller( 'PickemEntriesCtrl', [ PickemEntriesCtrl ] )

	.controller( 'ScoreboardCtrl', [ 'Scoreboard', 'EntriesByEntrant', ScoreboardCtrl ] )

	.controller( 'EntriesByEntrantCtrl', [ 'EntriesByEntrant', EntriesByEntrantCtrl ] )

	.controller( 'EntriesByPlayerCtrl', [ EntriesByPlayerCtrl ] )

	.directive( 'pickemEntries', function() {
		return {
			restrict : 'E',
			templateUrl : 'pickem-entries.tmpl.html',
			scope : {
				entries : '=',
				selections : '='
			},
			controller : 'PickemEntriesCtrl',
			controllerAs : 'pickemEntries',
			bindToController : true
		}
	} )

	.directive( 'scoreboard', function() {
		return {
			restrict : 'E',
			templateUrl : 'scoreboard.tmpl.html',
			scope : {
				entries : '=',
				players : '='
			},
			controller : 'ScoreboardCtrl',
			controllerAs : 'scoreboard',
			bindToController : true
		}
	} )

	.directive( 'entriesByEntrant', function() {
		return {
			restrict : 'E',
			templateUrl : 'entries-by-entrant.tmpl.html',
			scope : {
				entries : '='
			},
			controller : 'EntriesByEntrantCtrl',
			controllerAs : 'entriesByEntrant',
			bindToController : true
		}
	} )

	.directive( 'entriesByPlayer', function() {
		return {
			restrict : 'E',
			templateUrl : 'entries-by-player.tmpl.html',
			scope : {
				selections : '='
			},
			controller : 'EntriesByPlayerCtrl',
			controllerAs : 'entriesByPlayer',
			bindToController : true
		}
	} );

	 @@templateCache
}());
