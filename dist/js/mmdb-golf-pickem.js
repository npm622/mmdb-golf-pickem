(function() {
	'use strict';

	function GoogleSheetsScraper($http) {
		var results = {
			entries : [],
			players : []
		};

		var leaderboardUrl = 'https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values?alt=json';
		var entriesUrl = 'https://spreadsheets.google.com/feeds/list/1UKfT41oI1OQ-GKqFNqtRQmIbZ9_h1_4rbprteJYa1EU/default/public/values?alt=json';

		var parseEntriesEntry = function(entry) {
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

		var parseLeaderboardEntry = function(entry) {
			var parsed = {};

			parsed.id = entry.title.$t;

			var keyValues = entry.content.$t.split( "," );
			var i;
			for ( i = 0; i < keyValues.length; i++ ) {
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
		} );

		$http.get( leaderboardUrl ).success( function(data) {
			for ( var i = 0; i < data.feed.entry.length; i++ ) {
				results.players.push( parseLeaderboardEntry( data.feed.entry[i] ) );
			}
		} );

		return {
			entries : results.entries,
			players : results.players
		}
	}
	
	function EntriesByEntrant() {
		return {
			entriesByPlayer : function(playerName, entries) {
				var names = [];
				var i;
				for ( i = 0; i < entries.length; i++ ) {
					var entry = entries[i];
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

	function GolfPickemCtrl(GoogleSheetsScraper) {
		var vm = this;
		
		vm.entries = GoogleSheetsScraper.entries;
		vm.players = GoogleSheetsScraper.players;

		vm.ENTRIES = 'entries';
		vm.SCOREBOARD = 'scoreboard';

		vm.display = vm.SCOREBOARD;

		vm.toggleDisplay = function() {
			switch ( vm.display ) {
			case vm.ENTRIES:
				vm.setDisplay( vm.SCOREBOARD );
				break;
			case vm.SCOREBOARD:
				vm.setDisplay( vm.ENTRIES );
				break;
			default:
				alert( 'the simple #toggleDisplay() function is not sufficient anymore -- ' + vm.display );
				break;
			}
		}

		vm.setDisplay = function(newDisplay) {
			vm.display = newDisplay;
		}
	}

	function PickemEntriesCtrl() {
		var vm = this;

		vm.BY_ENTRANT = "by_entrant";
		vm.BY_PLAYER = "by_player";

		vm.entries = Entries.entries;

		vm.display = vm.BY_ENTRANT;

		vm.isDisplayActive = function(displayInQuestion) {
			return vm.display === displayInQuestion;
		}
	}

	function ScoreboardCtrl() {
		var vm = this;

		vm.displayRoundScore = function(r) {
			if ( r.indexOf( '||' ) > -1 ) {
				return '--';
			} else if ( r.startsWith( '|' ) ) {
				return r.substring( 1, 3 );
			} else {
				return r;
			}
		}
	}

	function EntriesByEntrantCtrl(EntriesByEntrant) {
		var vm = this;

		vm.getPlayerSelectionCount = function(playerName) {
			return EntriesByEntrant.entriesByPlayer( playerName, entries ).length;
		};

		vm.getEntriesWithPlayer = function(playerName) {
			return EntriesByEntrant.entriesByPlayer( playerName, entries );
		}
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

	.controller( 'GolfPickemCtrl', [ 'GoogleSheetsScraper', GolfPickemCtrl ] )

	.controller( 'PickemEntriesCtrl', [ PickemEntriesCtrl ] )

	.controller( 'ScoreboardCtrl', [ ScoreboardCtrl ] )

	.controller( 'EntriesByEntrantCtrl', [ 'EntriesByEntrant', EntriesByEntrantCtrl ] )

	.directive( 'pickemEntries', function() {
		return {
			restrict : 'E',
			templateUrl : 'pickem-entries.tmpl.html',
			scope : {
				entries : '='
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
	} );

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("entries-by-entrant.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\" ng-repeat=\"entry in entriesByEntrant.entries\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{entry.name}}</h3>\n                </div>\n                <ul class=\"list-group\" ng-repeat=\"pick in entry.picks\">\n                    <li class=\"list-group-item\">\n                        <h4 class=list-group-item-heading\">{{pick}}</h4> <a uib-popover=\"{{entriesByEntrant.getEntriesWithPlayer(pick)}}\"\n                        popover-title=\"Common Entries\" popover-trigger=\"outsideClick\"><em>Selected {{entriesByEntrant.getPlayerSelectionCount(pick)}}\n                                time(s).</em></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");
$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container-fluid\">\n    <div class=\"row spacer\">\n        <div class=\"col-md-2\">\n            <div class=\"panel\">\n                <div class=\"btn-group-vertical btn-block\" role=\"group\">\n                    <label class=\"btn btn-large btn-success\" ng-model=\"golfPickem.display\" uib-btn-radio=\"golfPickem.ENTRIES\">entries</label> <label\n                        class=\"btn btn-large btn-info\" ng-model=\"golfPickem.display\" uib-btn-radio=\"golfPickem.SCOREBOARD\">scoreboard</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-10\">\n            <div ng-show=\"golfPickem.display === golfPickem.ENTRIES\">\n                <pickem-entries entries=\"golfPickem.entries\"></pickem-entries>\n            </div>\n            <div ng-show=\"golfPickem.display === golfPickem.SCOREBOARD\">\n                <scoreboard players=\"golfPickem.players\"></scoreboard>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("pickem-entries.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"btn-group\" role=\"group\">\n            <label class=\"btn btn-large\" ng-model=\"pickemEntries.display\" uib-btn-radio=\"pickemEntries.BY_ENTRANT\">by entrant</label> <label\n                class=\"btn btn-large\" ng-model=\"pickemEntries.display\" uib-btn-radio=\"pickemEntries.BY_PLAYER\">by player</label>\n        </div>\n    </div>\n    <div class=\"row spacer\" ng-show=\"pickemEntries.display === pickemEntries.BY_ENTRANT\">\n        <entries-by-entrant entries=\"pickemEntries.entries\"></entries-by-entrant>\n    </div>\n    <div class=\"row spacer\" ng-show=\"pickemEntries.display === pickemEntries.BY_PLAYER\">\n        <p>TODO: figure out this view</p>\n    </div>\n</div>\n\n\n");
$templateCache.put("scoreboard.tmpl.html","<table class=\"table table-striped table-bordered table-hover table-sm\">\n    <thead>\n        <tr>\n            <th class=\"info text-info text-center h4\">id</th>\n            <th class=\"info text-info text-center h4\">pos</th>\n            <th class=\"info text-info text-center h4\">player</th>\n            <th class=\"info text-info text-center h4\">country</th>\n            <th class=\"info text-info text-center h4\">today</th>\n            <th class=\"info text-info text-center h4\">thru</th>\n            <th class=\"info text-info text-center h4\">to par</th>\n            <th class=\"info text-info text-center h4\">r1</th>\n            <th class=\"info text-info text-center h4\">r2</th>\n            <th class=\"info text-info text-center h4\">r3</th>\n            <th class=\"info text-info text-center h4\">r4</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr ng-repeat=\"player in scoreboard.players\">\n            <td>{{player.id}}</td>\n            <td>{{player.pos}}</td>\n            <td>{{player.firstname}} {{player.lastname}}</td>\n            <td>{{player.country}}</td>\n            <td>{{player.today}}</td>\n            <td>{{player.thru}}</td>\n            <td>{{player.topar}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r1)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r2)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r3)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r4)}}</td>\n        </tr>\n    </tbody>\n</table>");}]);
}());
