(function() {
	'use strict';
	
	function Payouts($http) {
		var url = 'https://spreadsheets.google.com/feeds/list/1yvcZwKzj-BfUV-8xeOwzyH88go-DPDB4oxqZtuuQCYk/default/public/values?alt=json';
		
		var parsePayoutsEntry = function(entry) {
			var parsed = {};
			
			parsed.player = entry.title.$t;
			
			var content = entry.content.$t; 
			parsed.amount = content.split( ":" )[1].trim();
			
			return parsed;
		}
		
		return {
			getPayouts : function() {
				return $http.get(url);
			},
			parsePayouts : function(data) {
				var results = [];
				for ( var i = 0; i < data.feed.entry.length; i++ ) {
					results.push( parsePayoutsEntry( data.feed.entry[i] ) );
				}
				return results;
			}
		}
	}

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
		vm.PAYOUTS = 'payouts';

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
		
		vm.getSharesText = function(playerName) {
			var shares = vm.getEntriesWithPlayer(playerName).length;
			if (shares > 0) {
				return '( ' + shares + ' shares )';
			} else {
				return '';
			}
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

	function PayoutsCtrl(Payouts, EntriesByEntrant) {
		var vm = this;

		vm.winnings = [];

		Payouts.getPayouts().success( function(data) {
			var payouts = Payouts.parsePayouts(data);
			for (var i = 0; i < payouts.length; i++) {
				vm.winnings.push(payouts[i]);
			}
			console.log(vm.winnings);
		});
		
		vm.determineEntryRank = function(entry) {
			console.log(entry);
		}
		
		vm.determineEntryTotal = function(entry) {
			console.log(entry);
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

	.factory( 'Payouts', [ '$http', Payouts ] )

	.factory( 'EntriesByEntrant', [ EntriesByEntrant ] )

	.factory( 'Scoreboard', [ Scoreboard ] )

	.controller( 'GolfPickemCtrl', [ 'GoogleSheetsScraper', GolfPickemCtrl ] )

	.controller( 'PickemEntriesCtrl', [ PickemEntriesCtrl ] )

	.controller( 'ScoreboardCtrl', [ 'Scoreboard', 'EntriesByEntrant', ScoreboardCtrl ] )

	.controller( 'EntriesByEntrantCtrl', [ 'EntriesByEntrant', EntriesByEntrantCtrl ] )

	.controller( 'EntriesByPlayerCtrl', [ EntriesByPlayerCtrl ] )
	
	.controller( 'PayoutsCtrl', [ 'Payouts', 'EntriesByEntrant', PayoutsCtrl ])

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
	} )

	.directive( 'payouts', function() {
		return {
			restrict : 'E',
			templateUrl : 'payouts.tmpl.html',
			scope : {
				entries : '='
			},
			controller : 'PayoutsCtrl',
			controllerAs : 'payouts',
			bindToController : true
		}
	} );

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("entries-by-entrant.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\" ng-repeat=\"entry in entriesByEntrant.entries\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{entry.name}}</h3>\n                </div>\n                <ul class=\"list-group\" ng-repeat=\"pick in entry.picks\">\n                    <li class=\"list-group-item\">\n                        <h4 class=list-group-item-heading\">{{pick}}</h4> <a uib-popover=\"{{entriesByEntrant.getEntriesWithPlayer(pick)}}\"\n                        popover-title=\"Common Entries\" popover-trigger=\"outsideClick\"><em>Selected {{entriesByEntrant.getPlayerSelectionCount(pick)}}\n                                time(s).</em></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");
$templateCache.put("entries-by-player.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\" ng-repeat=\"selection in entriesByPlayer.selections\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{selection.name}}</h3>\n                </div>\n                <ul class=\"list-group\" ng-repeat=\"picker in selection.pickedBy\">\n                    <li class=\"list-group-item\">\n                        <h4 class=list-group-item-heading\">{{picker}}</h4>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");
$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container-fluid\">\n    <div class=\"row spacer\">\n        <div class=\"col-md-2\">\n            <div class=\"panel\">\n                <div class=\"btn-group-vertical btn-block\" role=\"group\">\n                    <label class=\"btn btn-large btn-success\" ng-model=\"golfPickem.display\" uib-btn-radio=\"golfPickem.ENTRIES\">entries</label> <label\n                        class=\"btn btn-large btn-info\" ng-model=\"golfPickem.display\" uib-btn-radio=\"golfPickem.SCOREBOARD\">scoreboard</label> <label\n                        class=\"btn btn-large btn-info\" ng-model=\"golfPickem.display\" uib-btn-radio=\"golfPickem.PAYOUTS\">payouts</label>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-10\">\n            <div ng-show=\"golfPickem.isDisplayActive(golfPickem.ENTRIES)\">\n                <pickem-entries entries=\"golfPickem.entries\" selections=\"golfPickem.selections\"></pickem-entries>\n            </div>\n            <div ng-show=\"golfPickem.isDisplayActive(golfPickem.SCOREBOARD)\">\n                <scoreboard entries=\"golfPickem.entries\" players=\"golfPickem.players\"></scoreboard>\n            </div>\n            <div ng-show=\"golfPickem.isDisplayActive(golfPickem.PAYOUTS)\">\n                <payouts entries=\"golfPickem.entries\"></payouts>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("payouts.tmpl.html","<table class=\"table table-bordered table-sm\">\n    <thead>\n        <tr>\n            <th class=\"info text-info text-center h4\">place</th>\n            <th class=\"info text-info text-center h4\">name</th>\n            <th class=\"info text-info text-center h4\">amount</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr ng-repeat=\"entry in payouts.entries\">\n            <td>{{payouts.determineEntryRank(entry)}}</td>\n            <td>{{entry.name}}</td>\n            <td>{{payouts.determineEntryTotal(entry)}}</td>\n        </tr>\n    </tbody>\n</table>");
$templateCache.put("pickem-entries.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"btn-group\" role=\"group\">\n            <label class=\"btn btn-large btn-primary\" ng-model=\"pickemEntries.display\" uib-btn-radio=\"pickemEntries.BY_ENTRANT\">by entrant</label> <label\n                class=\"btn btn-large btn-primary\" ng-model=\"pickemEntries.display\" uib-btn-radio=\"pickemEntries.BY_PLAYER\">by player</label>\n        </div>\n    </div>\n    <div class=\"row spacer\" ng-show=\"pickemEntries.isDisplayActive(pickemEntries.BY_ENTRANT)\">\n        <entries-by-entrant entries=\"pickemEntries.entries\"></entries-by-entrant>\n    </div>\n    <div class=\"row spacer\" ng-show=\"pickemEntries.isDisplayActive(pickemEntries.BY_PLAYER)\">\n        <entries-by-player selections=\"pickemEntries.selections\"></entries-by-player>\n    </div>\n</div>\n\n\n");
$templateCache.put("scoreboard.tmpl.html","<table class=\"table table-bordered table-sm\">\n    <thead>\n        <tr>\n            <th class=\"info text-info text-center h4\">id</th>\n            <th class=\"info text-info text-center h4\">pos</th>\n            <th class=\"info text-info text-center h4\">player</th>\n            <th class=\"info text-info text-center h4\">country</th>\n            <th class=\"info text-info text-center h4\">today</th>\n            <th class=\"info text-info text-center h4\">thru</th>\n            <th class=\"info text-info text-center h4\">to par</th>\n            <th class=\"info text-info text-center h4\">r1</th>\n            <th class=\"info text-info text-center h4\">r2</th>\n            <th class=\"info text-info text-center h4\">r3</th>\n            <th class=\"info text-info text-center h4\">r4</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr ng-repeat=\"player in scoreboard.players\" ng-class=\"{ \'active\' : scoreboard.isSelectedPlayer(player.firstname + \' \' + player.lastname) }\">\n            <td>{{player.id}}</td>\n            <td>{{player.pos}}</td>\n            <td><a uib-popover=\"{{scoreboard.getEntriesWithPlayer(player.firstname + \' \' + player.lastname)}}\" popover-title=\"Picked By:\" popover-trigger=\"outsideClick\">{{player.firstname}} {{player.lastname}} {{scoreboard.getSharesText(player.firstname + \' \' + player.lastname)}}</a></td>\n            <td>{{player.country}}</td>\n            <td>{{player.today}}</td>\n            <td>{{player.thru}}</td>\n            <td>{{player.topar}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r1)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r2)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r3)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r4)}}</td>\n        </tr>\n    </tbody>\n</table>");}]);
}());
