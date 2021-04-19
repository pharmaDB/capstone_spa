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
  "name": "validate UI elements",
  "description": "",
  "id": "search;validate-ui-elements",
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
  "name": "i should have \u003clinkId\u003e element on the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "search;validate-ui-elements;",
  "rows": [
    {
      "cells": [
        "linkId"
      ],
      "line": 12,
      "id": "search;validate-ui-elements;;1"
    },
    {
      "cells": [
        "ACTIVE INGREDIENTS"
      ],
      "line": 13,
      "id": "search;validate-ui-elements;;2"
    },
    {
      "cells": [
        "NDA NUMBER"
      ],
      "line": 14,
      "id": "search;validate-ui-elements;;3"
    },
    {
      "cells": [
        "NAME"
      ],
      "line": 15,
      "id": "search;validate-ui-elements;;4"
    },
    {
      "cells": [
        "MANUFACTURER"
      ],
      "line": 16,
      "id": "search;validate-ui-elements;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "validate UI elements",
  "description": "",
  "id": "search;validate-ui-elements;;2",
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
  "name": "i should have ACTIVE INGREDIENTS element on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1881372333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACTIVE INGREDIENTS",
      "offset": 14
    }
  ],
  "location": "Search.testForElementByText(String)"
});
formatter.result({
  "duration": 181084405,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 94303431,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "validate UI elements",
  "description": "",
  "id": "search;validate-ui-elements;;3",
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
  "name": "i should have NDA NUMBER element on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1339854377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NDA NUMBER",
      "offset": 14
    }
  ],
  "location": "Search.testForElementByText(String)"
});
formatter.result({
  "duration": 197401743,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 59208368,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validate UI elements",
  "description": "",
  "id": "search;validate-ui-elements;;4",
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
  "name": "i should have NAME element on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1339488281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NAME",
      "offset": 14
    }
  ],
  "location": "Search.testForElementByText(String)"
});
formatter.result({
  "duration": 229257320,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 58617084,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validate UI elements",
  "description": "",
  "id": "search;validate-ui-elements;;5",
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
  "name": "i should have MANUFACTURER element on the screen",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1338188080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MANUFACTURER",
      "offset": 14
    }
  ],
  "location": "Search.testForElementByText(String)"
});
formatter.result({
  "duration": 218982533,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 58296659,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "search by name",
  "description": "",
  "id": "search;search-by-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "i search by \u003csearchType\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "i enter \u003csearchTerm\u003e into the search box",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i should have \u003cresultCount\u003e items",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
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
      "line": 28,
      "id": "search;search-by-name;;1"
    },
    {
      "cells": [
        "NAME",
        "sulfate",
        "30"
      ],
      "line": 29,
      "id": "search;search-by-name;;2"
    },
    {
      "cells": [
        "NDA NUMBER",
        "NDA012462",
        "1"
      ],
      "line": 30,
      "id": "search;search-by-name;;3"
    },
    {
      "cells": [
        "MANUFACTURER",
        "Greenstone",
        "81"
      ],
      "line": 31,
      "id": "search;search-by-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
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
  "line": 21,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "i search by NAME",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "i enter sulfate into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i should have 30 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1380393589,
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
  "duration": 257770348,
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
  "duration": 106075609,
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
  "duration": 3028265141,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 60276460,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
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
  "line": 21,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "i search by NDA NUMBER",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "i enter NDA012462 into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i should have 1 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1679961729,
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
  "duration": 216062532,
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
  "duration": 160485281,
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
  "duration": 3027808799,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 60416881,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
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
  "line": 21,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "i search by MANUFACTURER",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "i enter Greenstone into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i should have 81 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1394005530,
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
  "duration": 258597337,
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
  "duration": 154290582,
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
  "duration": 3028174008,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 58450900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "view drug details",
  "description": "",
  "id": "search;view-drug-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "i search by \u003csearchType\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i enter \u003csearchTerm\u003e into the search box",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "i should have \u003cresultCount\u003e items",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "i click view for NDA \u003cnda\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "i see the drug name \u003cdrugName\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "quit",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
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
      "line": 45,
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
      "line": 46,
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
      "line": 47,
      "id": "search;view-drug-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
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
  "line": 36,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "i search by NAME",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i enter sulfate into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "i should have 30 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "i click view for NDA NDA021146",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "i see the drug name ATROPINE SULFATE",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 1403158069,
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
  "duration": 246363760,
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
  "duration": 123303636,
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
  "duration": 3031416829,
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
  "duration": 381628298,
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
  "duration": 1514036670,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 57326366,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
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
  "line": 36,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "i search by MANUFACTURER",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i enter Greenstone into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "i should have 81 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "i click view for NDA NDA020702",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "i see the drug name LIPITOR",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 2095571929,
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
  "duration": 235555313,
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
  "duration": 145508005,
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
  "duration": 3025542435,
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
  "duration": 919194290,
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
  "duration": 1447066314,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 59066241,
  "status": "passed"
});
});