$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "search",
  "description": "",
  "id": "search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "view drug details",
  "description": "",
  "id": "search;view-drug-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i search by \u003csearchType\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i enter \u003csearchTerm\u003e into the search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i should have \u003cresultCount\u003e items",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i click view for NDA \u003cnda\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i see the drug name \u003cdrugName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search;view-drug-details;",
  "rows": [
    {
      "cells": [
        "searchType",
        "searchTerm",
        "resultCount",
        "nda",
        "drugName"
      ],
      "line": 16,
      "id": "search;view-drug-details;;1"
    },
    {
      "cells": [
        "NAME",
        "sulfate",
        "30",
        "NDA021146",
        "ATROPINE SULFATE"
      ],
      "line": 17,
      "id": "search;view-drug-details;;2"
    },
    {
      "cells": [
        "MANUFACTURER",
        "Greenstone",
        "81",
        "NDA020702",
        "LIPITOR"
      ],
      "line": 18,
      "id": "search;view-drug-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "view drug details",
  "description": "",
  "id": "search;view-drug-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i search by NAME",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i enter sulfate into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i should have 30 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i click view for NDA NDA021146",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i see the drug name ATROPINE SULFATE",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 2558456977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NAME",
      "offset": 12
    }
  ],
  "location": "Search.setSearchType(String)"
});
formatter.result({
  "duration": 256681323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sulfate",
      "offset": 8
    }
  ],
  "location": "Search.enterSearchTerm(String)"
});
formatter.result({
  "duration": 133183850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 14
    }
  ],
  "location": "Search.checkSearchResultItemCount(String)"
});
formatter.result({
  "duration": 3026622448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDA021146",
      "offset": 21
    }
  ],
  "location": "Search.clickView(String)"
});
formatter.result({
  "duration": 359539551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ATROPINE SULFATE",
      "offset": 20
    }
  ],
  "location": "Search.findDrugNameAsPage(String)"
});
formatter.result({
  "duration": 1636797107,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 73262143,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "view drug details",
  "description": "",
  "id": "search;view-drug-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@run"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "i search by MANUFACTURER",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "i enter Greenstone into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "i should have 81 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "i click view for NDA NDA020702",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "i see the drug name LIPITOR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1342466840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MANUFACTURER",
      "offset": 12
    }
  ],
  "location": "Search.setSearchType(String)"
});
formatter.result({
  "duration": 237016168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greenstone",
      "offset": 8
    }
  ],
  "location": "Search.enterSearchTerm(String)"
});
formatter.result({
  "duration": 158808653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "81",
      "offset": 14
    }
  ],
  "location": "Search.checkSearchResultItemCount(String)"
});
formatter.result({
  "duration": 3028850964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDA020702",
      "offset": 21
    }
  ],
  "location": "Search.clickView(String)"
});
formatter.result({
  "duration": 907652113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LIPITOR",
      "offset": 20
    }
  ],
  "location": "Search.findDrugNameAsPage(String)"
});
formatter.result({
  "duration": 1321833056,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 56136925,
  "status": "passed"
});
});