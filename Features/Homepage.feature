Feature: Validation of the components in homepage

  Scenario Outline: Load homepage and validates following names as default in dropdown list 
    Given the user launches application
    When user acroll down to "<nameOfButton>" button
    Then verify "<nameOfButton>" is displayed by default

    Examples:
      | nameOfButton |
      | Store        |
      | Books        |

  Scenario Outline: Verify all the dropdown list component in the book
   Given the user launches application
    When user acroll down to "<nameOfButton>" button
    And the user click on the Books button
    Then verify "<NameOfBook>" in the dropdown list

    Examples:
      | NameOfBook  |
      |Poke the Box |
      | Nikola Tesla|
      |AMATKA       |
      |Green        |
