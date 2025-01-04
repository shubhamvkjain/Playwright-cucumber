import{Given, When, Then, Before,BeforeAll,After,AfterAll} from "@cucumber/cucumber";
import{test,expect, chromium,Browser,Page, BrowserContext} from "@playwright/test";




let browser: Browser;
let context: BrowserContext;
let page: Page;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async () => {
    context = await browser.newContext();
    page = await context.newPage();
    global.page = page;
});

After(async () => {
    await context.close();
});

AfterAll(async () => {
    await browser.close();
});

 Given('User is on login page', async function() {
    // Write code here that turns the phrase above into concrete actions
    
    await page.goto("https://www.facebook.com/");
  });



  When('User enters valid credentials',  async function() {
    // Write code here that turns the phrase above into concrete actions
    console.log("Hello world");
  });



  Then('User able to login Successfully', async function() {
    // Write code here that turns the phrase above into concrete actions
    console.log("Hello world");
  });

  Given('User is on registration page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.goto("https://www.google.co.in/");
  });



  When('User enters invalid credentials', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("2nd scneario")
  });



  Then('User able to register Successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
    console.log("2nd scneario")
  });