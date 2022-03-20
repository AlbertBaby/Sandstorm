Feature: Validation of the components in homepage


  @Homepage @ButtonsName @DefaultButtonName
  Scenario Outline: Load homepage and validates following names as default in dropdown list 
    Given the user launches application
    When user scroll down to "<nameOfButton>" button
    Then verify "<nameOfButton>" is displayed by default

    Examples:
      | nameOfButton |
      | Store        |
      | Books        |

  @Homepage @BooksName @DropdownBooksName
  Scenario Outline: Verify all the dropdown list component in the book
   Given the user launches application
    When user scroll down to "<nameOfButton>" button
    And the user click on the Books button
    Then verify "<Name of books>" in the dropdown list

    Examples:
      | Name of books  |
      |Poke the Box |
      | Nikola Tesla|
      |AMATKA       |
      |Green        |
