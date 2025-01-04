Feature: Login Feature

Scenario: Successful Login

Given User is on login page
When User enters valid credentials
Then User able to login Successfully


Scenario: Unsuccessful login

Given User is on registration page
When User enters invalid credentials
Then User able to register Successfully