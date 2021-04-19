@run
Feature: search





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
