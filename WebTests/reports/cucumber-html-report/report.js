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
  "line": 8,
  "name": "search by name",
  "description": "",
  "id": "search;search-by-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search by \u003csearchType\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i enter \u003csearchTerm\u003e into the search box",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should have \u003cresultCount\u003e items",
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
  "id": "search;search-by-name;",
  "rows": [
    {
      "cells": [
        "searchType",
        "searchTerm",
        "resultCount"
      ],
      "line": 16,
      "id": "search;search-by-name;;1"
    },
    {
      "cells": [
        "NAME",
        "sulfate",
        "30"
      ],
      "line": 17,
      "id": "search;search-by-name;;2"
    },
    {
      "cells": [
        "NDA NUMBER",
        "NDA012462",
        "1"
      ],
      "line": 18,
      "id": "search;search-by-name;;3"
    },
    {
      "cells": [
        "MANUFACTURER",
        "Greenstone",
        "81"
      ],
      "line": 19,
      "id": "search;search-by-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "search by name",
  "description": "",
  "id": "search;search-by-name;;2",
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
  "line": 9,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search by NAME",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i enter sulfate into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should have 30 items",
  "matchedColumns": [
    2
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
  "duration": 2102380275,
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
  "duration": 273074243,
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
  "duration": 124827441,
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
  "duration": 3023422729,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 78421596,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "search by name",
  "description": "",
  "id": "search;search-by-name;;3",
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
  "line": 9,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search by NDA NUMBER",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i enter NDA012462 into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should have 1 items",
  "matchedColumns": [
    2
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
  "duration": 1260541759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDA NUMBER",
      "offset": 12
    }
  ],
  "location": "Search.setSearchType(String)"
});
formatter.result({
  "duration": 215508425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDA012462",
      "offset": 8
    }
  ],
  "location": "Search.enterSearchTerm(String)"
});
formatter.result({
  "duration": 143274558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    }
  ],
  "location": "Search.checkSearchResultItemCount(String)"
});
formatter.result({
  "duration": 3029117758,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 58061566,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "search by name",
  "description": "",
  "id": "search;search-by-name;;4",
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
  "line": 9,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i search by MANUFACTURER",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "i enter Greenstone into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i should have 81 items",
  "matchedColumns": [
    2
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
  "duration": 1338374588,
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
  "duration": 225644668,
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
  "duration": 146743908,
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
  "duration": 3024700123,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 56620545,
  "status": "passed"
});
});