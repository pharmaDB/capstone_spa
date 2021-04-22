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
  "duration": 2295293365,
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
  "duration": 193555207,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 74309139,
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
  "duration": 1486579061,
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
  "duration": 203799941,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 58944780,
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
  "duration": 1458596972,
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
  "duration": 225890406,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 56637340,
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
  "duration": 1336623758,
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
  "duration": 231655515,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 60176351,
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
  "duration": 1211615204,
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
  "duration": 228242891,
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
  "duration": 161250448,
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
  "duration": 3023712149,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 59201516,
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
  "duration": 1532665207,
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
  "duration": 289497326,
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
  "duration": 171870985,
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
  "duration": 3027433280,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 61742302,
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
  "duration": 1418442099,
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
  "duration": 276465213,
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
  "duration": 165901640,
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
  "duration": 3025829822,
  "status": "passed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "duration": 61377076,
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
  "duration": 1482194524,
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
  "duration": 264852169,
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
  "duration": 152503912,
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
  "duration": 3029973414,
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
  "duration": 393482723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ATROPINE SULFATE",
      "offset": 20
    }
  ],
  "location": "Search.findDrugNameOnPage(String)"
});
formatter.result({
  "duration": 1683996898,
  "error_message": "java.lang.AssertionError: Drug name is wrong, expected ATROPINE SULFATE got ADDERALL XR\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat bindings.Search.findDrugNameOnPage(Search.java:208)\n\tat ✽.Then i see the drug name ATROPINE SULFATE(search.feature:41)\n",
  "status": "failed"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 218823108,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not create a session: The Safari instance is already paired with a different session.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MichaelPersonal\u0027, ip: \u0027fe80:0:0:0:c24:846b:faef:9230%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: SafariDriver\nremote stacktrace: \n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:78)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:60)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:38)\n\tat bindings.Search.startOnHomePage(Search.java:85)\n\tat ✽.Given that i am on the pharma website(search.feature:36)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "LIPITOR",
      "offset": 20
    }
  ],
  "location": "Search.findDrugNameOnPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 50,
  "name": "view drug details",
  "description": "",
  "id": "search;view-drug-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 51,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "i search by \u003csearchType\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "i enter \u003csearchTerm\u003e into the search box",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "i should have \u003cresultCount\u003e items",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "i click view for NDA \u003cnda\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "i click label \u003clabelIndex1\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "i click label \u003clabelIndex2\u003e",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 58,
      "value": "#Then i will have \u003ccountOfDifferences\u003e changes"
    }
  ],
  "line": 59,
  "name": "quit",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 62,
      "value": "# The label markers in the timeline all look the same in the doc so we"
    },
    {
      "line": 63,
      "value": "# access them by index.  The label on the far right is 0.  When counting"
    },
    {
      "line": 64,
      "value": "# for index be sure to not count patents.  Patents can also be clicked, but"
    },
    {
      "line": 65,
      "value": "# they are in the list from right to left starting after the last label index"
    }
  ],
  "line": 66,
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
        "labelIndex1",
        "labelIndex2",
        "countOfDifferences"
      ],
      "line": 67,
      "id": "search;view-drug-details;;1"
    },
    {
      "cells": [
        "NAME",
        "sulfate",
        "30",
        "NDA021146",
        "2",
        "4",
        "10"
      ],
      "line": 68,
      "id": "search;view-drug-details;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 68,
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
  "line": 51,
  "name": "that i am on the pharma website",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "i search by NAME",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "i enter sulfate into the search box",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "i should have 30 items",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "i click view for NDA NDA021146",
  "matchedColumns": [
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "i click label 2",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "i click label 4",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 58,
      "value": "#Then i will have \u003ccountOfDifferences\u003e changes"
    }
  ],
  "line": 59,
  "name": "quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.startOnHomePage()"
});
formatter.result({
  "duration": 222844780,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not create a session: The Safari instance is already paired with a different session.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MichaelPersonal\u0027, ip: \u0027fe80:0:0:0:c24:846b:faef:9230%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: SafariDriver\nremote stacktrace: \n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:78)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:60)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:38)\n\tat bindings.Search.startOnHomePage(Search.java:85)\n\tat ✽.Given that i am on the pharma website(search.feature:51)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 14
    }
  ],
  "location": "Search.clickLabelWithIndex(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 14
    }
  ],
  "location": "Search.clickLabelWithIndex(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.quit()"
});
formatter.result({
  "status": "skipped"
});
});