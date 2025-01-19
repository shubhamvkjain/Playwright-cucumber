import{Given, When, Then, Before,BeforeAll,After,AfterAll} from "@cucumber/cucumber";
import{test,expect, chromium,Browser,Page, BrowserContext} from "@playwright/test";



  Given('User is on register page', async function () {
    // Write code here that turns the phrase above into concrete actions
   console.log("Register it");
  });

  When('User enters valid Registration credentials', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("valid registration credentials")
  });

  Then('User is able to register Successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("registered successfully");
  });