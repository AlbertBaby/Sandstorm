Feature: Homepage element validation

    @wdioDemo
    Scenario Outline: Search and login to the application
        Given Open google on the browser
        # And user searches <SearchTerm> on google
        # When user clicks on the first result

        Examples:
            | SearchTerm | Header 2 | Header 3 |
            | wdio       | Value 2  | Value 3  |

    @LinkedInVisa
    Scenario Outline: Search QA in linkedin and VISA
        Given Open linkedin on the browser
        # And click jobs tab
        When user searches <SearchTerm> with <Country>
        # Then collect all jobs with text <textName>

        Examples:
            | SearchTerm  | Country | textName |
            | Qa engineer | Germany | VISA     |

    @LinkedInNewVisa
    Scenario Outline: Search QA in linkedin and VISA
        Given Open linkedin on the browser
        When Searches Job <SearchTerm> in Location <Country>
        Then collect all jobs with text <textName>

        Examples:
            | SearchTerm  | Country | textName |
            | QA engineer | france  | Visa     |

    @GlassDoorVisa
    Scenario Outline: search positions in glassdoor and fetch Job contains text
        Given open glassdoor in browser
        When searches Job <Postion> in Location <Country> for glassdoor
        Then display collected results

        Examples:
            | Postion       | Country     |
            | QA engineer   | Germany     |
            | Test engineer | Germany     |
            | QA engineer   | Netherlands |
            | Test engineer | Netherlands |