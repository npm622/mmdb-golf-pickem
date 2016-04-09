(function() {
	'use strict';

	function GoogleSheetsScraper($http) {
		var payload = {
				  version: "1.0",
				  encoding: "UTF-8",
				  feed: {
				    xmlns: "http://www.w3.org/2005/Atom",
				    xmlns$openSearch: "http://a9.com/-/spec/opensearchrss/1.0/",
				    xmlns$gsx: "http://schemas.google.com/spreadsheets/2006/extended",
				    id: {
				      $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values"
				    },
				    updated: {
				      $t: "2016-04-08T21:13:36.718Z"
				    },
				    category: [
				      {
				        scheme: "http://schemas.google.com/spreadsheets/2006",
				        term: "http://schemas.google.com/spreadsheets/2006#list"
				      }
				    ],
				    title: {
				      type: "text",
				      $t: "leaderboard"
				    },
				    link: [
				      {
				        rel: "alternate",
				        type: "application/atom+xml",
				        href: "https://docs.google.com/a/cornell.edu/spreadsheets/d/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/pubhtml"
				      },
				      {
				        rel: "http://schemas.google.com/g/2005#feed",
				        type: "application/atom+xml",
				        href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values"
				      },
				      {
				        rel: "http://schemas.google.com/g/2005#post",
				        type: "application/atom+xml",
				        href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values"
				      },
				      {
				        rel: "self",
				        type: "application/atom+xml",
				        href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values?alt=json"
				      }
				    ],
				    author: [
				      {
				        name: {
				          $t: "npm27"
				        },
				        email: {
				          $t: "npm27@cornell.edu"
				        }
				      }
				    ],
				    openSearch$totalResults: {
				      $t: "90"
				    },
				    openSearch$startIndex: {
				      $t: "1"
				    },
				    entry: [
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cokwr"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "34046"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SPIETH, displayname2: Spieth, firstname: Jordan, lastname: Spieth, countrylong: United States, country: USA, live: 1516, video: FALSE, pos: 1, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:55 PM, teeorder: 69, sortorder: 1|1||, start: NAAZZ, group: 24, today: +1, thru: 14, grouphistory: 9|24||, thruhistory: 18|14||, lastholewithshot: 2|15, lastlocation: In Fairway, grouplocation: In Fairway, topar: -5, total: 66, movement: 0, r1: |66|dEcCDbDdDcdcdDEcDc, r2: -6||ceccfcddeedCED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cokwr"
				          }
				        ],
				        gsx$id: {
				          $t: "34046"
				        },
				        gsx$displayname: {
				          $t: "SPIETH"
				        },
				        gsx$displayname2: {
				          $t: "Spieth"
				        },
				        gsx$firstname: {
				          $t: "Jordan"
				        },
				        gsx$lastname: {
				          $t: "Spieth"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "1516"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "1"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:55 PM"
				        },
				        gsx$teeorder: {
				          $t: "69"
				        },
				        gsx$sortorder: {
				          $t: "1|1||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "24"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "14"
				        },
				        gsx$grouphistory: {
				          $t: "9|24||"
				        },
				        gsx$thruhistory: {
				          $t: "18|14||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|15"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "-5"
				        },
				        gsx$total: {
				          $t: "66"
				        },
				        gsx$movement: {
				          $t: "0"
				        },
				        gsx$r1: {
				          $t: "|66|dEcCDbDdDcdcdDEcDc"
				        },
				        gsx$r2: {
				          $t: "-6||ceccfcddeedCED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cpzh4"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "28237"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MCILROY, displayname2: McIlroy, firstname: Rory, lastname: McIlroy, countrylong: N. Ireland, country: NIR, video: FALSE, pos: T2, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 11:05 AM, teeorder: 45, sortorder: 12|2||, start: NAAZZ, group: 15, today: -1, thru: F, grouphistory: 30|15||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: -3, total: 141, movement: 7, r1: |70|DdDDDCcecDeCcDddDe, r2: -2|71|ddceecDeDDeCdDdbDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cpzh4"
				          }
				        ],
				        gsx$id: {
				          $t: "28237"
				        },
				        gsx$displayname: {
				          $t: "MCILROY"
				        },
				        gsx$displayname2: {
				          $t: "McIlroy"
				        },
				        gsx$firstname: {
				          $t: "Rory"
				        },
				        gsx$lastname: {
				          $t: "McIlroy"
				        },
				        gsx$countrylong: {
				          $t: "N. Ireland"
				        },
				        gsx$country: {
				          $t: "NIR"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T2"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:05 AM"
				        },
				        gsx$teeorder: {
				          $t: "45"
				        },
				        gsx$sortorder: {
				          $t: "12|2||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "15"
				        },
				        gsx$today: {
				          $t: "-1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "30|15||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "-3"
				        },
				        gsx$total: {
				          $t: "141"
				        },
				        gsx$movement: {
				          $t: "7"
				        },
				        gsx$r1: {
				          $t: "|70|DdDDDCcecDeCcDddDe"
				        },
				        gsx$r2: {
				          $t: "-2|71|ddceecDeDDeCdDdbDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cre1l"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "47959"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: DECHAMBEAU, displayname2: DeChambeau, firstname: Bryson, lastname: DeChambeau, countrylong: United States, country: USA, live: 1516, video: FALSE, pos: T2, amateur: TRUE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:55 PM, teeorder: 71, sortorder: 25|3||, start: NAAZZ, group: 24, today: -3, thru: 14, grouphistory: 9|24||, thruhistory: 18|14||, lastholewithshot: 2|15, lastlocation: In Fairway, grouplocation: In Fairway, topar: -3, total: 72, movement: 19, r1: |72|DdDCDCDEDDDCEDFcDD, r2: 0||cEECDCcEcEcbED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cre1l"
				          }
				        ],
				        gsx$id: {
				          $t: "47959"
				        },
				        gsx$displayname: {
				          $t: "DECHAMBEAU"
				        },
				        gsx$displayname2: {
				          $t: "DeChambeau"
				        },
				        gsx$firstname: {
				          $t: "Bryson"
				        },
				        gsx$lastname: {
				          $t: "DeChambeau"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "1516"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T2"
				        },
				        gsx$amateur: {
				          $t: "TRUE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:55 PM"
				        },
				        gsx$teeorder: {
				          $t: "71"
				        },
				        gsx$sortorder: {
				          $t: "25|3||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "24"
				        },
				        gsx$today: {
				          $t: "-3"
				        },
				        gsx$thru: {
				          $t: "14"
				        },
				        gsx$grouphistory: {
				          $t: "9|24||"
				        },
				        gsx$thruhistory: {
				          $t: "18|14||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|15"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "-3"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "19"
				        },
				        gsx$r1: {
				          $t: "|72|DdDCDCDEDDDCEDFcDD"
				        },
				        gsx$r2: {
				          $t: "0||cEECDCcEcEcbED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/chk2m"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "29926"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LEE, displayname2: Lee, firstname: Danny, lastname: Lee, countrylong: New Zealand, country: NZL, video: FALSE, pos: T4, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:26 AM, teeorder: 19, sortorder: 2|4||, start: NAAZZ, group: 7, today: +2, thru: F, grouphistory: 22|7||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: -2, total: 142, movement: -2, r1: |68|DDECCCEDDCDbEDEbDd, r2: -4|74|DdFCcCDEDDDdEDEbEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/chk2m"
				          }
				        ],
				        gsx$id: {
				          $t: "29926"
				        },
				        gsx$displayname: {
				          $t: "LEE"
				        },
				        gsx$displayname2: {
				          $t: "Lee"
				        },
				        gsx$firstname: {
				          $t: "Danny"
				        },
				        gsx$lastname: {
				          $t: "Lee"
				        },
				        gsx$countrylong: {
				          $t: "New Zealand"
				        },
				        gsx$country: {
				          $t: "NZL"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T4"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:26 AM"
				        },
				        gsx$teeorder: {
				          $t: "19"
				        },
				        gsx$sortorder: {
				          $t: "2|4||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "7"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "22|7||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "-2"
				        },
				        gsx$total: {
				          $t: "142"
				        },
				        gsx$movement: {
				          $t: "-2"
				        },
				        gsx$r1: {
				          $t: "|68|DDECCCEDDCDbEDEbDd"
				        },
				        gsx$r2: {
				          $t: "-4|74|DdFCcCDEDDDdEDEbEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ciyn3"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25818"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: PIERCY, displayname2: Piercy, firstname: Scott, lastname: Piercy, countrylong: United States, country: USA, video: FALSE, pos: T4, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 10:21 AM, teeorder: 33, sortorder: 10|5||, start: NAAZZ, group: 11, today: E, thru: F, grouphistory: 26|11||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: -2, total: 142, movement: 5, r1: |70|DcDbECDdDEFCDDdCDD, r2: -2|72|DdcCDCEEDDECdDEDDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ciyn3"
				          }
				        ],
				        gsx$id: {
				          $t: "25818"
				        },
				        gsx$displayname: {
				          $t: "PIERCY"
				        },
				        gsx$displayname2: {
				          $t: "Piercy"
				        },
				        gsx$firstname: {
				          $t: "Scott"
				        },
				        gsx$lastname: {
				          $t: "Piercy"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T4"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "10:21 AM"
				        },
				        gsx$teeorder: {
				          $t: "33"
				        },
				        gsx$sortorder: {
				          $t: "10|5||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "11"
				        },
				        gsx$today: {
				          $t: "E"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "26|11||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "-2"
				        },
				        gsx$total: {
				          $t: "142"
				        },
				        gsx$movement: {
				          $t: "5"
				        },
				        gsx$r1: {
				          $t: "|70|DcDbECDdDEFCDDdCDD"
				        },
				        gsx$r2: {
				          $t: "-2|72|DdcCDCEEDDECdDEDDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ckd7g"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "27649"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SNEDEKER, displayname2: Snedeker, firstname: Brandt, lastname: Snedeker, countrylong: United States, country: USA, video: FALSE, pos: T6, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:04 AM, teeorder: 14, sortorder: 19|6||, start: NAAZZ, group: 5, today: E, thru: F, grouphistory: 20|5||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: -1, total: 143, movement: 7, r1: |71|DDDbDDDDCEDCEEECDD, r2: -1|72|DDEDDbcEDDDEDDECEC, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ckd7g"
				          }
				        ],
				        gsx$id: {
				          $t: "27649"
				        },
				        gsx$displayname: {
				          $t: "SNEDEKER"
				        },
				        gsx$displayname2: {
				          $t: "Snedeker"
				        },
				        gsx$firstname: {
				          $t: "Brandt"
				        },
				        gsx$lastname: {
				          $t: "Snedeker"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T6"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:04 AM"
				        },
				        gsx$teeorder: {
				          $t: "14"
				        },
				        gsx$sortorder: {
				          $t: "19|6||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "5"
				        },
				        gsx$today: {
				          $t: "E"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "20|5||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "-1"
				        },
				        gsx$total: {
				          $t: "143"
				        },
				        gsx$movement: {
				          $t: "7"
				        },
				        gsx$r1: {
				          $t: "|71|DDDbDDDDCEDCEEECDD"
				        },
				        gsx$r2: {
				          $t: "-1|72|DDEDDbcEDDDEDDECEC"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/clrrx"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "22986"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KJELDSEN, displayname2: Kjeldsen, firstname: Søren, lastname: Kjeldsen, countrylong: Denmark, country: DEN, video: FALSE, pos: T6, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:32 AM, teeorder: 35, sortorder: 7|7||, start: NAAZZ, group: 12, today: +2, thru: F, grouphistory: 27|12||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: -1, total: 143, movement: -2, r1: |69|DEDCDDEDDDDBECEbcD, r2: -3|74|DdDDDCDEEDDCEDECDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/clrrx"
				          }
				        ],
				        gsx$id: {
				          $t: "22986"
				        },
				        gsx$displayname: {
				          $t: "KJELDSEN"
				        },
				        gsx$displayname2: {
				          $t: "Kjeldsen"
				        },
				        gsx$firstname: {
				          $t: "Søren"
				        },
				        gsx$lastname: {
				          $t: "Kjeldsen"
				        },
				        gsx$countrylong: {
				          $t: "Denmark"
				        },
				        gsx$country: {
				          $t: "DEN"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T6"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:32 AM"
				        },
				        gsx$teeorder: {
				          $t: "35"
				        },
				        gsx$sortorder: {
				          $t: "7|7||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "12"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "27|12||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "-1"
				        },
				        gsx$total: {
				          $t: "143"
				        },
				        gsx$movement: {
				          $t: "-2"
				        },
				        gsx$r1: {
				          $t: "|69|DEDCDDEDDDDBECEbcD"
				        },
				        gsx$r2: {
				          $t: "-3|74|DdDDDCDEEDDCEDECDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cyevm"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25364"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: CASEY, displayname2: Casey, firstname: Paul, lastname: Casey, countrylong: England, country: ENG, live: 1516, video: FALSE, pos: T6, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 12:55 PM, teeorder: 70, sortorder: 4|8||, start: NAAZZ, group: 24, today: +2, thru: 14, grouphistory: 9|24||, thruhistory: 18|14||, lastholewithshot: 2|15, lastlocation: In Fairway, grouplocation: In Fairway, topar: -1, total: 69, movement: -2, r1: |69|DEDbDCcEDcEDdDdbED, r2: -3||dDEDDDDDDDECDE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cyevm"
				          }
				        ],
				        gsx$id: {
				          $t: "25364"
				        },
				        gsx$displayname: {
				          $t: "CASEY"
				        },
				        gsx$displayname2: {
				          $t: "Casey"
				        },
				        gsx$firstname: {
				          $t: "Paul"
				        },
				        gsx$lastname: {
				          $t: "Casey"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: "1516"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T6"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "12:55 PM"
				        },
				        gsx$teeorder: {
				          $t: "70"
				        },
				        gsx$sortorder: {
				          $t: "4|8||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "24"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "14"
				        },
				        gsx$grouphistory: {
				          $t: "9|24||"
				        },
				        gsx$thruhistory: {
				          $t: "18|14||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|15"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "-1"
				        },
				        gsx$total: {
				          $t: "69"
				        },
				        gsx$movement: {
				          $t: "-2"
				        },
				        gsx$r1: {
				          $t: "|69|DEDbDCcEDcEDdDdbED"
				        },
				        gsx$r2: {
				          $t: "-3||dDEDDDDDDDECDE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cztg3"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "30978"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: APHIBARNRAT, displayname2: Aphibarnrat, firstname: Kiradech, lastname: Aphibarnrat, countrylong: Thailand, country: THA, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:04 AM, teeorder: 15, sortorder: 29|9||, start: NAAZZ, group: 5, today: E, thru: F, grouphistory: 20|5||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 144, movement: 12, r1: |72|DEECECEFDDDCCDDCCD, r2: 0|72|DDDDECDDDDECEDDCDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cztg3"
				          }
				        ],
				        gsx$id: {
				          $t: "30978"
				        },
				        gsx$displayname: {
				          $t: "APHIBARNRAT"
				        },
				        gsx$displayname2: {
				          $t: "Aphibarnrat"
				        },
				        gsx$firstname: {
				          $t: "Kiradech"
				        },
				        gsx$lastname: {
				          $t: "Aphibarnrat"
				        },
				        gsx$countrylong: {
				          $t: "Thailand"
				        },
				        gsx$country: {
				          $t: "THA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:04 AM"
				        },
				        gsx$teeorder: {
				          $t: "15"
				        },
				        gsx$sortorder: {
				          $t: "29|9||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "5"
				        },
				        gsx$today: {
				          $t: "E"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "20|5||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "144"
				        },
				        gsx$movement: {
				          $t: "12"
				        },
				        gsx$r1: {
				          $t: "|72|DEECECEFDDDCCDDCCD"
				        },
				        gsx$r2: {
				          $t: "0|72|DDDDECDDDDECEDDCDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d180g"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "32139"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WILLETT, displayname2: Willett, firstname: Danny, lastname: Willett, countrylong: England, country: ENG, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:43 AM, teeorder: 37, sortorder: 11|10||, start: NAAZZ, group: 13, today: +2, thru: F, grouphistory: 28|13||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 144, movement: 0, r1: |70|DEcCDCDECDDCEDEbDE, r2: -2|74|DEcCDDEEDDDCEDEDDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d180g"
				          }
				        ],
				        gsx$id: {
				          $t: "32139"
				        },
				        gsx$displayname: {
				          $t: "WILLETT"
				        },
				        gsx$displayname2: {
				          $t: "Willett"
				        },
				        gsx$firstname: {
				          $t: "Danny"
				        },
				        gsx$lastname: {
				          $t: "Willett"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:43 AM"
				        },
				        gsx$teeorder: {
				          $t: "37"
				        },
				        gsx$sortorder: {
				          $t: "11|10||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "13"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "28|13||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "144"
				        },
				        gsx$movement: {
				          $t: "0"
				        },
				        gsx$r1: {
				          $t: "|70|DEcCDCDECDDCEDEbDE"
				        },
				        gsx$r2: {
				          $t: "-2|74|DEcCDDEEDDDCEDEDDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d2mkx"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "21209"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: GARCIA, displayname2: Garcia, firstname: Sergio, lastname: Garcia, countrylong: Spain, country: ESP, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:43 AM, teeorder: 38, sortorder: 8|11||, start: NAAZZ, group: 13, today: +3, thru: F, grouphistory: 28|13||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 144, movement: -5, r1: |69|DEEDDCDECDDCdcdbDd, r2: -3|75|EdcDDcDdfDDCFcECeE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d2mkx"
				          }
				        ],
				        gsx$id: {
				          $t: "21209"
				        },
				        gsx$displayname: {
				          $t: "GARCIA"
				        },
				        gsx$displayname2: {
				          $t: "Garcia"
				        },
				        gsx$firstname: {
				          $t: "Sergio"
				        },
				        gsx$lastname: {
				          $t: "Garcia"
				        },
				        gsx$countrylong: {
				          $t: "Spain"
				        },
				        gsx$country: {
				          $t: "ESP"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:43 AM"
				        },
				        gsx$teeorder: {
				          $t: "38"
				        },
				        gsx$sortorder: {
				          $t: "8|11||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "13"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "28|13||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "144"
				        },
				        gsx$movement: {
				          $t: "-5"
				        },
				        gsx$r1: {
				          $t: "|69|DEEDDCDECDDCdcdbDd"
				        },
				        gsx$r2: {
				          $t: "-3|75|EdcDDcDdfDDCFcECeE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cssly"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "33204"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LOWRY, displayname2: Lowry, firstname: Shane, lastname: Lowry, countrylong: Ireland, country: IRL, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:54 AM, teeorder: 41, sortorder: 3|12||, start: NAAZZ, group: 14, today: +4, thru: F, grouphistory: 29|14||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 144, movement: -7, r1: |68|DDCBcCDdDDddEDECDd, r2: -4|76|EFDCDCDEcDEEdEdCDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cssly"
				          }
				        ],
				        gsx$id: {
				          $t: "33204"
				        },
				        gsx$displayname: {
				          $t: "LOWRY"
				        },
				        gsx$displayname2: {
				          $t: "Lowry"
				        },
				        gsx$firstname: {
				          $t: "Shane"
				        },
				        gsx$lastname: {
				          $t: "Lowry"
				        },
				        gsx$countrylong: {
				          $t: "Ireland"
				        },
				        gsx$country: {
				          $t: "IRL"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:54 AM"
				        },
				        gsx$teeorder: {
				          $t: "41"
				        },
				        gsx$sortorder: {
				          $t: "3|12||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "14"
				        },
				        gsx$today: {
				          $t: "+4"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "29|14||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "144"
				        },
				        gsx$movement: {
				          $t: "-7"
				        },
				        gsx$r1: {
				          $t: "|68|DDCBcCDdDDddEDECDd"
				        },
				        gsx$r2: {
				          $t: "-4|76|EFDCDCDEcDEEdEdCDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cu76f"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "31646"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: GRILLO, displayname2: Grillo, firstname: Emiliano, lastname: Grillo, countrylong: Argentina, country: ARG, live: fg1, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:06 PM, teeorder: 73, sortorder: 16|13||, start: NAAZZ, group: 25, today: +1, thru: 13, grouphistory: 10|25||, thruhistory: 18|13||, lastholewithshot: 2|14, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 71, movement: 4, r1: |71|DECDDBEDEDECDDFBCD, r2: -1||EDECDDCEDDEBE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cu76f"
				          }
				        ],
				        gsx$id: {
				          $t: "31646"
				        },
				        gsx$displayname: {
				          $t: "GRILLO"
				        },
				        gsx$displayname2: {
				          $t: "Grillo"
				        },
				        gsx$firstname: {
				          $t: "Emiliano"
				        },
				        gsx$lastname: {
				          $t: "Grillo"
				        },
				        gsx$countrylong: {
				          $t: "Argentina"
				        },
				        gsx$country: {
				          $t: "ARG"
				        },
				        gsx$live: {
				          $t: "fg1"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:06 PM"
				        },
				        gsx$teeorder: {
				          $t: "73"
				        },
				        gsx$sortorder: {
				          $t: "16|13||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "25"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "13"
				        },
				        gsx$grouphistory: {
				          $t: "10|25||"
				        },
				        gsx$thruhistory: {
				          $t: "18|13||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|14"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "71"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|71|DECDDBEDEDECDDFBCD"
				        },
				        gsx$r2: {
				          $t: "-1||EDECDDCEDDEBE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cvlqs"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "32839"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MATSUYAMA, displayname2: Matsuyama, firstname: Hideki, lastname: Matsuyama, countrylong: Japan, country: JPN, live: ac, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:17 PM, teeorder: 76, sortorder: 17|14||, start: NAAZZ, group: 26, today: +1, thru: 12, grouphistory: 11|26||, thruhistory: 18|12||, lastholewithshot: 2|13, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 71, movement: 4, r1: |71|EDDCDCCEcDECEEECDC, r2: -1||EEDCEDcdDDEB , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cvlqs"
				          }
				        ],
				        gsx$id: {
				          $t: "32839"
				        },
				        gsx$displayname: {
				          $t: "MATSUYAMA"
				        },
				        gsx$displayname2: {
				          $t: "Matsuyama"
				        },
				        gsx$firstname: {
				          $t: "Hideki"
				        },
				        gsx$lastname: {
				          $t: "Matsuyama"
				        },
				        gsx$countrylong: {
				          $t: "Japan"
				        },
				        gsx$country: {
				          $t: "JPN"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:17 PM"
				        },
				        gsx$teeorder: {
				          $t: "76"
				        },
				        gsx$sortorder: {
				          $t: "17|14||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "26"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "12"
				        },
				        gsx$grouphistory: {
				          $t: "11|26||"
				        },
				        gsx$thruhistory: {
				          $t: "18|12||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|13"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "71"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|71|EDDCDCCEcDECEEECDC"
				        },
				        gsx$r2: {
				          $t: "-1||EEDCEDcdDDEB "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cx0b9"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "22405"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: ROSE, displayname2: Rose, firstname: Justin, lastname: Rose, countrylong: England, country: ENG, live: ac, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:50 PM, teeorder: 84, sortorder: 5|15||, start: NAAZZ, group: 29, today: +3, thru: 10, grouphistory: 14|29||, thruhistory: 18|10||, lastholewithshot: 2|11, lastlocation: On Green, grouplocation: On 11 Green, topar: E, total: 69, movement: -5, r1: |69|cFcCDCDECcECdDdDDD, r2: -3||EdeCEDDDDE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/cx0b9"
				          }
				        ],
				        gsx$id: {
				          $t: "22405"
				        },
				        gsx$displayname: {
				          $t: "ROSE"
				        },
				        gsx$displayname2: {
				          $t: "Rose"
				        },
				        gsx$firstname: {
				          $t: "Justin"
				        },
				        gsx$lastname: {
				          $t: "Rose"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:50 PM"
				        },
				        gsx$teeorder: {
				          $t: "84"
				        },
				        gsx$sortorder: {
				          $t: "5|15||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "29"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "10"
				        },
				        gsx$grouphistory: {
				          $t: "14|29||"
				        },
				        gsx$thruhistory: {
				          $t: "18|10||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|11"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 11 Green"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "69"
				        },
				        gsx$movement: {
				          $t: "-5"
				        },
				        gsx$r1: {
				          $t: "|69|cFcCDCDECcECdDdDDD"
				        },
				        gsx$r2: {
				          $t: "-3||EdeCEDDDDE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d9ney"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "36689"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KOEPKA, displayname2: Koepka, firstname: Brooks, lastname: Koepka, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T9, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 2:01 PM, teeorder: 89, sortorder: 38|16||, start: NAAZZ, group: 30, today: -1, thru: 10, grouphistory: 15|30||, thruhistory: 18|10||, lastholewithshot: 2|10, lastlocation: In the Hole, grouplocation: On Tee, topar: E, total: 73, movement: 25, r1: |73|EDDBDCDEDDDCFcEDED, r2: 1||DDDDCCDDED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d9ney"
				          }
				        ],
				        gsx$id: {
				          $t: "36689"
				        },
				        gsx$displayname: {
				          $t: "KOEPKA"
				        },
				        gsx$displayname2: {
				          $t: "Koepka"
				        },
				        gsx$firstname: {
				          $t: "Brooks"
				        },
				        gsx$lastname: {
				          $t: "Koepka"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T9"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "2:01 PM"
				        },
				        gsx$teeorder: {
				          $t: "89"
				        },
				        gsx$sortorder: {
				          $t: "38|16||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "30"
				        },
				        gsx$today: {
				          $t: "-1"
				        },
				        gsx$thru: {
				          $t: "10"
				        },
				        gsx$grouphistory: {
				          $t: "15|30||"
				        },
				        gsx$thruhistory: {
				          $t: "18|10||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|10"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "E"
				        },
				        gsx$total: {
				          $t: "73"
				        },
				        gsx$movement: {
				          $t: "25"
				        },
				        gsx$r1: {
				          $t: "|73|EDDBDCDEDDDCFcEDED"
				        },
				        gsx$r2: {
				          $t: "1||DDDDCCDDED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/db1zf"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "32640"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MERRITT, displayname2: Merritt, firstname: Troy, lastname: Merritt, countrylong: United States, country: USA, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 8:31 AM, teeorder: 5, sortorder: 49|17||, start: NAAZZ, group: 2, today: -1, thru: F, grouphistory: 17|2||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +1, total: 145, movement: 26, r1: |74|EEDCDCDEDEDCDEFBDD, r2: 2|71|DEDCDCDEDEDCECDCDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/db1zf"
				          }
				        ],
				        gsx$id: {
				          $t: "32640"
				        },
				        gsx$displayname: {
				          $t: "MERRITT"
				        },
				        gsx$displayname2: {
				          $t: "Merritt"
				        },
				        gsx$firstname: {
				          $t: "Troy"
				        },
				        gsx$lastname: {
				          $t: "Merritt"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "8:31 AM"
				        },
				        gsx$teeorder: {
				          $t: "5"
				        },
				        gsx$sortorder: {
				          $t: "49|17||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "2"
				        },
				        gsx$today: {
				          $t: "-1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "17|2||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "145"
				        },
				        gsx$movement: {
				          $t: "26"
				        },
				        gsx$r1: {
				          $t: "|74|EEDCDCDEDEDCDEFBDD"
				        },
				        gsx$r2: {
				          $t: "2|71|DEDCDCDEDEDCECDCDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dcgjs"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "46440"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KAUFMAN, displayname2: Kaufman, firstname: Smylie, lastname: Kaufman, countrylong: United States, country: USA, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:26 AM, teeorder: 21, sortorder: 40|18||, start: NAAZZ, group: 7, today: E, thru: F, grouphistory: 22|7||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +1, total: 145, movement: 17, r1: |73|DDDCDCEFDEDBDDECED, r2: 1|72|DDDCDDDDDEDDECECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dcgjs"
				          }
				        ],
				        gsx$id: {
				          $t: "46440"
				        },
				        gsx$displayname: {
				          $t: "KAUFMAN"
				        },
				        gsx$displayname2: {
				          $t: "Kaufman"
				        },
				        gsx$firstname: {
				          $t: "Smylie"
				        },
				        gsx$lastname: {
				          $t: "Kaufman"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:26 AM"
				        },
				        gsx$teeorder: {
				          $t: "21"
				        },
				        gsx$sortorder: {
				          $t: "40|18||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "7"
				        },
				        gsx$today: {
				          $t: "E"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "22|7||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "145"
				        },
				        gsx$movement: {
				          $t: "17"
				        },
				        gsx$r1: {
				          $t: "|73|DDDCDCEFDEDBDDECED"
				        },
				        gsx$r2: {
				          $t: "1|72|DDDCDDDDDEDDECECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ddv49"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "1666"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LANGER, displayname2: Langer, firstname: Bernhard, lastname: Langer, countrylong: Germany, country: GER, video: FALSE, pos: T17, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:48 AM, teeorder: 25, sortorder: 30|19||, start: NAAZZ, group: 9, today: +1, thru: F, grouphistory: 24|9||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +1, total: 145, movement: 4, r1: |72|EEDBDCEEDEECDCDCDD, r2: 0|73|DEDCDCDEDDEDDDECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ddv49"
				          }
				        ],
				        gsx$id: {
				          $t: "1666"
				        },
				        gsx$displayname: {
				          $t: "LANGER"
				        },
				        gsx$displayname2: {
				          $t: "Langer"
				        },
				        gsx$firstname: {
				          $t: "Bernhard"
				        },
				        gsx$lastname: {
				          $t: "Langer"
				        },
				        gsx$countrylong: {
				          $t: "Germany"
				        },
				        gsx$country: {
				          $t: "GER"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:48 AM"
				        },
				        gsx$teeorder: {
				          $t: "25"
				        },
				        gsx$sortorder: {
				          $t: "30|19||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "9"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "24|9||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "145"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|72|EEDBDCEEDEECDCDCDD"
				        },
				        gsx$r2: {
				          $t: "0|73|DEDCDCDEDDEDDDECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d415a"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "28089"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: DAY, displayname2: Day, firstname: Jason, lastname: Day, countrylong: Australia, country: AUS, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:59 AM, teeorder: 28, sortorder: 31|20||, start: NAAZZ, group: 10, today: +1, thru: F, grouphistory: 25|10||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +1, total: 145, movement: 4, r1: |72|DcDCcCDdcEdCdDffED, r2: 0|73|EdDCcCdddDECfDECDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d415a"
				          }
				        ],
				        gsx$id: {
				          $t: "28089"
				        },
				        gsx$displayname: {
				          $t: "DAY"
				        },
				        gsx$displayname2: {
				          $t: "Day"
				        },
				        gsx$firstname: {
				          $t: "Jason"
				        },
				        gsx$lastname: {
				          $t: "Day"
				        },
				        gsx$countrylong: {
				          $t: "Australia"
				        },
				        gsx$country: {
				          $t: "AUS"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:59 AM"
				        },
				        gsx$teeorder: {
				          $t: "28"
				        },
				        gsx$sortorder: {
				          $t: "31|20||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "10"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "25|10||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "145"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|72|DcDCcCDdcEdCdDffED"
				        },
				        gsx$r2: {
				          $t: "0|73|EdDCcCdddDECfDECDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d5fpr"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "27141"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: HOLMES, displayname2: Holmes, firstname: J. B., lastname: Holmes, countrylong: United States, country: USA, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 10:54 AM, teeorder: 42, sortorder: 33|21||, start: NAAZZ, group: 14, today: +1, thru: F, grouphistory: 29|14||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +1, total: 145, movement: 4, r1: |72|FEDCDCCEDDDCDEDDDc, r2: 0|73|DEDDDCDDDEDBEDECDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d5fpr"
				          }
				        ],
				        gsx$id: {
				          $t: "27141"
				        },
				        gsx$displayname: {
				          $t: "HOLMES"
				        },
				        gsx$displayname2: {
				          $t: "Holmes"
				        },
				        gsx$firstname: {
				          $t: "J. B."
				        },
				        gsx$lastname: {
				          $t: "Holmes"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "10:54 AM"
				        },
				        gsx$teeorder: {
				          $t: "42"
				        },
				        gsx$sortorder: {
				          $t: "33|21||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "14"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "29|14||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "145"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|72|FEDCDCCEDDDCDEDDDc"
				        },
				        gsx$r2: {
				          $t: "0|73|DEDDDCDDDEDBEDECDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d6ua4"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "29454"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WIESBERGER, displayname2: Wiesberger, firstname: Bernd, lastname: Wiesberger, countrylong: Austria, country: AUT, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 11:49 AM, teeorder: 55, sortorder: 35|22||, start: NAAZZ, group: 19, today: E, thru: 17, grouphistory: 4|19||, thruhistory: 18|17||, lastholewithshot: 2|18, lastlocation: In Fairway, grouplocation: In Fairway, topar: +1, total: 73, movement: 17, r1: |73|DDDCDCcEDEDCEDEECE, r2: 1||DEDDECDDDCDCEDECD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d6ua4"
				          }
				        ],
				        gsx$id: {
				          $t: "29454"
				        },
				        gsx$displayname: {
				          $t: "WIESBERGER"
				        },
				        gsx$displayname2: {
				          $t: "Wiesberger"
				        },
				        gsx$firstname: {
				          $t: "Bernd"
				        },
				        gsx$lastname: {
				          $t: "Wiesberger"
				        },
				        gsx$countrylong: {
				          $t: "Austria"
				        },
				        gsx$country: {
				          $t: "AUT"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:49 AM"
				        },
				        gsx$teeorder: {
				          $t: "55"
				        },
				        gsx$sortorder: {
				          $t: "35|22||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "19"
				        },
				        gsx$today: {
				          $t: "E"
				        },
				        gsx$thru: {
				          $t: "17"
				        },
				        gsx$grouphistory: {
				          $t: "4|19||"
				        },
				        gsx$thruhistory: {
				          $t: "18|17||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "73"
				        },
				        gsx$movement: {
				          $t: "17"
				        },
				        gsx$r1: {
				          $t: "|73|DDDCDCcEDEDCEDEECE"
				        },
				        gsx$r2: {
				          $t: "1||DEDDECDDDCDCEDECD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d88ul"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "20396"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WESTWOOD, displayname2: Westwood, firstname: Lee, lastname: Westwood, countrylong: England, country: ENG, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 12:22 PM, teeorder: 62, sortorder: 15|23||, start: NAAZZ, group: 21, today: +2, thru: 16, grouphistory: 6|21||, thruhistory: 18|16||, lastholewithshot: 2|17, lastlocation: On Green, grouplocation: On 17 Green, topar: +1, total: 71, movement: -4, r1: |71|DEDbEBDEDDDDDDEbDE, r2: -1||EEDDDCEEECDCDDDD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/d88ul"
				          }
				        ],
				        gsx$id: {
				          $t: "20396"
				        },
				        gsx$displayname: {
				          $t: "WESTWOOD"
				        },
				        gsx$displayname2: {
				          $t: "Westwood"
				        },
				        gsx$firstname: {
				          $t: "Lee"
				        },
				        gsx$lastname: {
				          $t: "Westwood"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "12:22 PM"
				        },
				        gsx$teeorder: {
				          $t: "62"
				        },
				        gsx$sortorder: {
				          $t: "15|23||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "21"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "16"
				        },
				        gsx$grouphistory: {
				          $t: "6|21||"
				        },
				        gsx$thruhistory: {
				          $t: "18|16||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|17"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 17 Green"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "71"
				        },
				        gsx$movement: {
				          $t: "-4"
				        },
				        gsx$r1: {
				          $t: "|71|DEDbEBDEDDDDDDEbDE"
				        },
				        gsx$r2: {
				          $t: "-1||EEDDDCEEECDCDDDD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dkvya"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "30925"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: JOHNSON, D., displayname2: Johnson, D., firstname: Dustin, lastname: Johnson, countrylong: United States, country: USA, live: fg1, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:06 PM, teeorder: 74, sortorder: 36|24||, start: NAAZZ, group: 25, today: E, thru: 13, grouphistory: 10|25||, thruhistory: 18|13||, lastholewithshot: 2|14, lastlocation: On Green, grouplocation: On 14 Green, topar: +1, total: 73, movement: 17, r1: |73|DFDCDBcECEFCECFBDE, r2: 1||DdDDDCDDEDECD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dkvya"
				          }
				        ],
				        gsx$id: {
				          $t: "30925"
				        },
				        gsx$displayname: {
				          $t: "JOHNSON, D."
				        },
				        gsx$displayname2: {
				          $t: "Johnson, D."
				        },
				        gsx$firstname: {
				          $t: "Dustin"
				        },
				        gsx$lastname: {
				          $t: "Johnson"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "fg1"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:06 PM"
				        },
				        gsx$teeorder: {
				          $t: "74"
				        },
				        gsx$sortorder: {
				          $t: "36|24||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "25"
				        },
				        gsx$today: {
				          $t: "E"
				        },
				        gsx$thru: {
				          $t: "13"
				        },
				        gsx$grouphistory: {
				          $t: "10|25||"
				        },
				        gsx$thruhistory: {
				          $t: "18|13||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|14"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 14 Green"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "73"
				        },
				        gsx$movement: {
				          $t: "17"
				        },
				        gsx$r1: {
				          $t: "|73|DFDCDBcECEFCECFBDE"
				        },
				        gsx$r2: {
				          $t: "1||DdDDDCDDEDECD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dmair"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25396"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: NA, displayname2: Na, firstname: Kevin, lastname: Na, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:28 PM, teeorder: 80, sortorder: 26|25||, start: NAAZZ, group: 27, today: +1, thru: 12, grouphistory: 12|27||, thruhistory: 18|12||, lastholewithshot: 2|13, lastlocation: In the Hole, grouplocation: On Tee, topar: +1, total: 72, movement: 4, r1: |72|EEDBDCDEDDDDECECDD, r2: 0||FEDCDCCEDCDD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dmair"
				          }
				        ],
				        gsx$id: {
				          $t: "25396"
				        },
				        gsx$displayname: {
				          $t: "NA"
				        },
				        gsx$displayname2: {
				          $t: "Na"
				        },
				        gsx$firstname: {
				          $t: "Kevin"
				        },
				        gsx$lastname: {
				          $t: "Na"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:28 PM"
				        },
				        gsx$teeorder: {
				          $t: "80"
				        },
				        gsx$sortorder: {
				          $t: "26|25||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "27"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "12"
				        },
				        gsx$grouphistory: {
				          $t: "12|27||"
				        },
				        gsx$thruhistory: {
				          $t: "18|12||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|13"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|72|EEDBDCDEDDDDECECDD"
				        },
				        gsx$r2: {
				          $t: "0||FEDCDCCEDCDD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dnp34"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "21528"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: STENSON, displayname2: Stenson, firstname: Henrik, lastname: Stenson, countrylong: Sweden, country: SWE, live: ac, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:39 PM, teeorder: 83, sortorder: 28|26||, start: NAAZZ, group: 28, today: +1, thru: 11, grouphistory: 13|28||, thruhistory: 18|11||, lastholewithshot: 2|12, lastlocation: On Green, grouplocation: On 12 Green, topar: +1, total: 72, movement: 4, r1: |72|EDDbDDDdDDDEDDEDDC, r2: 0||EDDCDbDEEED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dnp34"
				          }
				        ],
				        gsx$id: {
				          $t: "21528"
				        },
				        gsx$displayname: {
				          $t: "STENSON"
				        },
				        gsx$displayname2: {
				          $t: "Stenson"
				        },
				        gsx$firstname: {
				          $t: "Henrik"
				        },
				        gsx$lastname: {
				          $t: "Stenson"
				        },
				        gsx$countrylong: {
				          $t: "Sweden"
				        },
				        gsx$country: {
				          $t: "SWE"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:39 PM"
				        },
				        gsx$teeorder: {
				          $t: "83"
				        },
				        gsx$sortorder: {
				          $t: "28|26||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "28"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "11"
				        },
				        gsx$grouphistory: {
				          $t: "13|28||"
				        },
				        gsx$thruhistory: {
				          $t: "18|11||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|12"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 12 Green"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|72|EDDbDDDdDDDEDDEDDC"
				        },
				        gsx$r2: {
				          $t: "0||EDDCDbDEEED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dp3nl"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25369"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: DONALDSON, displayname2: Donaldson, firstname: Jamie, lastname: Donaldson, countrylong: Wales, country: WAL, live: ac, video: FALSE, pos: T17, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:50 PM, teeorder: 85, sortorder: 47|27||, start: NAAZZ, group: 29, today: -1, thru: 10, grouphistory: 14|29||, thruhistory: 18|10||, lastholewithshot: 2|11, lastlocation: On Green, grouplocation: On 11 Green, topar: +1, total: 74, movement: 26, r1: |74|DDDCCDDFEEDBEEDCED, r2: 2||EDCDDCDDDD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dp3nl"
				          }
				        ],
				        gsx$id: {
				          $t: "25369"
				        },
				        gsx$displayname: {
				          $t: "DONALDSON"
				        },
				        gsx$displayname2: {
				          $t: "Donaldson"
				        },
				        gsx$firstname: {
				          $t: "Jamie"
				        },
				        gsx$lastname: {
				          $t: "Donaldson"
				        },
				        gsx$countrylong: {
				          $t: "Wales"
				        },
				        gsx$country: {
				          $t: "WAL"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T17"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:50 PM"
				        },
				        gsx$teeorder: {
				          $t: "85"
				        },
				        gsx$sortorder: {
				          $t: "47|27||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "29"
				        },
				        gsx$today: {
				          $t: "-1"
				        },
				        gsx$thru: {
				          $t: "10"
				        },
				        gsx$grouphistory: {
				          $t: "14|29||"
				        },
				        gsx$thruhistory: {
				          $t: "18|10||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|11"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 11 Green"
				        },
				        gsx$topar: {
				          $t: "+1"
				        },
				        gsx$total: {
				          $t: "74"
				        },
				        gsx$movement: {
				          $t: "26"
				        },
				        gsx$r1: {
				          $t: "|74|DDDCCDDFEEDBEEDCED"
				        },
				        gsx$r2: {
				          $t: "2||EDCDDCDDDD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/df9om"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "1706"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LOVE III, displayname2: Love III, firstname: Davis, lastname: Love III, countrylong: United States, country: USA, video: FALSE, pos: T28, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:15 AM, teeorder: 17, sortorder: 39|28||, start: NAAZZ, group: 6, today: +1, thru: F, grouphistory: 21|6||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +2, total: 146, movement: 6, r1: |73|DDECDCDEEDCDDDEDDD, r2: 1|73|DEcbcCDEDDEEEEDDDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/df9om"
				          }
				        ],
				        gsx$id: {
				          $t: "1706"
				        },
				        gsx$displayname: {
				          $t: "LOVE III"
				        },
				        gsx$displayname2: {
				          $t: "Love III"
				        },
				        gsx$firstname: {
				          $t: "Davis"
				        },
				        gsx$lastname: {
				          $t: "Love III"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:15 AM"
				        },
				        gsx$teeorder: {
				          $t: "17"
				        },
				        gsx$sortorder: {
				          $t: "39|28||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "6"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "21|6||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "146"
				        },
				        gsx$movement: {
				          $t: "6"
				        },
				        gsx$r1: {
				          $t: "|73|DDECDCDEEDCDDDEDDD"
				        },
				        gsx$r2: {
				          $t: "1|73|DEcbcCDEDDEEEEDDDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dgo93"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25632"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WALKER, displayname2: Walker, firstname: Jimmy, lastname: Walker, countrylong: United States, country: USA, video: FALSE, pos: T28, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 10:32 AM, teeorder: 34, sortorder: 20|29||, start: NAAZZ, group: 12, today: +3, thru: F, grouphistory: 27|12||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +2, total: 146, movement: -15, r1: |71|DDDCcCEEcDECdDECED, r2: -1|75|DEcCDCDEDDEDFDFCDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dgo93"
				          }
				        ],
				        gsx$id: {
				          $t: "25632"
				        },
				        gsx$displayname: {
				          $t: "WALKER"
				        },
				        gsx$displayname2: {
				          $t: "Walker"
				        },
				        gsx$firstname: {
				          $t: "Jimmy"
				        },
				        gsx$lastname: {
				          $t: "Walker"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "10:32 AM"
				        },
				        gsx$teeorder: {
				          $t: "34"
				        },
				        gsx$sortorder: {
				          $t: "20|29||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "12"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "27|12||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "146"
				        },
				        gsx$movement: {
				          $t: "-15"
				        },
				        gsx$r1: {
				          $t: "|71|DDDCcCEEcDECdDECED"
				        },
				        gsx$r2: {
				          $t: "-1|75|DEcCDCDEDDEDFDFCDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/di2tg"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "20848"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: CABRERA, displayname2: Cabrera, firstname: Angel, lastname: Cabrera, countrylong: Argentina, country: ARG, video: FALSE, pos: T28, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:54 AM, teeorder: 40, sortorder: 42|30||, start: NAAZZ, group: 14, today: +1, thru: F, grouphistory: 29|14||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +2, total: 146, movement: 6, r1: |73|EECCECDDDDDCEcIBDc, r2: 1|73|DFDCECDEDCDCEDGBCD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/di2tg"
				          }
				        ],
				        gsx$id: {
				          $t: "20848"
				        },
				        gsx$displayname: {
				          $t: "CABRERA"
				        },
				        gsx$displayname2: {
				          $t: "Cabrera"
				        },
				        gsx$firstname: {
				          $t: "Angel"
				        },
				        gsx$lastname: {
				          $t: "Cabrera"
				        },
				        gsx$countrylong: {
				          $t: "Argentina"
				        },
				        gsx$country: {
				          $t: "ARG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:54 AM"
				        },
				        gsx$teeorder: {
				          $t: "40"
				        },
				        gsx$sortorder: {
				          $t: "42|30||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "14"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "29|14||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "146"
				        },
				        gsx$movement: {
				          $t: "6"
				        },
				        gsx$r1: {
				          $t: "|73|EECCECDDDDDCEcIBDc"
				        },
				        gsx$r2: {
				          $t: "1|73|DFDCECDEDCDCEDGBCD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/djhdx"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "27214"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: STREELMAN, displayname2: Streelman, firstname: Kevin, lastname: Streelman, countrylong: United States, country: USA, video: FALSE, pos: T28, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 11:38 AM, teeorder: 53, sortorder: 13|31||, start: NAAZZ, group: 18, today: +3, thru: F, grouphistory: 3|18||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +2, total: 146, movement: -15, r1: |71|DEECDCDEDCDDEDDbEC, r2: -1|75|FDCDDDDEEDECDDECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/djhdx"
				          }
				        ],
				        gsx$id: {
				          $t: "27214"
				        },
				        gsx$displayname: {
				          $t: "STREELMAN"
				        },
				        gsx$displayname2: {
				          $t: "Streelman"
				        },
				        gsx$firstname: {
				          $t: "Kevin"
				        },
				        gsx$lastname: {
				          $t: "Streelman"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:38 AM"
				        },
				        gsx$teeorder: {
				          $t: "53"
				        },
				        gsx$sortorder: {
				          $t: "13|31||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "18"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "3|18||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "146"
				        },
				        gsx$movement: {
				          $t: "-15"
				        },
				        gsx$r1: {
				          $t: "|71|DEECDCDEDCDDEDDbEC"
				        },
				        gsx$r2: {
				          $t: "-1|75|FDCDDDDEEDECDDECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dw4je"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "22000"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WOOD, displayname2: Wood, firstname: Chris, lastname: Wood, countrylong: England, country: ENG, video: FALSE, pos: T28, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 12:00 PM, teeorder: 58, sortorder: 21|32||, start: NAAZZ, group: 20, today: +2, thru: 17, grouphistory: 5|20||, thruhistory: 18|17||, lastholewithshot: 2|18, lastlocation: In Fairway, grouplocation: In Fairway, topar: +2, total: 72, movement: -7, r1: |72|DEDCDCDEDDDDEDECDC, r2: 0||DDDCCCEFEDDCDEECE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dw4je"
				          }
				        ],
				        gsx$id: {
				          $t: "22000"
				        },
				        gsx$displayname: {
				          $t: "WOOD"
				        },
				        gsx$displayname2: {
				          $t: "Wood"
				        },
				        gsx$firstname: {
				          $t: "Chris"
				        },
				        gsx$lastname: {
				          $t: "Wood"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "12:00 PM"
				        },
				        gsx$teeorder: {
				          $t: "58"
				        },
				        gsx$sortorder: {
				          $t: "21|32||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "20"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "17"
				        },
				        gsx$grouphistory: {
				          $t: "5|20||"
				        },
				        gsx$thruhistory: {
				          $t: "18|17||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "-7"
				        },
				        gsx$r1: {
				          $t: "|72|DEDCDCDEDDDDEDECDC"
				        },
				        gsx$r2: {
				          $t: "0||DDDCCCEFEDDCDEECE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dxj3v"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "34360"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: REED, displayname2: Reed, firstname: Patrick, lastname: Reed, countrylong: United States, country: USA, live: fg1, video: FALSE, pos: T28, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:44 PM, teeorder: 68, sortorder: 63|33||, start: NAAZZ, group: 23, today: -2, thru: 15, grouphistory: 8|23||, thruhistory: 18|15||, lastholewithshot: 2|16, lastlocation: On Green, grouplocation: On 16 Green, topar: +2, total: 76, movement: 31, r1: |76|EEECDDDEDDECDEECDD, r2: 4||DDCDDCDcDEDCFDD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dxj3v"
				          }
				        ],
				        gsx$id: {
				          $t: "34360"
				        },
				        gsx$displayname: {
				          $t: "REED"
				        },
				        gsx$displayname2: {
				          $t: "Reed"
				        },
				        gsx$firstname: {
				          $t: "Patrick"
				        },
				        gsx$lastname: {
				          $t: "Reed"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "fg1"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:44 PM"
				        },
				        gsx$teeorder: {
				          $t: "68"
				        },
				        gsx$sortorder: {
				          $t: "63|33||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "23"
				        },
				        gsx$today: {
				          $t: "-2"
				        },
				        gsx$thru: {
				          $t: "15"
				        },
				        gsx$grouphistory: {
				          $t: "8|23||"
				        },
				        gsx$thruhistory: {
				          $t: "18|15||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|16"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 16 Green"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "76"
				        },
				        gsx$movement: {
				          $t: "31"
				        },
				        gsx$r1: {
				          $t: "|76|EEECDDDEDDECDEECDD"
				        },
				        gsx$r2: {
				          $t: "4||DDCDDCDcDEDCFDD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dyxo8"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "40026"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: BERGER, displayname2: Berger, firstname: Daniel, lastname: Berger, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T28, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:50 PM, teeorder: 86, sortorder: 37|34||, start: NAAZZ, group: 29, today: +1, thru: 10, grouphistory: 14|29||, thruhistory: 18|10||, lastholewithshot: 2|11, lastlocation: On Green, grouplocation: On 11 Green, topar: +2, total: 73, movement: 6, r1: |73|DECbDCDdDEDDFDDDED, r2: 1||EDDDDCDDDE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dyxo8"
				          }
				        ],
				        gsx$id: {
				          $t: "40026"
				        },
				        gsx$displayname: {
				          $t: "BERGER"
				        },
				        gsx$displayname2: {
				          $t: "Berger"
				        },
				        gsx$firstname: {
				          $t: "Daniel"
				        },
				        gsx$lastname: {
				          $t: "Berger"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T28"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:50 PM"
				        },
				        gsx$teeorder: {
				          $t: "86"
				        },
				        gsx$sortorder: {
				          $t: "37|34||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "29"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "10"
				        },
				        gsx$grouphistory: {
				          $t: "14|29||"
				        },
				        gsx$thruhistory: {
				          $t: "18|10||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|11"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 11 Green"
				        },
				        gsx$topar: {
				          $t: "+2"
				        },
				        gsx$total: {
				          $t: "73"
				        },
				        gsx$movement: {
				          $t: "6"
				        },
				        gsx$r1: {
				          $t: "|73|DECbDCDdDEDDFDDDED"
				        },
				        gsx$r2: {
				          $t: "1||EDDDDCDDDE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e0c8p"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "35891"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SMITH, displayname2: Smith, firstname: Cameron, lastname: Smith, countrylong: Australia, country: AUS, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:20 AM, teeorder: 2, sortorder: 48|35||, start: NAAZZ, group: 1, today: +1, thru: F, grouphistory: 16|1||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: 8, r1: |74|EEFCDCDDDDECDDDDDD, r2: 2|73|DECDDEDEDDDCECECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e0c8p"
				          }
				        ],
				        gsx$id: {
				          $t: "35891"
				        },
				        gsx$displayname: {
				          $t: "SMITH"
				        },
				        gsx$displayname2: {
				          $t: "Smith"
				        },
				        gsx$firstname: {
				          $t: "Cameron"
				        },
				        gsx$lastname: {
				          $t: "Smith"
				        },
				        gsx$countrylong: {
				          $t: "Australia"
				        },
				        gsx$country: {
				          $t: "AUS"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:20 AM"
				        },
				        gsx$teeorder: {
				          $t: "2"
				        },
				        gsx$sortorder: {
				          $t: "48|35||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "1"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "16|1||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "8"
				        },
				        gsx$r1: {
				          $t: "|74|EEFCDCDDDDECDDDDDD"
				        },
				        gsx$r2: {
				          $t: "2|73|DECDDEDEDDDCECECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dqi9q"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "29420"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: HORSCHEL, displayname2: Horschel, firstname: Billy, lastname: Horschel, countrylong: United States, country: USA, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 8:42 AM, teeorder: 8, sortorder: 9|36||, start: NAAZZ, group: 3, today: +5, thru: F, grouphistory: 18|3||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: -26, r1: |70|DDDCDDDEDEDBEDEBDc, r2: -2|77|EDDDDDDdDEDCEDEDEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dqi9q"
				          }
				        ],
				        gsx$id: {
				          $t: "29420"
				        },
				        gsx$displayname: {
				          $t: "HORSCHEL"
				        },
				        gsx$displayname2: {
				          $t: "Horschel"
				        },
				        gsx$firstname: {
				          $t: "Billy"
				        },
				        gsx$lastname: {
				          $t: "Horschel"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "8:42 AM"
				        },
				        gsx$teeorder: {
				          $t: "8"
				        },
				        gsx$sortorder: {
				          $t: "9|36||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "3"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "18|3||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "-26"
				        },
				        gsx$r1: {
				          $t: "|70|DDDCDDDEDEDBEDEBDc"
				        },
				        gsx$r2: {
				          $t: "-2|77|EDDDDDDdDEDCEDEDEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/drwu7"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "40098"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: FITZPATRICK, displayname2: Fitzpatrick, firstname: Matthew, lastname: Fitzpatrick, countrylong: England, country: ENG, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:42 AM, teeorder: 9, sortorder: 18|37||, start: NAAZZ, group: 3, today: +4, thru: F, grouphistory: 18|3||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: -22, r1: |71|CDECDCDEDDDCEDEbED, r2: -1|76|DEDCEDDEDEECEDECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/drwu7"
				          }
				        ],
				        gsx$id: {
				          $t: "40098"
				        },
				        gsx$displayname: {
				          $t: "FITZPATRICK"
				        },
				        gsx$displayname2: {
				          $t: "Fitzpatrick"
				        },
				        gsx$firstname: {
				          $t: "Matthew"
				        },
				        gsx$lastname: {
				          $t: "Fitzpatrick"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:42 AM"
				        },
				        gsx$teeorder: {
				          $t: "9"
				        },
				        gsx$sortorder: {
				          $t: "18|37||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "3"
				        },
				        gsx$today: {
				          $t: "+4"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "18|3||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "-22"
				        },
				        gsx$r1: {
				          $t: "|71|CDECDCDEDDDCEDEbED"
				        },
				        gsx$r2: {
				          $t: "-1|76|DEDCEDDEDEECEDECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dtbek"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "33141"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: BRADLEY, displayname2: Bradley, firstname: Keegan, lastname: Bradley, countrylong: United States, country: USA, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:04 AM, teeorder: 13, sortorder: 50|38||, start: NAAZZ, group: 5, today: +1, thru: F, grouphistory: 20|5||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: 8, r1: |74|CdDDDCFDDDECEDECDE, r2: 2|73|DEDCDCEEEDECDDDBED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dtbek"
				          }
				        ],
				        gsx$id: {
				          $t: "33141"
				        },
				        gsx$displayname: {
				          $t: "BRADLEY"
				        },
				        gsx$displayname2: {
				          $t: "Bradley"
				        },
				        gsx$firstname: {
				          $t: "Keegan"
				        },
				        gsx$lastname: {
				          $t: "Bradley"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:04 AM"
				        },
				        gsx$teeorder: {
				          $t: "13"
				        },
				        gsx$sortorder: {
				          $t: "50|38||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "5"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "20|5||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "8"
				        },
				        gsx$r1: {
				          $t: "|74|CdDDDCFDDDECEDECDE"
				        },
				        gsx$r2: {
				          $t: "2|73|DEDCDCEEEDECDDDBED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dupz1"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "26499"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: CABRERA-BELLO, displayname2: Cabrera-Bello, firstname: Rafael, lastname: Cabrera-Bello, countrylong: Spain, country: ESP, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:15 AM, teeorder: 18, sortorder: 51|39||, start: NAAZZ, group: 6, today: +1, thru: F, grouphistory: 21|6||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: 8, r1: |74|EDDCDCDEEEECDDEDDC, r2: 2|73|DFDCCEDDDDEBDDEDDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/dupz1"
				          }
				        ],
				        gsx$id: {
				          $t: "26499"
				        },
				        gsx$displayname: {
				          $t: "CABRERA-BELLO"
				        },
				        gsx$displayname2: {
				          $t: "Cabrera-Bello"
				        },
				        gsx$firstname: {
				          $t: "Rafael"
				        },
				        gsx$lastname: {
				          $t: "Cabrera-Bello"
				        },
				        gsx$countrylong: {
				          $t: "Spain"
				        },
				        gsx$country: {
				          $t: "ESP"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:15 AM"
				        },
				        gsx$teeorder: {
				          $t: "18"
				        },
				        gsx$sortorder: {
				          $t: "51|39||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "6"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "21|6||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "8"
				        },
				        gsx$r1: {
				          $t: "|74|EDDCDCDEEEECDDEDDC"
				        },
				        gsx$r2: {
				          $t: "2|73|DFDCCEDDDDEBDDEDDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e7d2q"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "24138"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: POULTER, displayname2: Poulter, firstname: Ian, lastname: Poulter, countrylong: England, country: ENG, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:37 AM, teeorder: 24, sortorder: 6|40||, start: NAAZZ, group: 8, today: +6, thru: F, grouphistory: 23|8||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: -31, r1: |69|DEDCCbEDDEECDcEbDD, r2: -3|78|DFDDDCDEDEDCEFECED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e7d2q"
				          }
				        ],
				        gsx$id: {
				          $t: "24138"
				        },
				        gsx$displayname: {
				          $t: "POULTER"
				        },
				        gsx$displayname2: {
				          $t: "Poulter"
				        },
				        gsx$firstname: {
				          $t: "Ian"
				        },
				        gsx$lastname: {
				          $t: "Poulter"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:37 AM"
				        },
				        gsx$teeorder: {
				          $t: "24"
				        },
				        gsx$sortorder: {
				          $t: "6|40||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "8"
				        },
				        gsx$today: {
				          $t: "+6"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "23|8||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "-31"
				        },
				        gsx$r1: {
				          $t: "|69|DEDCCbEDDEECDcEbDD"
				        },
				        gsx$r2: {
				          $t: "-3|78|DFDDDCDEDEDCEFECED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e8rn7"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "37250"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LANGASQUE, displayname2: Langasque, firstname: Romain, lastname: Langasque, countrylong: France, country: FRA, video: FALSE, pos: T35, amateur: TRUE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:48 AM, teeorder: 27, sortorder: 52|41||, start: NAAZZ, group: 9, today: +1, thru: F, grouphistory: 24|9||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 147, movement: 8, r1: |74|DEDCEBDDEDDCEDEDED, r2: 2|73|DEDCECDECDECEDCDED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e8rn7"
				          }
				        ],
				        gsx$id: {
				          $t: "37250"
				        },
				        gsx$displayname: {
				          $t: "LANGASQUE"
				        },
				        gsx$displayname2: {
				          $t: "Langasque"
				        },
				        gsx$firstname: {
				          $t: "Romain"
				        },
				        gsx$lastname: {
				          $t: "Langasque"
				        },
				        gsx$countrylong: {
				          $t: "France"
				        },
				        gsx$country: {
				          $t: "FRA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "TRUE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:48 AM"
				        },
				        gsx$teeorder: {
				          $t: "27"
				        },
				        gsx$sortorder: {
				          $t: "52|41||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "9"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "24|9||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "147"
				        },
				        gsx$movement: {
				          $t: "8"
				        },
				        gsx$r1: {
				          $t: "|74|DEDCEBDDEDDCEDEDED"
				        },
				        gsx$r2: {
				          $t: "2|73|DEDCECDECDECEDCDED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ea67k"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "26851"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LEISHMAN, displayname2: Leishman, firstname: Marc, lastname: Leishman, countrylong: Australia, country: AUS, live: ac, video: FALSE, pos: T35, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:39 PM, teeorder: 82, sortorder: 46|42||, start: NAAZZ, group: 28, today: +1, thru: 11, grouphistory: 13|28||, thruhistory: 18|11||, lastholewithshot: 2|12, lastlocation: In the Hole, grouplocation: On Tee, topar: +3, total: 74, movement: 8, r1: |74|EEDCECDDDDECEDFCCD, r2: 2||DFDCDCEECCE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ea67k"
				          }
				        ],
				        gsx$id: {
				          $t: "26851"
				        },
				        gsx$displayname: {
				          $t: "LEISHMAN"
				        },
				        gsx$displayname2: {
				          $t: "Leishman"
				        },
				        gsx$firstname: {
				          $t: "Marc"
				        },
				        gsx$lastname: {
				          $t: "Leishman"
				        },
				        gsx$countrylong: {
				          $t: "Australia"
				        },
				        gsx$country: {
				          $t: "AUS"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T35"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:39 PM"
				        },
				        gsx$teeorder: {
				          $t: "82"
				        },
				        gsx$sortorder: {
				          $t: "46|42||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "28"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "11"
				        },
				        gsx$grouphistory: {
				          $t: "13|28||"
				        },
				        gsx$thruhistory: {
				          $t: "18|11||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|12"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+3"
				        },
				        gsx$total: {
				          $t: "74"
				        },
				        gsx$movement: {
				          $t: "8"
				        },
				        gsx$r1: {
				          $t: "|74|EEDCECDDDDECEDFCCD"
				        },
				        gsx$r2: {
				          $t: "2||DFDCDCEECCE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ebks1"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "24781"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MAHAN, displayname2: Mahan, firstname: Hunter, lastname: Mahan, countrylong: United States, country: USA, video: FALSE, pos: T43, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:48 AM, teeorder: 26, sortorder: 41|43||, start: NAAZZ, group: 9, today: +3, thru: F, grouphistory: 24|9||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +4, total: 148, movement: -9, r1: |73|DECCCDDEEEDDEDEBCE, r2: 1|75|DDDCECEFDDDCDEDCEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ebks1"
				          }
				        ],
				        gsx$id: {
				          $t: "24781"
				        },
				        gsx$displayname: {
				          $t: "MAHAN"
				        },
				        gsx$displayname2: {
				          $t: "Mahan"
				        },
				        gsx$firstname: {
				          $t: "Hunter"
				        },
				        gsx$lastname: {
				          $t: "Mahan"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T43"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:48 AM"
				        },
				        gsx$teeorder: {
				          $t: "26"
				        },
				        gsx$sortorder: {
				          $t: "41|43||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "9"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "24|9||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+4"
				        },
				        gsx$total: {
				          $t: "148"
				        },
				        gsx$movement: {
				          $t: "-9"
				        },
				        gsx$r1: {
				          $t: "|73|DECCCDDEEEDDEDEBCE"
				        },
				        gsx$r2: {
				          $t: "1|75|DDDCECEFDDDCDEDCEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e1qt2"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "23108"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KUCHAR, displayname2: Kuchar, firstname: Matt, lastname: Kuchar, countrylong: United States, country: USA, video: FALSE, pos: T43, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:59 AM, teeorder: 29, sortorder: 57|44||, start: NAAZZ, group: 10, today: +1, thru: F, grouphistory: 25|10||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +4, total: 148, movement: 11, r1: |75|cdDDDDDEEEDCEDECED, r2: 3|73|EEDCDCDDDcECEDECED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e1qt2"
				          }
				        ],
				        gsx$id: {
				          $t: "23108"
				        },
				        gsx$displayname: {
				          $t: "KUCHAR"
				        },
				        gsx$displayname2: {
				          $t: "Kuchar"
				        },
				        gsx$firstname: {
				          $t: "Matt"
				        },
				        gsx$lastname: {
				          $t: "Kuchar"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T43"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:59 AM"
				        },
				        gsx$teeorder: {
				          $t: "29"
				        },
				        gsx$sortorder: {
				          $t: "57|44||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "10"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "25|10||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+4"
				        },
				        gsx$total: {
				          $t: "148"
				        },
				        gsx$movement: {
				          $t: "11"
				        },
				        gsx$r1: {
				          $t: "|75|cdDDDDDEEEDCEDECED"
				        },
				        gsx$r2: {
				          $t: "3|73|EEDCDCDDDcECEDECED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e35dj"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "12716"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: HOFFMAN, displayname2: Hoffman, firstname: Charley, lastname: Hoffman, countrylong: United States, country: USA, video: FALSE, pos: T43, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:22 PM, teeorder: 61, sortorder: 14|45||, start: NAAZZ, group: 21, today: +5, thru: 16, grouphistory: 6|21||, thruhistory: 18|16||, lastholewithshot: 2|17, lastlocation: On Green, grouplocation: On 17 Green, topar: +4, total: 71, movement: -30, r1: |71|DEDDCCDEDEDDCDDCDD, r2: -1||EECCDDEEDFDCDDGC , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e35dj"
				          }
				        ],
				        gsx$id: {
				          $t: "12716"
				        },
				        gsx$displayname: {
				          $t: "HOFFMAN"
				        },
				        gsx$displayname2: {
				          $t: "Hoffman"
				        },
				        gsx$firstname: {
				          $t: "Charley"
				        },
				        gsx$lastname: {
				          $t: "Hoffman"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T43"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:22 PM"
				        },
				        gsx$teeorder: {
				          $t: "61"
				        },
				        gsx$sortorder: {
				          $t: "14|45||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "21"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "16"
				        },
				        gsx$grouphistory: {
				          $t: "6|21||"
				        },
				        gsx$thruhistory: {
				          $t: "18|16||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|17"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 17 Green"
				        },
				        gsx$topar: {
				          $t: "+4"
				        },
				        gsx$total: {
				          $t: "71"
				        },
				        gsx$movement: {
				          $t: "-30"
				        },
				        gsx$r1: {
				          $t: "|71|DEDDCCDEDEDDCDDCDD"
				        },
				        gsx$r2: {
				          $t: "-1||EECCDDEEDFDCDDGC "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e4jxw"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "34099"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: ENGLISH, displayname2: English, firstname: Harris, lastname: English, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T43, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:28 PM, teeorder: 78, sortorder: 45|46||, start: NAAZZ, group: 27, today: +2, thru: 12, grouphistory: 12|27||, thruhistory: 18|12||, lastholewithshot: 2|12, lastlocation: In the Hole, grouplocation: On Tee, topar: +4, total: 74, movement: 0, r1: |74|DDDCECDFDCECEDDDDE, r2: 2||CECDDCEEDDED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e4jxw"
				          }
				        ],
				        gsx$id: {
				          $t: "34099"
				        },
				        gsx$displayname: {
				          $t: "ENGLISH"
				        },
				        gsx$displayname2: {
				          $t: "English"
				        },
				        gsx$firstname: {
				          $t: "Harris"
				        },
				        gsx$lastname: {
				          $t: "English"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T43"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:28 PM"
				        },
				        gsx$teeorder: {
				          $t: "78"
				        },
				        gsx$sortorder: {
				          $t: "45|46||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "27"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "12"
				        },
				        gsx$grouphistory: {
				          $t: "12|27||"
				        },
				        gsx$thruhistory: {
				          $t: "18|12||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|12"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+4"
				        },
				        gsx$total: {
				          $t: "74"
				        },
				        gsx$movement: {
				          $t: "0"
				        },
				        gsx$r1: {
				          $t: "|74|DDDCECDFDCECEDDDDE"
				        },
				        gsx$r2: {
				          $t: "2||CECDDCEEDDED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e5yid"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "1810"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MICKELSON, displayname2: Mickelson, firstname: Phil, lastname: Mickelson, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T43, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:39 PM, teeorder: 81, sortorder: 27|47||, start: NAAZZ, group: 28, today: +4, thru: 11, grouphistory: 13|28||, thruhistory: 18|11||, lastholewithshot: 2|11, lastlocation: In the Hole, grouplocation: On Tee, topar: +4, total: 72, movement: -22, r1: |72|eEDCDCDDDEECDDEbcE, r2: 0||EdcCDCfFEDE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/e5yid"
				          }
				        ],
				        gsx$id: {
				          $t: "1810"
				        },
				        gsx$displayname: {
				          $t: "MICKELSON"
				        },
				        gsx$displayname2: {
				          $t: "Mickelson"
				        },
				        gsx$firstname: {
				          $t: "Phil"
				        },
				        gsx$lastname: {
				          $t: "Mickelson"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T43"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:39 PM"
				        },
				        gsx$teeorder: {
				          $t: "81"
				        },
				        gsx$sortorder: {
				          $t: "27|47||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "28"
				        },
				        gsx$today: {
				          $t: "+4"
				        },
				        gsx$thru: {
				          $t: "11"
				        },
				        gsx$grouphistory: {
				          $t: "13|28||"
				        },
				        gsx$thruhistory: {
				          $t: "18|11||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|11"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+4"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "-22"
				        },
				        gsx$r1: {
				          $t: "|72|eEDCDCDDDEECDDEbcE"
				        },
				        gsx$r2: {
				          $t: "0||EdcCDCfFEDE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eilm2"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "31420"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LAHIRI, displayname2: Lahiri, firstname: Anirban, lastname: Lahiri, countrylong: India, country: IND, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:32 AM, teeorder: 36, sortorder: 70|48||, start: NAAZZ, group: 12, today: +1, thru: F, grouphistory: 27|12||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +5, total: 149, movement: 11, r1: |76|DEDDDBDEDDECECEFED, r2: 4|73|DEcCCCEEDDCCFDFCED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eilm2"
				          }
				        ],
				        gsx$id: {
				          $t: "31420"
				        },
				        gsx$displayname: {
				          $t: "LAHIRI"
				        },
				        gsx$displayname2: {
				          $t: "Lahiri"
				        },
				        gsx$firstname: {
				          $t: "Anirban"
				        },
				        gsx$lastname: {
				          $t: "Lahiri"
				        },
				        gsx$countrylong: {
				          $t: "India"
				        },
				        gsx$country: {
				          $t: "IND"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:32 AM"
				        },
				        gsx$teeorder: {
				          $t: "36"
				        },
				        gsx$sortorder: {
				          $t: "70|48||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "12"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "27|12||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "149"
				        },
				        gsx$movement: {
				          $t: "11"
				        },
				        gsx$r1: {
				          $t: "|76|DEDDDBDEDDECECEFED"
				        },
				        gsx$r2: {
				          $t: "4|73|DEcCCCEEDDCCFDFCED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ek06j"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "27408"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KAYMER, displayname2: Kaymer, firstname: Martin, lastname: Kaymer, countrylong: Germany, country: GER, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 11:05 AM, teeorder: 43, sortorder: 53|49||, start: NAAZZ, group: 15, today: +3, thru: F, grouphistory: 30|15||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +5, total: 149, movement: -5, r1: |74|EDDCDCDEDEECDDEDCE, r2: 2|75|EdDCECDEDDEBFDFDCD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ek06j"
				          }
				        ],
				        gsx$id: {
				          $t: "27408"
				        },
				        gsx$displayname: {
				          $t: "KAYMER"
				        },
				        gsx$displayname2: {
				          $t: "Kaymer"
				        },
				        gsx$firstname: {
				          $t: "Martin"
				        },
				        gsx$lastname: {
				          $t: "Kaymer"
				        },
				        gsx$countrylong: {
				          $t: "Germany"
				        },
				        gsx$country: {
				          $t: "GER"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:05 AM"
				        },
				        gsx$teeorder: {
				          $t: "43"
				        },
				        gsx$sortorder: {
				          $t: "53|49||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "15"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "30|15||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "149"
				        },
				        gsx$movement: {
				          $t: "-5"
				        },
				        gsx$r1: {
				          $t: "|74|EDDCDCDEDEECDDEDCE"
				        },
				        gsx$r2: {
				          $t: "2|75|EdDCECDEDDEBFDFDCD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eleqw"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "24924"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: HAAS, displayname2: Haas, firstname: Bill, lastname: Haas, countrylong: United States, country: USA, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 11:05 AM, teeorder: 44, sortorder: 58|50||, start: NAAZZ, group: 15, today: +2, thru: F, grouphistory: 30|15||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +5, total: 149, movement: 6, r1: |75|FEDCECEDDDECDEDCDD, r2: 3|74|DECDDCDEECEDEDECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eleqw"
				          }
				        ],
				        gsx$id: {
				          $t: "24924"
				        },
				        gsx$displayname: {
				          $t: "HAAS"
				        },
				        gsx$displayname2: {
				          $t: "Haas"
				        },
				        gsx$firstname: {
				          $t: "Bill"
				        },
				        gsx$lastname: {
				          $t: "Haas"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:05 AM"
				        },
				        gsx$teeorder: {
				          $t: "44"
				        },
				        gsx$sortorder: {
				          $t: "58|50||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "15"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "30|15||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "149"
				        },
				        gsx$movement: {
				          $t: "6"
				        },
				        gsx$r1: {
				          $t: "|75|FEDCECEDDDECDEDCDD"
				        },
				        gsx$r2: {
				          $t: "3|74|DECDDCDEECEDEDECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/emtbd"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "1823"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MIZE, displayname2: Mize, firstname: Larry, lastname: Mize, countrylong: United States, country: USA, video: FALSE, pos: T48, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 11:38 AM, teeorder: 51, sortorder: 60|51||, start: NAAZZ, group: 18, today: +1, thru: F, grouphistory: 3|18||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +5, total: 149, movement: 11, r1: |76|DEECDCDEDDEDDEEDDD, r2: 4|73|DEDDDCDEDDDDEDDCDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/emtbd"
				          }
				        ],
				        gsx$id: {
				          $t: "1823"
				        },
				        gsx$displayname: {
				          $t: "MIZE"
				        },
				        gsx$displayname2: {
				          $t: "Mize"
				        },
				        gsx$firstname: {
				          $t: "Larry"
				        },
				        gsx$lastname: {
				          $t: "Mize"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:38 AM"
				        },
				        gsx$teeorder: {
				          $t: "51"
				        },
				        gsx$sortorder: {
				          $t: "60|51||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "18"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "3|18||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "149"
				        },
				        gsx$movement: {
				          $t: "11"
				        },
				        gsx$r1: {
				          $t: "|76|DEECDCDEDDEDDEEDDD"
				        },
				        gsx$r2: {
				          $t: "4|73|DEDDDCDEDDDDEDDCDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eczce"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "28339"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: DUBUISSON, displayname2: Dubuisson, firstname: Victor, lastname: Dubuisson, countrylong: France, country: FRA, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 11:38 AM, teeorder: 52, sortorder: 34|52||, start: NAAZZ, group: 18, today: +4, thru: F, grouphistory: 3|18||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +5, total: 149, movement: -14, r1: |73|DdECcDDdDDDEEDDDDD, r2: 1|76|DDDCDCEFEDEBDFDDDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eczce"
				          }
				        ],
				        gsx$id: {
				          $t: "28339"
				        },
				        gsx$displayname: {
				          $t: "DUBUISSON"
				        },
				        gsx$displayname2: {
				          $t: "Dubuisson"
				        },
				        gsx$firstname: {
				          $t: "Victor"
				        },
				        gsx$lastname: {
				          $t: "Dubuisson"
				        },
				        gsx$countrylong: {
				          $t: "France"
				        },
				        gsx$country: {
				          $t: "FRA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:38 AM"
				        },
				        gsx$teeorder: {
				          $t: "52"
				        },
				        gsx$sortorder: {
				          $t: "34|52||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "18"
				        },
				        gsx$today: {
				          $t: "+4"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "3|18||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "149"
				        },
				        gsx$movement: {
				          $t: "-14"
				        },
				        gsx$r1: {
				          $t: "|73|DdECcDDdDDDEEDDDDD"
				        },
				        gsx$r2: {
				          $t: "1|76|DDDCDCEFEDEBDFDDDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eedwv"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "24511"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: JAIDEE, displayname2: Jaidee, firstname: Thongchai, lastname: Jaidee, countrylong: Thailand, country: THA, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 12:00 PM, teeorder: 59, sortorder: 22|53||, start: NAAZZ, group: 20, today: +5, thru: 17, grouphistory: 5|20||, thruhistory: 18|17||, lastholewithshot: 2|18, lastlocation: In Fairway, grouplocation: In Fairway, topar: +5, total: 72, movement: -27, r1: |72|CEcDDCDEDDDCEDEDDD, r2: 0||DFDDDDEEDDEDECECD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eedwv"
				          }
				        ],
				        gsx$id: {
				          $t: "24511"
				        },
				        gsx$displayname: {
				          $t: "JAIDEE"
				        },
				        gsx$displayname2: {
				          $t: "Jaidee"
				        },
				        gsx$firstname: {
				          $t: "Thongchai"
				        },
				        gsx$lastname: {
				          $t: "Jaidee"
				        },
				        gsx$countrylong: {
				          $t: "Thailand"
				        },
				        gsx$country: {
				          $t: "THA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "12:00 PM"
				        },
				        gsx$teeorder: {
				          $t: "59"
				        },
				        gsx$sortorder: {
				          $t: "22|53||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "20"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "17"
				        },
				        gsx$grouphistory: {
				          $t: "5|20||"
				        },
				        gsx$thruhistory: {
				          $t: "18|17||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "-27"
				        },
				        gsx$r1: {
				          $t: "|72|CEcDDCDEDDDCEDEDDD"
				        },
				        gsx$r2: {
				          $t: "0||DFDDDDEEDDEDECECD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/efsh8"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "26329"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: OOSTHUIZEN, displayname2: Oosthuizen, firstname: Louis, lastname: Oosthuizen, countrylong: South Africa, country: RSA, live: fg1, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 12:44 PM, teeorder: 66, sortorder: 24|54||, start: NAAZZ, group: 23, today: +5, thru: 15, grouphistory: 8|23||, thruhistory: 18|15||, lastholewithshot: 2|16, lastlocation: In the Hole, grouplocation: On Tee, topar: +5, total: 72, movement: -27, r1: |72|DdDCDCEdDEDCDEECDD, r2: 0||EEDCDDEEDEEDDDE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/efsh8"
				          }
				        ],
				        gsx$id: {
				          $t: "26329"
				        },
				        gsx$displayname: {
				          $t: "OOSTHUIZEN"
				        },
				        gsx$displayname2: {
				          $t: "Oosthuizen"
				        },
				        gsx$firstname: {
				          $t: "Louis"
				        },
				        gsx$lastname: {
				          $t: "Oosthuizen"
				        },
				        gsx$countrylong: {
				          $t: "South Africa"
				        },
				        gsx$country: {
				          $t: "RSA"
				        },
				        gsx$live: {
				          $t: "fg1"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "12:44 PM"
				        },
				        gsx$teeorder: {
				          $t: "66"
				        },
				        gsx$sortorder: {
				          $t: "24|54||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "23"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "15"
				        },
				        gsx$grouphistory: {
				          $t: "8|23||"
				        },
				        gsx$thruhistory: {
				          $t: "18|15||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|16"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "-27"
				        },
				        gsx$r1: {
				          $t: "|72|DdDCDCEdDEDCDEECDD"
				        },
				        gsx$r2: {
				          $t: "0||EEDCDDEEDEEDDDE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eh71p"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "33448"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: THOMAS, displayname2: Thomas, firstname: Justin, lastname: Thomas, countrylong: United States, country: USA, live: fg1, video: FALSE, pos: T48, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:06 PM, teeorder: 72, sortorder: 64|55||, start: NAAZZ, group: 25, today: +1, thru: 13, grouphistory: 10|25||, thruhistory: 18|13||, lastholewithshot: 2|14, lastlocation: In Fairway, grouplocation: In Fairway, topar: +5, total: 76, movement: 11, r1: |76|DEECDCEEDDDCFDFCDD, r2: 4||DdECECDDDEDCE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eh71p"
				          }
				        ],
				        gsx$id: {
				          $t: "33448"
				        },
				        gsx$displayname: {
				          $t: "THOMAS"
				        },
				        gsx$displayname2: {
				          $t: "Thomas"
				        },
				        gsx$firstname: {
				          $t: "Justin"
				        },
				        gsx$lastname: {
				          $t: "Thomas"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "fg1"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T48"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:06 PM"
				        },
				        gsx$teeorder: {
				          $t: "72"
				        },
				        gsx$sortorder: {
				          $t: "64|55||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "25"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "13"
				        },
				        gsx$grouphistory: {
				          $t: "10|25||"
				        },
				        gsx$thruhistory: {
				          $t: "18|13||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|14"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+5"
				        },
				        gsx$total: {
				          $t: "76"
				        },
				        gsx$movement: {
				          $t: "11"
				        },
				        gsx$r1: {
				          $t: "|76|DEECDCEEDDDCFDFCDD"
				        },
				        gsx$r2: {
				          $t: "4||DdECECDDDEDCE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/etu5e"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "999999"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: <PROJECTED_CUT>, lastname: <PROJECTED_CUT>, amateur: true, past: true, firsttimer: true, status: true, active: true, us: true, intl: true, r1: || , r2: || , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/etu5e"
				          }
				        ],
				        gsx$id: {
				          $t: "999999"
				        },
				        gsx$displayname: {
				          $t: "<PROJECTED_CUT>"
				        },
				        gsx$displayname2: {
				          $t: ""
				        },
				        gsx$firstname: {
				          $t: ""
				        },
				        gsx$lastname: {
				          $t: "<PROJECTED_CUT>"
				        },
				        gsx$countrylong: {
				          $t: ""
				        },
				        gsx$country: {
				          $t: ""
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: ""
				        },
				        gsx$pos: {
				          $t: ""
				        },
				        gsx$amateur: {
				          $t: "true"
				        },
				        gsx$past: {
				          $t: "true"
				        },
				        gsx$firsttimer: {
				          $t: "true"
				        },
				        gsx$status: {
				          $t: "true"
				        },
				        gsx$active: {
				          $t: "true"
				        },
				        gsx$us: {
				          $t: "true"
				        },
				        gsx$intl: {
				          $t: "true"
				        },
				        gsx$teetime: {
				          $t: ""
				        },
				        gsx$teeorder: {
				          $t: ""
				        },
				        gsx$sortorder: {
				          $t: ""
				        },
				        gsx$start: {
				          $t: ""
				        },
				        gsx$group: {
				          $t: ""
				        },
				        gsx$today: {
				          $t: ""
				        },
				        gsx$thru: {
				          $t: ""
				        },
				        gsx$grouphistory: {
				          $t: ""
				        },
				        gsx$thruhistory: {
				          $t: ""
				        },
				        gsx$lastholewithshot: {
				          $t: ""
				        },
				        gsx$lastlocation: {
				          $t: ""
				        },
				        gsx$grouplocation: {
				          $t: ""
				        },
				        gsx$topar: {
				          $t: ""
				        },
				        gsx$total: {
				          $t: ""
				        },
				        gsx$movement: {
				          $t: ""
				        },
				        gsx$r1: {
				          $t: "|| "
				        },
				        gsx$r2: {
				          $t: "|| "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ev8pv"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25804"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WATSON, B., displayname2: Watson, B., firstname: Bubba, lastname: Watson, countrylong: United States, country: USA, video: FALSE, pos: T56, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 9:37 AM, teeorder: 22, sortorder: 55|56||, start: NAAZZ, group: 8, today: +3, thru: F, grouphistory: 23|8||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +6, total: 150, movement: -2, r1: |75|CEDCDCcdEDEDdEFEEC, r2: 3|75|EEcDEDDEDEDDDDECCD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ev8pv"
				          }
				        ],
				        gsx$id: {
				          $t: "25804"
				        },
				        gsx$displayname: {
				          $t: "WATSON, B."
				        },
				        gsx$displayname2: {
				          $t: "Watson, B."
				        },
				        gsx$firstname: {
				          $t: "Bubba"
				        },
				        gsx$lastname: {
				          $t: "Watson"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T56"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "9:37 AM"
				        },
				        gsx$teeorder: {
				          $t: "22"
				        },
				        gsx$sortorder: {
				          $t: "55|56||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "8"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "23|8||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+6"
				        },
				        gsx$total: {
				          $t: "150"
				        },
				        gsx$movement: {
				          $t: "-2"
				        },
				        gsx$r1: {
				          $t: "|75|CEDCDCcdEDEDdEFEEC"
				        },
				        gsx$r2: {
				          $t: "3|75|EEcDEDDEDEDDDDECCD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ewna8"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "29221"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SIMPSON, displayname2: Simpson, firstname: Webb, lastname: Simpson, countrylong: United States, country: USA, video: FALSE, pos: T56, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:00 PM, teeorder: 57, sortorder: 72|57||, start: NAAZZ, group: 20, today: +1, thru: 17, grouphistory: 5|20||, thruhistory: 18|17||, lastholewithshot: 2|18, lastlocation: In Fairway, grouplocation: In Fairway, topar: +6, total: 77, movement: 15, r1: |77|DEDEECDEDEECDDECDE, r2: 5||EECDDBDEEEDCDDEDC , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ewna8"
				          }
				        ],
				        gsx$id: {
				          $t: "29221"
				        },
				        gsx$displayname: {
				          $t: "SIMPSON"
				        },
				        gsx$displayname2: {
				          $t: "Simpson"
				        },
				        gsx$firstname: {
				          $t: "Webb"
				        },
				        gsx$lastname: {
				          $t: "Simpson"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T56"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:00 PM"
				        },
				        gsx$teeorder: {
				          $t: "57"
				        },
				        gsx$sortorder: {
				          $t: "72|57||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "20"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "17"
				        },
				        gsx$grouphistory: {
				          $t: "5|20||"
				        },
				        gsx$thruhistory: {
				          $t: "18|17||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+6"
				        },
				        gsx$total: {
				          $t: "77"
				        },
				        gsx$movement: {
				          $t: "15"
				        },
				        gsx$r1: {
				          $t: "|77|DEDEECDEDEECDDECDE"
				        },
				        gsx$r2: {
				          $t: "5||EECDDBDEEEDCDDEDC "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ey1up"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "24024"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: JOHNSON, Z., displayname2: Johnson, Z., firstname: Zach, lastname: Johnson, countrylong: United States, country: USA, video: FALSE, pos: T56, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:33 PM, teeorder: 63, sortorder: 23|58||, start: NAAZZ, group: 22, today: +6, thru: 16, grouphistory: 7|22||, thruhistory: 18|16||, lastholewithshot: 2|17, lastlocation: In Fairway, grouplocation: In Fairway, topar: +6, total: 72, movement: -35, r1: |72|DFcCDbcEEDECEEECDC, r2: 0||DDEDDDDEEEEDFDDC , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ey1up"
				          }
				        ],
				        gsx$id: {
				          $t: "24024"
				        },
				        gsx$displayname: {
				          $t: "JOHNSON, Z."
				        },
				        gsx$displayname2: {
				          $t: "Johnson, Z."
				        },
				        gsx$firstname: {
				          $t: "Zach"
				        },
				        gsx$lastname: {
				          $t: "Johnson"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T56"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:33 PM"
				        },
				        gsx$teeorder: {
				          $t: "63"
				        },
				        gsx$sortorder: {
				          $t: "23|58||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "22"
				        },
				        gsx$today: {
				          $t: "+6"
				        },
				        gsx$thru: {
				          $t: "16"
				        },
				        gsx$grouphistory: {
				          $t: "7|22||"
				        },
				        gsx$thruhistory: {
				          $t: "18|16||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|17"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+6"
				        },
				        gsx$total: {
				          $t: "72"
				        },
				        gsx$movement: {
				          $t: "-35"
				        },
				        gsx$r1: {
				          $t: "|72|DFcCDbcEEDECEEECDC"
				        },
				        gsx$r2: {
				          $t: "0||DDEDDDDEEEEDFDDC "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eo7vq"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "24502"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SCOTT, displayname2: Scott, firstname: Adam, lastname: Scott, countrylong: Australia, country: AUS, live: ac, video: FALSE, pos: T56, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 2:01 PM, teeorder: 87, sortorder: 66|59||, start: NAAZZ, group: 30, today: +2, thru: 10, grouphistory: 15|30||, thruhistory: 18|10||, lastholewithshot: 2|11, lastlocation: In the Hole, grouplocation: On Tee, topar: +6, total: 76, movement: 3, r1: |76|EEDDDbDEEDCDEEEDDD, r2: 4||cEDDECEEDD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/eo7vq"
				          }
				        ],
				        gsx$id: {
				          $t: "24502"
				        },
				        gsx$displayname: {
				          $t: "SCOTT"
				        },
				        gsx$displayname2: {
				          $t: "Scott"
				        },
				        gsx$firstname: {
				          $t: "Adam"
				        },
				        gsx$lastname: {
				          $t: "Scott"
				        },
				        gsx$countrylong: {
				          $t: "Australia"
				        },
				        gsx$country: {
				          $t: "AUS"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T56"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "2:01 PM"
				        },
				        gsx$teeorder: {
				          $t: "87"
				        },
				        gsx$sortorder: {
				          $t: "66|59||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "30"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "10"
				        },
				        gsx$grouphistory: {
				          $t: "15|30||"
				        },
				        gsx$thruhistory: {
				          $t: "18|10||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|11"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+6"
				        },
				        gsx$total: {
				          $t: "76"
				        },
				        gsx$movement: {
				          $t: "3"
				        },
				        gsx$r1: {
				          $t: "|76|EEDDDbDEEDCDEEEDDD"
				        },
				        gsx$r2: {
				          $t: "4||cEDDECEEDD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/epmg7"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "29478"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KISNER, displayname2: Kisner, firstname: Kevin, lastname: Kisner, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T56, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 2:01 PM, teeorder: 88, sortorder: 73|60||, start: NAAZZ, group: 30, today: +1, thru: 10, grouphistory: 15|30||, thruhistory: 18|10||, lastholewithshot: 2|11, lastlocation: In Fairway, grouplocation: In Fairway, topar: +6, total: 77, movement: 15, r1: |77|EcECDCDEDDGDDDFDDD, r2: 5||EDCDFCDECD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/epmg7"
				          }
				        ],
				        gsx$id: {
				          $t: "29478"
				        },
				        gsx$displayname: {
				          $t: "KISNER"
				        },
				        gsx$displayname2: {
				          $t: "Kisner"
				        },
				        gsx$firstname: {
				          $t: "Kevin"
				        },
				        gsx$lastname: {
				          $t: "Kisner"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T56"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "2:01 PM"
				        },
				        gsx$teeorder: {
				          $t: "88"
				        },
				        gsx$sortorder: {
				          $t: "73|60||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "30"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "10"
				        },
				        gsx$grouphistory: {
				          $t: "15|30||"
				        },
				        gsx$thruhistory: {
				          $t: "18|10||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|11"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+6"
				        },
				        gsx$total: {
				          $t: "77"
				        },
				        gsx$movement: {
				          $t: "15"
				        },
				        gsx$r1: {
				          $t: "|77|EcECDCDEDDGDDDFDDD"
				        },
				        gsx$r2: {
				          $t: "5||EDCDFCDECD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/er10k"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "33948"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: AN, displayname2: An, firstname: Byeong-Hun, lastname: An, countrylong: Korea, country: KOR, video: FALSE, pos: T61, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:31 AM, teeorder: 6, sortorder: 74|61||, start: NAAZZ, group: 2, today: +2, thru: F, grouphistory: 17|2||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +7, total: 151, movement: 10, r1: |77|FEECDCEEDDDCDEFBED, r2: 5|74|DEDDcDEEDDECDDDCDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/er10k"
				          }
				        ],
				        gsx$id: {
				          $t: "33948"
				        },
				        gsx$displayname: {
				          $t: "AN"
				        },
				        gsx$displayname2: {
				          $t: "An"
				        },
				        gsx$firstname: {
				          $t: "Byeong-Hun"
				        },
				        gsx$lastname: {
				          $t: "An"
				        },
				        gsx$countrylong: {
				          $t: "Korea"
				        },
				        gsx$country: {
				          $t: "KOR"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T61"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:31 AM"
				        },
				        gsx$teeorder: {
				          $t: "6"
				        },
				        gsx$sortorder: {
				          $t: "74|61||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "2"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "17|2||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+7"
				        },
				        gsx$total: {
				          $t: "151"
				        },
				        gsx$movement: {
				          $t: "10"
				        },
				        gsx$r1: {
				          $t: "|77|FEECDCEEDDDCDEFBED"
				        },
				        gsx$r2: {
				          $t: "5|74|DEDDcDEEDDECDDDCDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/esfl1"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "22378"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: IMMELMAN, displayname2: Immelman, firstname: Trevor, lastname: Immelman, countrylong: South Africa, country: RSA, video: FALSE, pos: T61, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 11:27 AM, teeorder: 48, sortorder: 71|62||, start: NAAZZ, group: 17, today: +2, thru: F, grouphistory: 2|17||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +7, total: 151, movement: 10, r1: |77|DEEDDbDEDDECFEECDE, r2: 5|74|DEDDDCEDDDDCEDFCDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/esfl1"
				          }
				        ],
				        gsx$id: {
				          $t: "22378"
				        },
				        gsx$displayname: {
				          $t: "IMMELMAN"
				        },
				        gsx$displayname2: {
				          $t: "Immelman"
				        },
				        gsx$firstname: {
				          $t: "Trevor"
				        },
				        gsx$lastname: {
				          $t: "Immelman"
				        },
				        gsx$countrylong: {
				          $t: "South Africa"
				        },
				        gsx$country: {
				          $t: "RSA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T61"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:27 AM"
				        },
				        gsx$teeorder: {
				          $t: "48"
				        },
				        gsx$sortorder: {
				          $t: "71|62||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "17"
				        },
				        gsx$today: {
				          $t: "+2"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "2|17||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+7"
				        },
				        gsx$total: {
				          $t: "151"
				        },
				        gsx$movement: {
				          $t: "10"
				        },
				        gsx$r1: {
				          $t: "|77|DEEDDbDEDDECFEECDE"
				        },
				        gsx$r2: {
				          $t: "5|74|DEDDDCEDDDDCEDFCDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a59y2"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "23325"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: TAYLOR, displayname2: Taylor, firstname: Vaughn, lastname: Taylor, countrylong: United States, country: USA, video: FALSE, pos: T61, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 11:49 AM, teeorder: 56, sortorder: 43|63||, start: NAAZZ, group: 19, today: +5, thru: 17, grouphistory: 4|19||, thruhistory: 18|17||, lastholewithshot: 2|18, lastlocation: On Green, grouplocation: On 18 Green, topar: +7, total: 74, movement: -18, r1: |74|DEDCDCEDEDFCDDEBDE, r2: 2||FEDCEDDDDDFCDDFCD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a59y2"
				          }
				        ],
				        gsx$id: {
				          $t: "23325"
				        },
				        gsx$displayname: {
				          $t: "TAYLOR"
				        },
				        gsx$displayname2: {
				          $t: "Taylor"
				        },
				        gsx$firstname: {
				          $t: "Vaughn"
				        },
				        gsx$lastname: {
				          $t: "Taylor"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T61"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:49 AM"
				        },
				        gsx$teeorder: {
				          $t: "56"
				        },
				        gsx$sortorder: {
				          $t: "43|63||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "19"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "17"
				        },
				        gsx$grouphistory: {
				          $t: "4|19||"
				        },
				        gsx$thruhistory: {
				          $t: "18|17||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 18 Green"
				        },
				        gsx$topar: {
				          $t: "+7"
				        },
				        gsx$total: {
				          $t: "74"
				        },
				        gsx$movement: {
				          $t: "-18"
				        },
				        gsx$r1: {
				          $t: "|74|DEDCDCEDEDFCDDEBDE"
				        },
				        gsx$r2: {
				          $t: "2||FEDCEDDDDDFCDDFCD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a6oij"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "6567"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SINGH, displayname2: Singh, firstname: Vijay, lastname: Singh, countrylong: Fiji, country: FIJ, live: ac, video: FALSE, pos: T61, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:17 PM, teeorder: 75, sortorder: 82|64||, start: NAAZZ, group: 26, today: -1, thru: 12, grouphistory: 11|26||, thruhistory: 18|12||, lastholewithshot: 2|13, lastlocation: On Green, grouplocation: On 13 Green, topar: +7, total: 80, movement: 20, r1: |80|DEECECEEDEDDEDFCFD, r2: 8||DDCCECEEDDDB , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a6oij"
				          }
				        ],
				        gsx$id: {
				          $t: "6567"
				        },
				        gsx$displayname: {
				          $t: "SINGH"
				        },
				        gsx$displayname2: {
				          $t: "Singh"
				        },
				        gsx$firstname: {
				          $t: "Vijay"
				        },
				        gsx$lastname: {
				          $t: "Singh"
				        },
				        gsx$countrylong: {
				          $t: "Fiji"
				        },
				        gsx$country: {
				          $t: "FIJ"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T61"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:17 PM"
				        },
				        gsx$teeorder: {
				          $t: "75"
				        },
				        gsx$sortorder: {
				          $t: "82|64||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "26"
				        },
				        gsx$today: {
				          $t: "-1"
				        },
				        gsx$thru: {
				          $t: "12"
				        },
				        gsx$grouphistory: {
				          $t: "11|26||"
				        },
				        gsx$thruhistory: {
				          $t: "18|12||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|13"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 13 Green"
				        },
				        gsx$topar: {
				          $t: "+7"
				        },
				        gsx$total: {
				          $t: "80"
				        },
				        gsx$movement: {
				          $t: "20"
				        },
				        gsx$r1: {
				          $t: "|80|DEECECEEDEDDEDFCFD"
				        },
				        gsx$r2: {
				          $t: "8||DDCCECEEDDDB "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a832w"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "34409"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LINGMERTH, displayname2: Lingmerth, firstname: David, lastname: Lingmerth, countrylong: Sweden, country: SWE, video: FALSE, pos: T65, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:53 AM, teeorder: 11, sortorder: 79|65||, start: NAAZZ, group: 4, today: +1, thru: F, grouphistory: 19|4||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +8, total: 152, movement: 12, r1: |79|DDECCDDEDDEFEDEEED, r2: 7|73|DDDCFCDEDEDCDDECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a832w"
				          }
				        ],
				        gsx$id: {
				          $t: "34409"
				        },
				        gsx$displayname: {
				          $t: "LINGMERTH"
				        },
				        gsx$displayname2: {
				          $t: "Lingmerth"
				        },
				        gsx$firstname: {
				          $t: "David"
				        },
				        gsx$lastname: {
				          $t: "Lingmerth"
				        },
				        gsx$countrylong: {
				          $t: "Sweden"
				        },
				        gsx$country: {
				          $t: "SWE"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T65"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:53 AM"
				        },
				        gsx$teeorder: {
				          $t: "11"
				        },
				        gsx$sortorder: {
				          $t: "79|65||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "4"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "19|4||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+8"
				        },
				        gsx$total: {
				          $t: "152"
				        },
				        gsx$movement: {
				          $t: "12"
				        },
				        gsx$r1: {
				          $t: "|79|DDECCDDEDDEFEDEEED"
				        },
				        gsx$r2: {
				          $t: "7|73|DDDCFCDEDEDCDDECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a9hnd"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "26331"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SCHWARTZEL, displayname2: Schwartzel, firstname: Charl, lastname: Schwartzel, countrylong: South Africa, country: RSA, video: FALSE, pos: T65, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:15 AM, teeorder: 16, sortorder: 69|66||, start: NAAZZ, group: 6, today: +4, thru: F, grouphistory: 21|6||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +8, total: 152, movement: -6, r1: |76|DEDDDCDDDDDCEDGDDE, r2: 4|76|DEDDEDEECDECEDFBDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a9hnd"
				          }
				        ],
				        gsx$id: {
				          $t: "26331"
				        },
				        gsx$displayname: {
				          $t: "SCHWARTZEL"
				        },
				        gsx$displayname2: {
				          $t: "Schwartzel"
				        },
				        gsx$firstname: {
				          $t: "Charl"
				        },
				        gsx$lastname: {
				          $t: "Schwartzel"
				        },
				        gsx$countrylong: {
				          $t: "South Africa"
				        },
				        gsx$country: {
				          $t: "RSA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T65"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:15 AM"
				        },
				        gsx$teeorder: {
				          $t: "16"
				        },
				        gsx$sortorder: {
				          $t: "69|66||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "6"
				        },
				        gsx$today: {
				          $t: "+4"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "21|6||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+8"
				        },
				        gsx$total: {
				          $t: "152"
				        },
				        gsx$movement: {
				          $t: "-6"
				        },
				        gsx$r1: {
				          $t: "|76|DEDDDCDDDDDCEDGDDE"
				        },
				        gsx$r2: {
				          $t: "4|76|DEDDEDEECDECEDFBDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/9znoe"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "33122"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KNOX, displayname2: Knox, firstname: Russell, lastname: Knox, countrylong: Scotland, country: SCO, video: FALSE, pos: T65, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:26 AM, teeorder: 20, sortorder: 80|67||, start: NAAZZ, group: 7, today: +1, thru: F, grouphistory: 22|7||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +8, total: 152, movement: 12, r1: |79|DEDCECDEDDEEDDECEG, r2: 7|73|DDDCDCDEDEGCDCDCED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/9znoe"
				          }
				        ],
				        gsx$id: {
				          $t: "33122"
				        },
				        gsx$displayname: {
				          $t: "KNOX"
				        },
				        gsx$displayname2: {
				          $t: "Knox"
				        },
				        gsx$firstname: {
				          $t: "Russell"
				        },
				        gsx$lastname: {
				          $t: "Knox"
				        },
				        gsx$countrylong: {
				          $t: "Scotland"
				        },
				        gsx$country: {
				          $t: "SCO"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T65"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:26 AM"
				        },
				        gsx$teeorder: {
				          $t: "20"
				        },
				        gsx$sortorder: {
				          $t: "80|67||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "7"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "22|7||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+8"
				        },
				        gsx$total: {
				          $t: "152"
				        },
				        gsx$movement: {
				          $t: "12"
				        },
				        gsx$r1: {
				          $t: "|79|DEDCECDEDDEEDDECEG"
				        },
				        gsx$r2: {
				          $t: "7|73|DDDCDCDEDEGCDCDCED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a128v"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "29974"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: GRACE, displayname2: Grace, firstname: Branden, lastname: Grace, countrylong: South Africa, country: RSA, video: FALSE, pos: T65, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:37 AM, teeorder: 23, sortorder: 56|68||, start: NAAZZ, group: 8, today: +5, thru: F, grouphistory: 23|8||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: On Green, grouplocation: On 18 Green, topar: +8, total: 152, movement: -11, r1: |75|DEDCDCDEDEDDEDEDDD, r2: 3|77|DEEEDGCEDDDCDCECDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a128v"
				          }
				        ],
				        gsx$id: {
				          $t: "29974"
				        },
				        gsx$displayname: {
				          $t: "GRACE"
				        },
				        gsx$displayname2: {
				          $t: "Grace"
				        },
				        gsx$firstname: {
				          $t: "Branden"
				        },
				        gsx$lastname: {
				          $t: "Grace"
				        },
				        gsx$countrylong: {
				          $t: "South Africa"
				        },
				        gsx$country: {
				          $t: "RSA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T65"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:37 AM"
				        },
				        gsx$teeorder: {
				          $t: "23"
				        },
				        gsx$sortorder: {
				          $t: "56|68||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "8"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "23|8||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 18 Green"
				        },
				        gsx$topar: {
				          $t: "+8"
				        },
				        gsx$total: {
				          $t: "152"
				        },
				        gsx$movement: {
				          $t: "-11"
				        },
				        gsx$r1: {
				          $t: "|75|DEDCDCDEDEDDEDEDDD"
				        },
				        gsx$r2: {
				          $t: "3|77|DEEEDGCEDDDCDCECDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a2gt8"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "2256"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WATSON, T., displayname2: Watson, T., firstname: Tom, lastname: Watson, countrylong: United States, country: USA, video: FALSE, pos: T65, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:22 PM, teeorder: 60, sortorder: 44|69||, start: NAAZZ, group: 21, today: +6, thru: 16, grouphistory: 6|21||, thruhistory: 18|16||, lastholewithshot: 2|17, lastlocation: In the Hole, grouplocation: On Tee, topar: +8, total: 74, movement: -22, r1: |74|DEcCDCEEDDDCEEECDE, r2: 2||EEDDEbDEEEECEEEC , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a2gt8"
				          }
				        ],
				        gsx$id: {
				          $t: "2256"
				        },
				        gsx$displayname: {
				          $t: "WATSON, T."
				        },
				        gsx$displayname2: {
				          $t: "Watson, T."
				        },
				        gsx$firstname: {
				          $t: "Tom"
				        },
				        gsx$lastname: {
				          $t: "Watson"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T65"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:22 PM"
				        },
				        gsx$teeorder: {
				          $t: "60"
				        },
				        gsx$sortorder: {
				          $t: "44|69||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "21"
				        },
				        gsx$today: {
				          $t: "+6"
				        },
				        gsx$thru: {
				          $t: "16"
				        },
				        gsx$grouphistory: {
				          $t: "6|21||"
				        },
				        gsx$thruhistory: {
				          $t: "18|16||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|17"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+8"
				        },
				        gsx$total: {
				          $t: "74"
				        },
				        gsx$movement: {
				          $t: "-22"
				        },
				        gsx$r1: {
				          $t: "|74|DEcCDCEEDDDCEEECDE"
				        },
				        gsx$r2: {
				          $t: "2||EEDDEbDEEEECEEEC "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a3vdp"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "30926"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: KIRK, displayname2: Kirk, firstname: Chris, lastname: Kirk, countrylong: United States, country: USA, live: ac, video: FALSE, pos: T65, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 1:17 PM, teeorder: 77, sortorder: 65|70||, start: NAAZZ, group: 26, today: +4, thru: 12, grouphistory: 11|26||, thruhistory: 18|12||, lastholewithshot: 2|13, lastlocation: In the Hole, grouplocation: On Tee, topar: +8, total: 76, movement: -6, r1: |76|EEDCECDEDEECEDECDD, r2: 4||DEDBECDFCEFD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/a3vdp"
				          }
				        ],
				        gsx$id: {
				          $t: "30926"
				        },
				        gsx$displayname: {
				          $t: "KIRK"
				        },
				        gsx$displayname2: {
				          $t: "Kirk"
				        },
				        gsx$firstname: {
				          $t: "Chris"
				        },
				        gsx$lastname: {
				          $t: "Kirk"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T65"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "1:17 PM"
				        },
				        gsx$teeorder: {
				          $t: "77"
				        },
				        gsx$sortorder: {
				          $t: "65|70||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "26"
				        },
				        gsx$today: {
				          $t: "+4"
				        },
				        gsx$thru: {
				          $t: "12"
				        },
				        gsx$grouphistory: {
				          $t: "11|26||"
				        },
				        gsx$thruhistory: {
				          $t: "18|12||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|13"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+8"
				        },
				        gsx$total: {
				          $t: "76"
				        },
				        gsx$movement: {
				          $t: "-6"
				        },
				        gsx$r1: {
				          $t: "|76|EEDCECDEDEECEDECDD"
				        },
				        gsx$r2: {
				          $t: "4||DEDBECDFCEFD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/agihe"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "6522"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: ELS, displayname2: Els, firstname: Ernie, lastname: Els, countrylong: South Africa, country: RSA, video: FALSE, pos: T71, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 9:59 AM, teeorder: 30, sortorder: 84|71||, start: NAAZZ, group: 10, today: +1, thru: F, grouphistory: 25|10||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +9, total: 153, movement: 10, r1: |80|IEDDCCDEDDFCDDECEE, r2: 8|73|FEDDDCEDDDDBDDDCED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/agihe"
				          }
				        ],
				        gsx$id: {
				          $t: "6522"
				        },
				        gsx$displayname: {
				          $t: "ELS"
				        },
				        gsx$displayname2: {
				          $t: "Els"
				        },
				        gsx$firstname: {
				          $t: "Ernie"
				        },
				        gsx$lastname: {
				          $t: "Els"
				        },
				        gsx$countrylong: {
				          $t: "South Africa"
				        },
				        gsx$country: {
				          $t: "RSA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T71"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "9:59 AM"
				        },
				        gsx$teeorder: {
				          $t: "30"
				        },
				        gsx$sortorder: {
				          $t: "84|71||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "10"
				        },
				        gsx$today: {
				          $t: "+1"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "25|10||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+9"
				        },
				        gsx$total: {
				          $t: "153"
				        },
				        gsx$movement: {
				          $t: "10"
				        },
				        gsx$r1: {
				          $t: "|80|IEDDCCDEDDFCDDECEE"
				        },
				        gsx$r2: {
				          $t: "8|73|FEDDDCEDDDDBDDDCED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ahx1v"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25572"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MCDOWELL, displayname2: McDowell, firstname: Graeme, lastname: McDowell, countrylong: N. Ireland, country: NIR, video: FALSE, pos: T71, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:21 AM, teeorder: 31, sortorder: 32|72||, start: NAAZZ, group: 11, today: +9, thru: F, grouphistory: 26|11||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +9, total: 153, movement: -50, r1: |72|DEDCECEDDECCDDDCDE, r2: 0|81|DFDDEDDEDEFCDEECEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ahx1v"
				          }
				        ],
				        gsx$id: {
				          $t: "25572"
				        },
				        gsx$displayname: {
				          $t: "MCDOWELL"
				        },
				        gsx$displayname2: {
				          $t: "McDowell"
				        },
				        gsx$firstname: {
				          $t: "Graeme"
				        },
				        gsx$lastname: {
				          $t: "McDowell"
				        },
				        gsx$countrylong: {
				          $t: "N. Ireland"
				        },
				        gsx$country: {
				          $t: "NIR"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T71"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:21 AM"
				        },
				        gsx$teeorder: {
				          $t: "31"
				        },
				        gsx$sortorder: {
				          $t: "32|72||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "11"
				        },
				        gsx$today: {
				          $t: "+9"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "26|11||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+9"
				        },
				        gsx$total: {
				          $t: "153"
				        },
				        gsx$movement: {
				          $t: "-50"
				        },
				        gsx$r1: {
				          $t: "|72|DEDCECEDDECCDDDCDE"
				        },
				        gsx$r2: {
				          $t: "0|81|DFDDEDDEDEFCDEECEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ajbm8"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "31557"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: HERMAN, displayname2: Herman, firstname: Jim, lastname: Herman, countrylong: United States, country: USA, video: FALSE, pos: T71, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 11:16 AM, teeorder: 46, sortorder: 54|73||, start: NAAZZ, group: 16, today: +6, thru: F, grouphistory: 1|16||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +9, total: 153, movement: -17, r1: |75|CDDDEDDEDDECDEECDE, r2: 3|78|DEDCDCEFDDECEEECEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/ajbm8"
				          }
				        ],
				        gsx$id: {
				          $t: "31557"
				        },
				        gsx$displayname: {
				          $t: "HERMAN"
				        },
				        gsx$displayname2: {
				          $t: "Herman"
				        },
				        gsx$firstname: {
				          $t: "Jim"
				        },
				        gsx$lastname: {
				          $t: "Herman"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T71"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:16 AM"
				        },
				        gsx$teeorder: {
				          $t: "46"
				        },
				        gsx$sortorder: {
				          $t: "54|73||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "16"
				        },
				        gsx$today: {
				          $t: "+6"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "1|16||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+9"
				        },
				        gsx$total: {
				          $t: "153"
				        },
				        gsx$movement: {
				          $t: "-17"
				        },
				        gsx$r1: {
				          $t: "|75|CDDDEDDEDDECDEECDE"
				        },
				        gsx$r2: {
				          $t: "3|78|DEDCDCEFDDECEEECEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/akq6p"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "49575"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: BARD, displayname2: Bard, firstname: Derek, lastname: Bard, countrylong: United States, country: USA, video: FALSE, pos: T71, amateur: TRUE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 11:27 AM, teeorder: 50, sortorder: 59|74||, start: NAAZZ, group: 17, today: +5, thru: F, grouphistory: 2|17||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: On Green, grouplocation: On 18 Green, topar: +9, total: 153, movement: -12, r1: |76|DDECDCDEEEEBEDEDDE, r2: 4|77|EEDCDCEEDCDDEDFEEC, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/akq6p"
				          }
				        ],
				        gsx$id: {
				          $t: "49575"
				        },
				        gsx$displayname: {
				          $t: "BARD"
				        },
				        gsx$displayname2: {
				          $t: "Bard"
				        },
				        gsx$firstname: {
				          $t: "Derek"
				        },
				        gsx$lastname: {
				          $t: "Bard"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T71"
				        },
				        gsx$amateur: {
				          $t: "TRUE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:27 AM"
				        },
				        gsx$teeorder: {
				          $t: "50"
				        },
				        gsx$sortorder: {
				          $t: "59|74||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "17"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "2|17||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 18 Green"
				        },
				        gsx$topar: {
				          $t: "+9"
				        },
				        gsx$total: {
				          $t: "153"
				        },
				        gsx$movement: {
				          $t: "-12"
				        },
				        gsx$r1: {
				          $t: "|76|DDECDCDEEEEBEDEDDE"
				        },
				        gsx$r2: {
				          $t: "4|77|EEDCDCEEDCDDEDFEEC"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/aaw7q"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25686"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: DUFNER, displayname2: Dufner, firstname: Jason, lastname: Dufner, countrylong: United States, country: USA, live: fg1, video: FALSE, pos: T71, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:44 PM, teeorder: 67, sortorder: 62|75||, start: NAAZZ, group: 23, today: +5, thru: 15, grouphistory: 8|23||, thruhistory: 18|15||, lastholewithshot: 2|16, lastlocation: In the Hole, grouplocation: On Tee, topar: +9, total: 76, movement: -12, r1: |76|EFDCECDDDCECEDEBEF, r2: 4||DEDEDCCEEFDCGDD , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/aaw7q"
				          }
				        ],
				        gsx$id: {
				          $t: "25686"
				        },
				        gsx$displayname: {
				          $t: "DUFNER"
				        },
				        gsx$displayname2: {
				          $t: "Dufner"
				        },
				        gsx$firstname: {
				          $t: "Jason"
				        },
				        gsx$lastname: {
				          $t: "Dufner"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: "fg1"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T71"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:44 PM"
				        },
				        gsx$teeorder: {
				          $t: "67"
				        },
				        gsx$sortorder: {
				          $t: "62|75||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "23"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "15"
				        },
				        gsx$grouphistory: {
				          $t: "8|23||"
				        },
				        gsx$thruhistory: {
				          $t: "18|15||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|16"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+9"
				        },
				        gsx$total: {
				          $t: "76"
				        },
				        gsx$movement: {
				          $t: "-12"
				        },
				        gsx$r1: {
				          $t: "|76|EFDCECDDDCECEDEBEF"
				        },
				        gsx$r2: {
				          $t: "4||DEDEDCCEEFDCGDD "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/acas7"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "10423"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WEIR, displayname2: Weir, firstname: Mike, lastname: Weir, countrylong: Canada, country: CAN, video: FALSE, pos: 76, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:20 AM, teeorder: 1, sortorder: 67|76||, start: NAAZZ, group: 1, today: +6, thru: F, grouphistory: 16|1||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +10, total: 154, movement: -17, r1: |76|DDECECEDDEDCEEECDE, r2: 4|78|FEDCDECFDEECDEECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/acas7"
				          }
				        ],
				        gsx$id: {
				          $t: "10423"
				        },
				        gsx$displayname: {
				          $t: "WEIR"
				        },
				        gsx$displayname2: {
				          $t: "Weir"
				        },
				        gsx$firstname: {
				          $t: "Mike"
				        },
				        gsx$lastname: {
				          $t: "Weir"
				        },
				        gsx$countrylong: {
				          $t: "Canada"
				        },
				        gsx$country: {
				          $t: "CAN"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "76"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:20 AM"
				        },
				        gsx$teeorder: {
				          $t: "1"
				        },
				        gsx$sortorder: {
				          $t: "67|76||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "1"
				        },
				        gsx$today: {
				          $t: "+6"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "16|1||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+10"
				        },
				        gsx$total: {
				          $t: "154"
				        },
				        gsx$movement: {
				          $t: "-17"
				        },
				        gsx$r1: {
				          $t: "|76|DDECECEDDEDCEEECDE"
				        },
				        gsx$r2: {
				          $t: "4|78|FEDCDECFDEECDEECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/adpck"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "26596"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: MOORE, displayname2: Moore, firstname: Ryan, lastname: Moore, countrylong: United States, country: USA, video: FALSE, pos: T77, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 10:43 AM, teeorder: 39, sortorder: 85|77||, start: NAAZZ, group: 13, today: +3, thru: F, grouphistory: 28|13||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: On Green, grouplocation: On 18 Green, topar: +11, total: 155, movement: 4, r1: |80|EEECECDEDDFCFDGBDE, r2: 8|75|CDECECEEDECCDEFCDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/adpck"
				          }
				        ],
				        gsx$id: {
				          $t: "26596"
				        },
				        gsx$displayname: {
				          $t: "MOORE"
				        },
				        gsx$displayname2: {
				          $t: "Moore"
				        },
				        gsx$firstname: {
				          $t: "Ryan"
				        },
				        gsx$lastname: {
				          $t: "Moore"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T77"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "10:43 AM"
				        },
				        gsx$teeorder: {
				          $t: "39"
				        },
				        gsx$sortorder: {
				          $t: "85|77||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "13"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "28|13||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 18 Green"
				        },
				        gsx$topar: {
				          $t: "+11"
				        },
				        gsx$total: {
				          $t: "155"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|80|EEECECDEDDFCFDGBDE"
				        },
				        gsx$r2: {
				          $t: "8|75|CDECECEEDECCDEFCDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/af3x1"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "32102"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: FOWLER, displayname2: Fowler, firstname: Rickie, lastname: Fowler, countrylong: United States, country: USA, video: FALSE, pos: T77, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: A, active: TRUE, us: TRUE, intl: FALSE, teetime: 12:33 PM, teeorder: 64, sortorder: 81|78||, start: NAAZZ, group: 22, today: +3, thru: 16, grouphistory: 7|22||, thruhistory: 18|16||, lastholewithshot: 2|17, lastlocation: In Fairway, grouplocation: In Fairway, topar: +11, total: 80, movement: 4, r1: |80|fdcCcCEEDEDChEEEDE, r2: 8||EDDDDDDEDDDCEDED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/af3x1"
				          }
				        ],
				        gsx$id: {
				          $t: "32102"
				        },
				        gsx$displayname: {
				          $t: "FOWLER"
				        },
				        gsx$displayname2: {
				          $t: "Fowler"
				        },
				        gsx$firstname: {
				          $t: "Rickie"
				        },
				        gsx$lastname: {
				          $t: "Fowler"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T77"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "12:33 PM"
				        },
				        gsx$teeorder: {
				          $t: "64"
				        },
				        gsx$sortorder: {
				          $t: "81|78||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "22"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "16"
				        },
				        gsx$grouphistory: {
				          $t: "7|22||"
				        },
				        gsx$thruhistory: {
				          $t: "18|16||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|17"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+11"
				        },
				        gsx$total: {
				          $t: "80"
				        },
				        gsx$movement: {
				          $t: "4"
				        },
				        gsx$r1: {
				          $t: "|80|fdcCcCEEDEDChEEEDE"
				        },
				        gsx$r2: {
				          $t: "8||EDDDDDDEDDDCEDED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/arr0q"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "28071"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SCHMITZ, displayname2: Schmitz, firstname: Sammy, lastname: Schmitz, countrylong: United States, country: USA, video: FALSE, pos: T79, amateur: TRUE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 8:20 AM, teeorder: 3, sortorder: 87|79||, start: NAAZZ, group: 1, today: +3, thru: F, grouphistory: 16|1||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +12, total: 156, movement: 7, r1: |81|EDECDBDEDFEDGEFDDD, r2: 9|75|EDDDDDDDDDFCDEECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/arr0q"
				          }
				        ],
				        gsx$id: {
				          $t: "28071"
				        },
				        gsx$displayname: {
				          $t: "SCHMITZ"
				        },
				        gsx$displayname2: {
				          $t: "Schmitz"
				        },
				        gsx$firstname: {
				          $t: "Sammy"
				        },
				        gsx$lastname: {
				          $t: "Schmitz"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T79"
				        },
				        gsx$amateur: {
				          $t: "TRUE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "8:20 AM"
				        },
				        gsx$teeorder: {
				          $t: "3"
				        },
				        gsx$sortorder: {
				          $t: "87|79||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "1"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "16|1||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+12"
				        },
				        gsx$total: {
				          $t: "156"
				        },
				        gsx$movement: {
				          $t: "7"
				        },
				        gsx$r1: {
				          $t: "|81|EDECDBDEDFEDGEFDDD"
				        },
				        gsx$r2: {
				          $t: "9|75|EDDDDDDDDDFCDEECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/at5l7"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "34431"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: STREB, displayname2: Streb, firstname: Robert, lastname: Streb, countrylong: United States, country: USA, video: FALSE, pos: T79, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 11:27 AM, teeorder: 49, sortorder: 86|80||, start: NAAZZ, group: 17, today: +3, thru: F, grouphistory: 2|17||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +12, total: 156, movement: 7, r1: |81|DFFEDBDEDDDCEDFFDE, r2: 9|75|EEDDDDCDDDECFDECDD, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/at5l7"
				          }
				        ],
				        gsx$id: {
				          $t: "34431"
				        },
				        gsx$displayname: {
				          $t: "STREB"
				        },
				        gsx$displayname2: {
				          $t: "Streb"
				        },
				        gsx$firstname: {
				          $t: "Robert"
				        },
				        gsx$lastname: {
				          $t: "Streb"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T79"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "11:27 AM"
				        },
				        gsx$teeorder: {
				          $t: "49"
				        },
				        gsx$sortorder: {
				          $t: "86|80||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "17"
				        },
				        gsx$today: {
				          $t: "+3"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "2|17||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+12"
				        },
				        gsx$total: {
				          $t: "156"
				        },
				        gsx$movement: {
				          $t: "7"
				        },
				        gsx$r1: {
				          $t: "|81|DFFEDBDEDDDCEDFFDE"
				        },
				        gsx$r2: {
				          $t: "9|75|EEDDDDCDDDECFDECDD"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/auk5k"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "1887"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: O'MEARA, displayname2: O'Meara, firstname: Mark, lastname: O'Meara, countrylong: United States, country: USA, video: FALSE, pos: T81, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: TRUE, intl: FALSE, teetime: 8:53 AM, teeorder: 10, sortorder: 75|81||, start: NAAZZ, group: 4, today: +8, thru: F, grouphistory: 19|4||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +13, total: 157, movement: -10, r1: |77|EFDCECEDDEDDEDDDDD, r2: 5|80|EEDCEEDDDDDGFCECED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/auk5k"
				          }
				        ],
				        gsx$id: {
				          $t: "1887"
				        },
				        gsx$displayname: {
				          $t: "O'MEARA"
				        },
				        gsx$displayname2: {
				          $t: "O'Meara"
				        },
				        gsx$firstname: {
				          $t: "Mark"
				        },
				        gsx$lastname: {
				          $t: "O'Meara"
				        },
				        gsx$countrylong: {
				          $t: "United States"
				        },
				        gsx$country: {
				          $t: "USA"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T81"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "TRUE"
				        },
				        gsx$intl: {
				          $t: "FALSE"
				        },
				        gsx$teetime: {
				          $t: "8:53 AM"
				        },
				        gsx$teeorder: {
				          $t: "10"
				        },
				        gsx$sortorder: {
				          $t: "75|81||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "4"
				        },
				        gsx$today: {
				          $t: "+8"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "19|4||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+13"
				        },
				        gsx$total: {
				          $t: "157"
				        },
				        gsx$movement: {
				          $t: "-10"
				        },
				        gsx$r1: {
				          $t: "|77|EFDCECEDDEDDEDDDDD"
				        },
				        gsx$r2: {
				          $t: "5|80|EEDCEEDDDDDGFCECED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/avyq1"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "28679"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: GOMEZ, displayname2: Gomez, firstname: Fabian, lastname: Gomez, countrylong: Argentina, country: ARG, video: FALSE, pos: T81, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 10:21 AM, teeorder: 32, sortorder: 76|82||, start: NAAZZ, group: 11, today: +8, thru: F, grouphistory: 26|11||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +13, total: 157, movement: -10, r1: |77|EEDCDDCEDEECFEEBED, r2: 5|80|DEDDDDDEEDECFDFCEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/avyq1"
				          }
				        ],
				        gsx$id: {
				          $t: "28679"
				        },
				        gsx$displayname: {
				          $t: "GOMEZ"
				        },
				        gsx$displayname2: {
				          $t: "Gomez"
				        },
				        gsx$firstname: {
				          $t: "Fabian"
				        },
				        gsx$lastname: {
				          $t: "Gomez"
				        },
				        gsx$countrylong: {
				          $t: "Argentina"
				        },
				        gsx$country: {
				          $t: "ARG"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T81"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "10:21 AM"
				        },
				        gsx$teeorder: {
				          $t: "32"
				        },
				        gsx$sortorder: {
				          $t: "76|82||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "11"
				        },
				        gsx$today: {
				          $t: "+8"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "26|11||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+13"
				        },
				        gsx$total: {
				          $t: "157"
				        },
				        gsx$movement: {
				          $t: "-10"
				        },
				        gsx$r1: {
				          $t: "|77|EEDCDDCEDEECFEEBED"
				        },
				        gsx$r2: {
				          $t: "5|80|DEDDDDDEEDECFDFCEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/am4r2"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "1717"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: LYLE, displayname2: Lyle, firstname: Sandy, lastname: Lyle, countrylong: Scotland, country: SCO, video: FALSE, pos: T81, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 11:49 AM, teeorder: 54, sortorder: 61|83||, start: NAAZZ, group: 19, today: +9, thru: F, grouphistory: 4|19||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: On Green, grouplocation: On 18 Green, topar: +13, total: 157, movement: -22, r1: |76|DEEDDCDFDDDCEDECDE, r2: 4|81|DEEEDCDEGDDCFEECDE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/am4r2"
				          }
				        ],
				        gsx$id: {
				          $t: "1717"
				        },
				        gsx$displayname: {
				          $t: "LYLE"
				        },
				        gsx$displayname2: {
				          $t: "Lyle"
				        },
				        gsx$firstname: {
				          $t: "Sandy"
				        },
				        gsx$lastname: {
				          $t: "Lyle"
				        },
				        gsx$countrylong: {
				          $t: "Scotland"
				        },
				        gsx$country: {
				          $t: "SCO"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T81"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:49 AM"
				        },
				        gsx$teeorder: {
				          $t: "54"
				        },
				        gsx$sortorder: {
				          $t: "61|83||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "19"
				        },
				        gsx$today: {
				          $t: "+9"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "4|19||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "On Green"
				        },
				        gsx$grouplocation: {
				          $t: "On 18 Green"
				        },
				        gsx$topar: {
				          $t: "+13"
				        },
				        gsx$total: {
				          $t: "157"
				        },
				        gsx$movement: {
				          $t: "-22"
				        },
				        gsx$r1: {
				          $t: "|76|DEEDDCDFDDDCEDECDE"
				        },
				        gsx$r2: {
				          $t: "4|81|DEEEDCDEGDDCFEECDE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/anjbj"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "39826"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: JIN, displayname2: Jin, firstname: Cheng, lastname: Jin, countrylong: China, country: CHN, video: FALSE, pos: T81, amateur: TRUE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 12:33 PM, teeorder: 65, sortorder: 78|84||, start: NAAZZ, group: 22, today: +6, thru: 16, grouphistory: 7|22||, thruhistory: 18|16||, lastholewithshot: 2|17, lastlocation: In Fairway, grouplocation: In Fairway, topar: +13, total: 79, movement: -4, r1: |79|FdECCCEFDCFDECFDED, r2: 7||FDEDDCDDEFEBDEED , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/anjbj"
				          }
				        ],
				        gsx$id: {
				          $t: "39826"
				        },
				        gsx$displayname: {
				          $t: "JIN"
				        },
				        gsx$displayname2: {
				          $t: "Jin"
				        },
				        gsx$firstname: {
				          $t: "Cheng"
				        },
				        gsx$lastname: {
				          $t: "Jin"
				        },
				        gsx$countrylong: {
				          $t: "China"
				        },
				        gsx$country: {
				          $t: "CHN"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T81"
				        },
				        gsx$amateur: {
				          $t: "TRUE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "12:33 PM"
				        },
				        gsx$teeorder: {
				          $t: "65"
				        },
				        gsx$sortorder: {
				          $t: "78|84||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "22"
				        },
				        gsx$today: {
				          $t: "+6"
				        },
				        gsx$thru: {
				          $t: "16"
				        },
				        gsx$grouphistory: {
				          $t: "7|22||"
				        },
				        gsx$thruhistory: {
				          $t: "18|16||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|17"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+13"
				        },
				        gsx$total: {
				          $t: "79"
				        },
				        gsx$movement: {
				          $t: "-4"
				        },
				        gsx$r1: {
				          $t: "|79|FdECCCEFDCFDECFDED"
				        },
				        gsx$r2: {
				          $t: "7||FDEDDCDDEFEBDEED "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/aoxvw"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "35314"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: SULLIVAN, displayname2: Sullivan, firstname: Andy, lastname: Sullivan, countrylong: England, country: ENG, live: ac, video: FALSE, pos: T81, amateur: FALSE, past: FALSE, firsttimer: TRUE, status: A, active: TRUE, us: FALSE, intl: TRUE, teetime: 1:28 PM, teeorder: 79, sortorder: 83|85||, start: NAAZZ, group: 27, today: +5, thru: 12, grouphistory: 12|27||, thruhistory: 18|12||, lastholewithshot: 2|12, lastlocation: In the Hole, grouplocation: On Tee, topar: +13, total: 80, movement: 0, r1: |80|DEECDDDGEDECEEEDDD, r2: 8||DFDDECDEDDDE , r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/aoxvw"
				          }
				        ],
				        gsx$id: {
				          $t: "35314"
				        },
				        gsx$displayname: {
				          $t: "SULLIVAN"
				        },
				        gsx$displayname2: {
				          $t: "Sullivan"
				        },
				        gsx$firstname: {
				          $t: "Andy"
				        },
				        gsx$lastname: {
				          $t: "Sullivan"
				        },
				        gsx$countrylong: {
				          $t: "England"
				        },
				        gsx$country: {
				          $t: "ENG"
				        },
				        gsx$live: {
				          $t: "ac"
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "T81"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "A"
				        },
				        gsx$active: {
				          $t: "TRUE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "1:28 PM"
				        },
				        gsx$teeorder: {
				          $t: "79"
				        },
				        gsx$sortorder: {
				          $t: "83|85||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "27"
				        },
				        gsx$today: {
				          $t: "+5"
				        },
				        gsx$thru: {
				          $t: "12"
				        },
				        gsx$grouphistory: {
				          $t: "12|27||"
				        },
				        gsx$thruhistory: {
				          $t: "18|12||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|12"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+13"
				        },
				        gsx$total: {
				          $t: "80"
				        },
				        gsx$movement: {
				          $t: "0"
				        },
				        gsx$r1: {
				          $t: "|80|DEECDDDGEDECEEEDDD"
				        },
				        gsx$r2: {
				          $t: "8||DFDDECDEDDDE "
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/aqcgd"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "19825"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: CLARKE, displayname2: Clarke, firstname: Darren, lastname: Clarke, countrylong: N. Ireland, country: NIR, video: FALSE, pos: 86, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:42 AM, teeorder: 7, sortorder: 68|86||, start: NAAZZ, group: 3, today: +12, thru: F, grouphistory: 18|3||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +16, total: 160, movement: -27, r1: |76|DEDCCDDEEEEDFCEBDE, r2: 4|84|FDDCEDDEDDFDGFEDED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/aqcgd"
				          }
				        ],
				        gsx$id: {
				          $t: "19825"
				        },
				        gsx$displayname: {
				          $t: "CLARKE"
				        },
				        gsx$displayname2: {
				          $t: "Clarke"
				        },
				        gsx$firstname: {
				          $t: "Darren"
				        },
				        gsx$lastname: {
				          $t: "Clarke"
				        },
				        gsx$countrylong: {
				          $t: "N. Ireland"
				        },
				        gsx$country: {
				          $t: "NIR"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "86"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:42 AM"
				        },
				        gsx$teeorder: {
				          $t: "7"
				        },
				        gsx$sortorder: {
				          $t: "68|86||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "3"
				        },
				        gsx$today: {
				          $t: "+12"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "18|3||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+16"
				        },
				        gsx$total: {
				          $t: "160"
				        },
				        gsx$movement: {
				          $t: "-27"
				        },
				        gsx$r1: {
				          $t: "|76|DEDCCDDEEEEDFCEBDE"
				        },
				        gsx$r2: {
				          $t: "4|84|FDDCEDDEDDFDGFEDED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/b2zk2"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "25274"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: BOWDITCH, displayname2: Bowditch, firstname: Steven, lastname: Bowditch, countrylong: Australia, country: AUS, video: FALSE, pos: 87, amateur: FALSE, past: FALSE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 11:16 AM, teeorder: 47, sortorder: 77|87||, start: NAAZZ, group: 16, today: +10, thru: F, grouphistory: 1|16||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +17, total: 161, movement: -10, r1: |79|EGDCDCEDDDDEFDECED, r2: 7|82|DEDDEDEECEGCFDECEE, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/b2zk2"
				          }
				        ],
				        gsx$id: {
				          $t: "25274"
				        },
				        gsx$displayname: {
				          $t: "BOWDITCH"
				        },
				        gsx$displayname2: {
				          $t: "Bowditch"
				        },
				        gsx$firstname: {
				          $t: "Steven"
				        },
				        gsx$lastname: {
				          $t: "Bowditch"
				        },
				        gsx$countrylong: {
				          $t: "Australia"
				        },
				        gsx$country: {
				          $t: "AUS"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "87"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "11:16 AM"
				        },
				        gsx$teeorder: {
				          $t: "47"
				        },
				        gsx$sortorder: {
				          $t: "77|87||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "16"
				        },
				        gsx$today: {
				          $t: "+10"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "1|16||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+17"
				        },
				        gsx$total: {
				          $t: "161"
				        },
				        gsx$movement: {
				          $t: "-10"
				        },
				        gsx$r1: {
				          $t: "|79|EGDCDCEDDDDEFDECED"
				        },
				        gsx$r2: {
				          $t: "7|82|DEDDEDEECEGCFDECEE"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/b4e4j"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "2300"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: WOOSNAM, displayname2: Woosnam, firstname: Ian, lastname: Woosnam, countrylong: Wales, country: WAL, video: FALSE, pos: 88, amateur: FALSE, past: TRUE, firsttimer: FALSE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:31 AM, teeorder: 4, sortorder: 88|88||, start: NAAZZ, group: 2, today: +9, thru: F, grouphistory: 17|2||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In Fairway, grouplocation: In Fairway, topar: +19, total: 163, movement: 0, r1: |82|EEDCEDEEDEECFDFCDF, r2: 10|81|DEEDEEDEDEECFEDCED, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/b4e4j"
				          }
				        ],
				        gsx$id: {
				          $t: "2300"
				        },
				        gsx$displayname: {
				          $t: "WOOSNAM"
				        },
				        gsx$displayname2: {
				          $t: "Woosnam"
				        },
				        gsx$firstname: {
				          $t: "Ian"
				        },
				        gsx$lastname: {
				          $t: "Woosnam"
				        },
				        gsx$countrylong: {
				          $t: "Wales"
				        },
				        gsx$country: {
				          $t: "WAL"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "88"
				        },
				        gsx$amateur: {
				          $t: "FALSE"
				        },
				        gsx$past: {
				          $t: "TRUE"
				        },
				        gsx$firsttimer: {
				          $t: "FALSE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:31 AM"
				        },
				        gsx$teeorder: {
				          $t: "4"
				        },
				        gsx$sortorder: {
				          $t: "88|88||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "2"
				        },
				        gsx$today: {
				          $t: "+9"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "17|2||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In Fairway"
				        },
				        gsx$grouplocation: {
				          $t: "In Fairway"
				        },
				        gsx$topar: {
				          $t: "+19"
				        },
				        gsx$total: {
				          $t: "163"
				        },
				        gsx$movement: {
				          $t: "0"
				        },
				        gsx$r1: {
				          $t: "|82|EEDCEDEEDEECFDFCDF"
				        },
				        gsx$r2: {
				          $t: "10|81|DEEDEEDEDEECFEDCED"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      },
				      {
				        id: {
				          $t: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/b5sow"
				        },
				        updated: {
				          $t: "2016-04-08T21:13:36.718Z"
				        },
				        category: [
				          {
				            scheme: "http://schemas.google.com/spreadsheets/2006",
				            term: "http://schemas.google.com/spreadsheets/2006#list"
				          }
				        ],
				        title: {
				          type: "text",
				          $t: "49576"
				        },
				        content: {
				          type: "text",
				          $t: "displayname: CHAPLET, displayname2: Chaplet, firstname: Paul, lastname: Chaplet, countrylong: Costa Rica, country: CRC, video: FALSE, pos: 89, amateur: TRUE, past: FALSE, firsttimer: TRUE, status: F, active: FALSE, us: FALSE, intl: TRUE, teetime: 8:53 AM, teeorder: 12, sortorder: 89|89||, start: NAAZZ, group: 4, today: +10, thru: F, grouphistory: 19|4||, thruhistory: 18|18||, lastholewithshot: 2|18, lastlocation: In the Hole, grouplocation: On Tee, topar: +21, total: 165, movement: 0, r1: |83|EFDCECEGDFECEEEDDD, r2: 11|82|EDEDDDFECFECFDECDF, r3: || , r4: || "
				        },
				        link: [
				          {
				            rel: "self",
				            type: "application/atom+xml",
				            href: "https://spreadsheets.google.com/feeds/list/1QqKSLJoBIGEl75l8xgHRZScYRWuZNtiYwGHlKF3qC1w/default/public/values/b5sow"
				          }
				        ],
				        gsx$id: {
				          $t: "49576"
				        },
				        gsx$displayname: {
				          $t: "CHAPLET"
				        },
				        gsx$displayname2: {
				          $t: "Chaplet"
				        },
				        gsx$firstname: {
				          $t: "Paul"
				        },
				        gsx$lastname: {
				          $t: "Chaplet"
				        },
				        gsx$countrylong: {
				          $t: "Costa Rica"
				        },
				        gsx$country: {
				          $t: "CRC"
				        },
				        gsx$live: {
				          $t: ""
				        },
				        gsx$video: {
				          $t: "FALSE"
				        },
				        gsx$pos: {
				          $t: "89"
				        },
				        gsx$amateur: {
				          $t: "TRUE"
				        },
				        gsx$past: {
				          $t: "FALSE"
				        },
				        gsx$firsttimer: {
				          $t: "TRUE"
				        },
				        gsx$status: {
				          $t: "F"
				        },
				        gsx$active: {
				          $t: "FALSE"
				        },
				        gsx$us: {
				          $t: "FALSE"
				        },
				        gsx$intl: {
				          $t: "TRUE"
				        },
				        gsx$teetime: {
				          $t: "8:53 AM"
				        },
				        gsx$teeorder: {
				          $t: "12"
				        },
				        gsx$sortorder: {
				          $t: "89|89||"
				        },
				        gsx$start: {
				          $t: "NAAZZ"
				        },
				        gsx$group: {
				          $t: "4"
				        },
				        gsx$today: {
				          $t: "+10"
				        },
				        gsx$thru: {
				          $t: "F"
				        },
				        gsx$grouphistory: {
				          $t: "19|4||"
				        },
				        gsx$thruhistory: {
				          $t: "18|18||"
				        },
				        gsx$lastholewithshot: {
				          $t: "2|18"
				        },
				        gsx$lastlocation: {
				          $t: "In the Hole"
				        },
				        gsx$grouplocation: {
				          $t: "On Tee"
				        },
				        gsx$topar: {
				          $t: "+21"
				        },
				        gsx$total: {
				          $t: "165"
				        },
				        gsx$movement: {
				          $t: "0"
				        },
				        gsx$r1: {
				          $t: "|83|EFDCECEGDFECEEEDDD"
				        },
				        gsx$r2: {
				          $t: "11|82|EDEDDDFECFECFDECDF"
				        },
				        gsx$r3: {
				          $t: "|| "
				        },
				        gsx$r4: {
				          $t: "|| "
				        }
				      }
				    ]
				  }
				}
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

		function getEntries(){
			$http.get( entriesUrl ).success( function(data) {
				for ( var i = 0; i < data.feed.entry.length; i++ ) {
					results.entries.push( parseEntriesEntry( data.feed.entry[i] ) );
				}
	
				for (var i = 0; i < results.entries.length; i++) {
					var entry = results.entries[i];
					
					for (var j = 0; j < entry.picks.length; j++) {
						var foundMatch = false;
						for (var k = 0; k < results.selections.length; k++) {
							if (entry.picks[j] === results.selections[k].name) {
								results.selections[k].pickedBy.push(entry.name);
								foundMatch = true;
							}
						}
						
						if (!foundMatch) {
							var player = {};
							player.name = entry.picks[j];
							player.pickedBy = [];
							player.pickedBy.push(entry.name);
							
							results.selections.push(player);
						}
					}
				}
			} );
		}

		$http.get( leaderboardUrl ).success( function(data) {
			for ( var i = 0; i < data.feed.entry.length; i++ ) {
				results.players.push( parseLeaderboardEntry( data.feed.entry[i] ) );
			}
		} );

		return {
			entries : getEntries,
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

	.controller( 'GolfPickemCtrl', [ 'GoogleSheetsScraper', GolfPickemCtrl ] )

	.controller( 'PickemEntriesCtrl', [ PickemEntriesCtrl ] )

	.controller( 'ScoreboardCtrl', [ ScoreboardCtrl ] )

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

//	 @@templateCache
}());
