import { Given, When, Then } from "@wdio/cucumber-framework";
import saveScreenshot from "webdriverio/build/commands/browser/saveScreenshot";

Given(/^Open google on the browser$/, async function () {
    await browser.url("https://www.google.com");
    await browser.pause(5000);

})

Given(/^Open linkedin on the browser$/, async function () {
    await browser.url("https://www.linkedin.com/jobs/");
    await browser.pause(1000);
    await browser.fullscreenWindow();
})


Given(/^click jobs tab$/, async function () {
    let jobIcon = await $("//span[contains(text(),'Jobs')]");
    jobIcon.click();
})

When(/^user searches (.*) with (.*)$/, async function (jobName, jobLocation) {
    let eleJobName = await $(`//input[@name='keywords' and @placeholder='Search job titles or companies']`);
    await eleJobName.setValue(jobName);
    let eleJobLocation = await $(`//input[@name='location' and @class='dismissable-input__input']`);
    await eleJobLocation.setValue(jobLocation);
    await browser.keys("Enter");
})

Then(/^collect all jobs with text (.*)$/, async function (textToSearch) {
    let jobList = await $$('//a[@class="base-card__full-link"]');
    for (let index = 0; index < (await jobList).length; index++) {
        // browser.saveScreenshot(`./allure-results/screenshots/${searchTerm}-${index}.png`);
        await jobList[index].waitForClickable({ timeout: 5000 });
        browser.newWindow(await jobList[index].getAttribute("href"));
        await jobList[index].click();
        let applyBtn = await $('(//button[contains(@class,"show-more-less-htm")])[1]');
        browser.pause(1000);
        if (await applyBtn.isDisplayed()) {
            await browser.elementClick("(//button[contains(@class,'show-more-less-htm')])[1]");
        }
        var searchTerm = new String(textToSearch);
        let eleText = await $("//*[contains(text(),'" + searchTerm + "')] | //*[contains(text(),'" + searchTerm.toUpperCase + "')] | //*[contains(text(),'" + searchTerm.toLowerCase + "')]");

        if (eleText.isDisplayed()) {
            console.log("Job found");
            console.log(await driver.getUrl());
            await browser.pause(1000);

        }
        browser.back();
    }
})

When(/^Searches Job (.*) in Location (.*)$/, async function (jobName, jobLocation) {
    let eleJobName = await $(`//input[@name='keywords' and @placeholder='Search job titles or companies']`);
    await eleJobName.setValue(jobName);
    let eleJobLocation = await $(`//input[@name='location' and @placeholder='Location']`);
    await eleJobLocation.clearValue();
    await eleJobLocation.setValue(jobLocation);
    let searchButton = await $('//button[contains(text(),"Search Jobs")]');
    await searchButton.click();
})