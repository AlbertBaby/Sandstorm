import { Given,When,Then } from "@wdio/cucumber-framework";
import saveScreenshot from "webdriverio/build/commands/browser/saveScreenshot";

Given(/^Open google on the browser$/,async function(){
    await browser.url("https://www.google.com");
    await browser.pause(5000);
    
})

Given(/^Open linkedin on the browser$/,async function(){
    await browser.url("https://www.linkedin.com");
    // await browser.pause(1000);
    await browser.fullscreenWindow();
})
// 

Given(/^click jobs tab$/,async function(){
    let jobIcon = await $("//span[contains(text(),'Jobs')]");
    jobIcon.click();
})

When(/^user searches (.*) with (.*)$/,async function(jobName,jobLocation){
    let eleJobName = await $(`//input[@name='keywords' and @placeholder='Search job titles or companies']`);
    await eleJobName.setValue(jobName);
    let eleJobLocation = await $(`//input[@name='location' and @class='dismissable-input__input']`);
    await eleJobLocation.setValue(jobLocation);
    await browser.keys("Enter");
})

Then(/^collect all jobs with text (.*)$/,async function(searchTerm){
    let jobList = await $$('//a[@class="base-card__full-link"]');
    await driver.fullscreenWindow();
    for (let index = 0; index < (await jobList).length; index++) {
        await jobList[index].waitForClickable({timeout:5000});
        await jobList[index].click();
        let eleText = await $("//*[contains(text(),'"+searchTerm.toUpperCase+"')] | //*[contains(text(),'"+searchTerm.toLowerCase+"')]");
        if(eleText.isDisplayed()){
            console.log("Job found");
            console.log(await driver.getUrl());
            browser.takeScreenshot();
        }
        browser.back();
    }
})