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
				var key = keyValues[i].substring( 0, keyValues[i].indexOf( ":" ) ).trim();
				var value = keyValues[i].substring( keyValues[i].indexOf( ":" ) + 1, keyValues[i].length ).trim();

				parsed[key] = value;
			}

			return parsed;
		}

		$http.get( 'https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values?alt=json' ).success( function(data) {
			var i;
			for ( i = 0; i < data.feed.entry.length; i++ ) {
				var entry = data.feed.entry[i];
				liveData.players.push( parseEntry( entry ) );
			}
		} );

		return {
			players : liveData.players
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

	function GolfPickemCtrl(Leaderboard) {
		var vm = this;

		vm.ENTRIES = 'entries';
		vm.SCOREBOARD = 'scoreboard';

		// scoreboard, entries, ...
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

	function PickemEntriesCtrl(Entries) {
		var vm = this;

		vm.entries = Entries.entries;

		vm.getPlayerSelectionCount = function(playerName) {
			return Entries.entriesByPlayer( playerName ).length;
		};

		vm.getEntriesWithPlayer = function(playerName) {
			return Entries.entriesByPlayer( playerName );
		}
	}

	function ScoreboardCtrl(Leaderboard) {
		var vm = this;

		vm.players = Leaderboard.players;

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

	.factory( 'Entries', [ '$http', Entries ] )

	.factory( 'Leaderboard', [ '$http', Leaderboard ] )

	.controller( 'GolfPickemCtrl', [ GolfPickemCtrl ] )

	.controller( 'PickemEntriesCtrl', [ 'Entries', PickemEntriesCtrl ] )

	.controller( 'ScoreboardCtrl', [ 'Entries', ScoreboardCtrlCtrl ] )

	.directive( 'pickemEntries', function() {
		return {
			restrict : 'E',
			templateUrl : 'pickem-entries.tmpl.html',
			scope : {},
			controller : 'PickemEntriesCtrl',
			controllerAs : 'pickemEntries',
			bindToController : true
		}
	} )

	.directive( 'scoreboardEntries', function() {
		return {
			restrict : 'E',
			templateUrl : 'scoreboard.tmpl.html',
			scope : {},
			controller : 'ScoreboardCtrl',
			controllerAs : 'scoreboard',
			bindToController : true
		}
	} );

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container-fluid\">\n    <div class=\"row spacer\">\n        <div class=\"col-md-2\">\n            <div class=\"panel\">\n                <p>this will be the sidebar</p>\n                <button ng-click=\"golfPickem.toggleDisplay()\" type=\"button\" class=\"btn btn-large btn-info\">toggle</button>\n            </div>\n        </div>\n        <div class=\"col-md-10\">\n            <div ng-show=\"golfPickem.display == golfPickem.ENTRIES\" ng-hide=\"golfPickem.display != golfPickem.ENTRIES\">\n                <pickem-entries></pickem-entries>\n            </div>\n            <div ng-show=\"golfPickem.display == golfPickem.SCOREBOARD\" ng-hide=\"golfPickem.display != golfPickem.SCOREBOARD\">\n                <scoreboard></scoreboard>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("pickem-entries.tmpl.html","<div class=\"container\">\n    <div class=\"row spacer\">\n        <div class=\"col-md-3\" ng-repeat=\"entry in golfPickem.entries\">\n            <div class=\"panel panel-success\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{entry.name}}</h3>\n                </div>\n                <ul class=\"list-group\" ng-repeat=\"pick in entry.picks\">\n                    <li class=\"list-group-item\">\n                        <h4 class=list-group-item-heading\">{{pick}}</h4> <a uib-popover=\"{{golfPickem.getEntriesWithPlayer(pick)}}\"\n                        popover-title=\"Common Entries\" popover-trigger=\"outsideClick\"><em>Selected {{golfPickem.getPlayerSelectionCount(pick)}}\n                                time(s).</em></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");
$templateCache.put("scoreboard.tmpl.html","\n<table class=\"table table-striped table-bordered table-hover table-sm\">\n    <thead>\n        <tr>\n            <th>id</th>\n            <th>pos</th>\n            <th>player</th>\n            <th>today</th>\n            <th>thru</th>\n            <th>to par</th>\n            <th>r1</th>\n            <th>r2</th>\n            <th>r3</th>\n            <th>r4</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr ng-repeat=\"player in scoreboard.players\">\n            <td>{{player.id}}</td>\n            <td>{{player.pos}}</td>\n            <td>{{player.firstname}} {{player.lastname}} ({{player.country}})</td>\n            <td>{{player.today}}</td>\n            <td>{{player.thru}}</td>\n            <td>{{player.topar}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r1)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r2)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r3)}}</td>\n            <td>{{scoreboard.displayRoundScore(player.r4)}}</td>\n        </tr>\n    </tbody>\n</table>");}]);
}());
