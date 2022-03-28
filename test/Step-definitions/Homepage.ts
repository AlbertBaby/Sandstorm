import { Given,When,Then } from "@wdio/cucumber-framework";

Given(/^Open google on the browser$/,async function(){
    await browser.url('https://www.google.com');
    await browser.pause(5000);
    
})
