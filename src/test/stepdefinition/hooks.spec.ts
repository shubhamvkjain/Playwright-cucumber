import{Given, When, Then, Before,BeforeAll,After,AfterAll} from "@cucumber/cucumber";
import{test,expect, chromium,Browser,Page, BrowserContext} from "@playwright/test";




// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// BeforeAll(async () => {
//     const browser = await chromium.launch({ headless: false });
// });

// Before(async () => {
//     context = await browser.newContext();
//     const page = await context.newPage();
//     global.page = page;
// });

// After(async () => {
//     await context.close();
// });

// AfterAll(async () => {
//     await browser.close();
// });
