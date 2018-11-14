import wd from 'webdriverio';
import { Given, Then, When } from 'cucumber';
const driver = wd;
/*import chai from 'chai';
import chaiWebdriver from 'chai-webdriver';
chai.use(chaiWebdriver(driver));*/

Given(/^First click$/, async () => {

    await driver.get('/');
    await driver.elementById('buttonStartWebviewCD');
    await driver.click();
});