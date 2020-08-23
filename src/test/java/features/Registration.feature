  Feature:
    As a user
    I would like to register an account
    So that I can use the site

    @001
    Scenario: Verify user can navigate to create an account page
      Given I am on automation practice home page
      When I click on Sign in button
      Then I should be navigated to login page
      When I enter email address
      And I click on create account button
      Then I am navigated to registration page

    @002
    Scenario: Verify user can create an account successfully
      Given I am on registration page
      When I enter all personal information
      And I clicks on Register button
      Then account is created successfully

    @003
    Scenario: Verify error message during registration on login page
       Given I am on create account page
       When I click on create account button with empty email field
       Then invalid email address error message is shown

    @004
    Scenario: Verify details are pre-populated
       Given I am on create account page
       When I enter email address
       And I click on create account button
       When I enter first name and last name
       Then first name and last name should be updated in address section