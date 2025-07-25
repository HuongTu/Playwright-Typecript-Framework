Feature: Login to the website
    @login @regression @conduit
    Scenario: Successful login with valid credentials
        Given I navigate to the login page
        When I enter a valid username and password
        And I click on the login button
        Then I should be redirected to the homepage
