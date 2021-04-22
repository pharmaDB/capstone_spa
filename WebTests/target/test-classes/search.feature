@run
Feature: search



  Scenario Outline: validate UI elements
    Given that i am on the pharma website
    Then i should have <linkId> element on the screen
    Then quit

    Examples:
      | linkId |
      | ACTIVE INGREDIENTS |
      | NDA NUMBER |
      | NAME |
      | MANUFACTURER |



  Scenario Outline: search by name
    Given that i am on the pharma website
    When i search by <searchType>
    When i enter <searchTerm> into the search box
    Then i should have <resultCount> items
    Then quit

    Examples:
      | searchType | searchTerm | resultCount |
      | NAME | sulfate | 30 |
      | NDA NUMBER | NDA012462 | 1 |
      | MANUFACTURER | Greenstone | 81 |



  Scenario Outline: view drug details
    Given that i am on the pharma website
    When i search by <searchType>
    When i enter <searchTerm> into the search box
    Then i should have <resultCount> items
    Then i click view for NDA <nda>
    Then i see the drug name <drugName>
    Then quit

    Examples:
      | searchType | searchTerm | resultCount | nda | drugName |
      | NAME | sulfate | 30 | NDA021146 | ATROPINE SULFATE |
      | MANUFACTURER | Greenstone | 81 | NDA020702 | LIPITOR |


  Scenario Outline: view drug details
    Given that i am on the pharma website
    When i search by <searchType>
    When i enter <searchTerm> into the search box
    Then i should have <resultCount> items
    When i click view for NDA <nda>
    When i click label <labelIndex1>
    When i click label <labelIndex2>
    #Then i will have <countOfDifferences> changes
    Then quit


    # The label markers in the timeline all look the same in the doc so we
    # access them by index.  The label on the far right is 0.  When counting
    # for index be sure to not count patents.  Patents can also be clicked, but
    # they are in the list from right to left starting after the last label index
    Examples:
      | searchType | searchTerm | resultCount | nda | labelIndex1 | labelIndex2 | countOfDifferences |
      | NAME | sulfate | 30 | NDA021146 | 2 | 4 | 10 |
