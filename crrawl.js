const puppeteer = require('puppeteer');

const creeds = require('./crreds.js');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.goto('https://accounts.google.com/signin/v2/identifier?service=youtube&uilel=3&passive=true&continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den-GB%26next%3D%252F&hl=en-GB&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  
 // await page.waitForNavigation();

    //dom element selectors
    const USERNAME_SELECTOR = '#identifierId';
    
    const BUTTON_SELECTOR1 = '#identifierNext > span > span';

    
    const PASSWORD_SELECTOR = '#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input';
    

    const BUTTON_SELECTOR2 = '#passwordNext > span > span';
    
   //puppeteer provides mehod 'click' to click a DOM 
  //and 'type' to type text in input box.

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(creeds.username);
 // await page.waitFor(5*1000);
  await page.click(BUTTON_SELECTOR1);

  await page.waitFor(5*1000);
  await page.click(PASSWORD_SELECTOR);
  await page.waitFor(5*1000);
  await page.keyboard.type(creeds.password);
  //await page.waitFor(5*1000);
  await page.click(BUTTON_SELECTOR2);

}

run();