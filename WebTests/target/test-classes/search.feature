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

