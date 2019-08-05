const puppeteer = require("puppeteer");

const creeds = require("./crreds.js");

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--disable-notifications"]
  });

  const page = await browser.newPage();
  await page.goto(
    "https://www.instagram.com/accounts/login/?source=auth_switcher"
  );

  //await page.waitForNavigation({ waitUntil: "networkidle2" });

  //dom element selectors
  //  const USERNAME_SELECTOR = await page.$('input[name="username"]');

  //  const PASSWORD_SELECTOR =  await page.$('input[type="password"]');

  const BUTTON_SELECTOR =
    "#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(4)";

  //puppeteer provides mehod 'click' to click a DOM
  //and 'type' to type text in input box.

  await page.waitFor(5 * 1000);

  await page.click('input[name="username"]');

  await console.log("hello");
  await page.keyboard.type(creeds.username);
  await page.waitFor(5 * 1000);
  await page.click('input[type="password"]');
  // await page.waitFor(5*1000);
  await page.keyboard.type(creeds.password);
  //await page.waitFor(5 * 1000);
  await page.click(BUTTON_SELECTOR);
  await page.waitForNavigation({ waitUntil: "networkidle2" });

  //await page.waitFor(8 * 1000);

  //const BUTTON_SELECTOR_ID = await page.$('a[title="pearlvpuri"');

  //  var selector = ".FPmhX.notranslate.nJAzx"

  // go for catch-throw..
  // await page.waitForSelector('.FPmhX.notranslate.nJAzx');

  //  await page.click('h2[class="BrX75"]');

  await console.log("hello");

  await page.goto("https://www.instagram.com/diamirzaofficial/");

  //await page.waitForNavigation({ waitUntil: "networkidle2" });

  //await page.click(selector)

  let urls = await page.evaluate(() => {
    let results = [];

    let items = document.querySelectorAll(".k9GMp");

    console.log(items);
    items.forEach(item => {
      console.log(item);
      let b = item.innerText.split("\n");
      console.log(b);
      results.push({
        post: b[0],
        follwers: b[1],
        following: b[2]
      });
    });

    // window.history.back();

    // });

    /* if (i == clik.length - 1) {
        result.push(results);
        console.log("break worked");
        break;
      } else {
        console.log("else block");
        result.push(results);
        window.history.back();
      }*/

    console.log("in for loop");

    return results;
  });

  await console.log(urls);

  console.log("last");

  /*let listLength = await page.evaluate((sel) => {
    return document.getElementsByClassName(sel).length;
  }, LENGTH_SELECTOR_CLASS);

  console.log(listLength);


  */
}

run();
