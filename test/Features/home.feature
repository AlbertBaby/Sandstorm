Feature: Homepage element validation 

    @wdioDemo
    Scenario Outline: Search and login to the application
    Given Open google on the browser
    # And user searches <SearchTerm> on google
    # When user clicks on the first result
    
    Examples:
        | SearchTerm | Header 2 | Header 3 |
        | wdio  | Value 2  | Value 3  |

    @LinkedInVisa
    Scenario Outline: Search QA in linkedin and VISA
    Given Open linkedin on the browser
    And click jobs tab
    When user searches <SearchTerm> with <Country>
    Then collect all jobs with text <textName>
    
    Examples:
        | SearchTerm | Country  | textName |
        | Trivago Qa  | Germany  | google  |