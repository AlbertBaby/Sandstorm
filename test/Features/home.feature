Feature: Homepage element validation 

    @wdioDemo
    Scenario Outline: Search and login to the application
    Given Open google on the browser
    # And user searches <SearchTerm> on google
    # When user clicks on the first result
    
    Examples:
        | SearchTerm | Header 2 | Header 3 |
        | wdio  | Value 2  | Value 3  |