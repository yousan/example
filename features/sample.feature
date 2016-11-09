# language: en
# @link https://blog.hanhans.net/2015/06/26/behat-initial/ Thanks!
Feature: Do Some Sample Testing
  Scenario: ls
  Given I am in the "directory"
  When I excecute "command'
  Then I should get "file1,file2"