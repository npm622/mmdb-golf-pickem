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
			var picks = [];
			for ( i = 0; i < contents.length; i++) {
				picks.push(contents[i].split(":")[1].trim());
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

	 angular.module("mmdb.golfPickem").run(["$templateCache", function($templateCache) {$templateCache.put("mmdb-golf-pickem.tmpl.html","<div class=\"container\">\n    <div class=\"row\">\n        <p>This is the Masters Pick \'Em Page</p>\n    </div>\n    <div class=\"row\">\n        <table class=\"table table-striped table-bordered table-hover table-sm\">\n            <tbody>\n                <tr>\n                    <th>participant</th>\n                    <td>pick 1</td>\n                    <td>pick 2</td>\n                    <td>pick 3</td>\n                    <td>pick 4</td>\n                    <td>pick 5</td>\n                </tr>\n                <tr ng-repeat=\"entry in golfPickem.entries\">\n                    <th>{{entry.name}}</th>\n                    <td ng-repeat=\"pick in entry.picks\">{{pick}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-2\" ng-repeat=\"entry in golfPickem.entries\">\n            <strong>{{entry.name}}</strong>\n            <div class=\"list-group\">\n                <a href=\"#\" class=\"list-group-item\" ng-repeat=\"pick in entry.picks\">\n                    <h4 class=list-group-item-heading\">{{pick}}</h4>\n                    <p class=\"list-group-item-text\">\n                        <em>Selected {{golfPickem.playerSelectionCount(pick)}} time(s).</em>\n                    </p>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>");}]);
}());
